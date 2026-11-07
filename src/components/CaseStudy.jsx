import { useLayoutEffect, useRef, useState } from 'react'
import { zeusCase } from '../data'
import VideoPlayer from './VideoPlayer'
import Method from './Method'
import BeforeAfter from './Compare'
import useRailSkip from '../useRailSkip'

/* 图片点击放大 */
function Lightbox({ item, onClose }) {
  if (!item) return null
  return (
    <div className="zlightbox" onClick={onClose}>
      <button className="zlightbox__close" onClick={onClose} aria-label="关闭">
        <svg viewBox="0 0 16 16" fill="none">
          <path d="M3 3l10 10M13 3 3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      <figure onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={item.caption || ''} />
        {item.caption && <figcaption>{item.caption}</figcaption>}
      </figure>
    </div>
  )
}

/* 变体分组：A 服装 / B 状态 / C 色彩（可点选切换） */
function GroupStage({ group, onZoom }) {
  return (
    <div className="zgroup">
      <div className="zgroup__head">
        <div className="zgroup__title">
          <span className="zgroup__no">{group.no}</span>
          <h4>
            {group.title}
            <em>{group.en}</em>
          </h4>
        </div>
        <div className={`zgroup__body ${group.points?.length ? '' : 'is-single'}`}>
          <p className="zgroup__desc">{group.desc}</p>
          {group.points?.length > 0 && (
            <ul className="case__points">
              {group.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {group.compare && (
        <BeforeAfter
          before={group.compare.before}
          after={group.compare.after}
          beforeLabel={group.compare.beforeLabel}
          afterLabel={group.compare.afterLabel}
          caption={group.compare.caption}
          big
          onZoom={onZoom}
          zoomBefore={group.compare.zoomBefore}
          zoomAfter={group.compare.zoomAfter}
        />
      )}

      {group.alt?.length > 0 && (
        <div className={`case__alt ${group.alt.length === 1 ? 'case__alt--single' : ''}`}>
          {group.alt.map((a) => (
            <BeforeAfter
              key={a.label}
              before={a.before}
              after={a.after}
              beforeLabel="常态"
              afterLabel={a.afterLabel || '发怒'}
              caption={a.label}
              onZoom={onZoom}
              zoomBefore={a.zoomBefore}
              zoomAfter={a.zoomAfter}
            />
          ))}
          <p className="case__alt-hint">左侧为常态，拖动中间的竖线即可对比右侧状态</p>
        </div>
      )}

      {group.casts?.length > 0 && (
        <div className="zcasts">
          {group.casts.map((cast) => (
            <div className="zcast" key={cast.name}>
              <div className="zcast__label">
                <span>{cast.name}</span>
                <em>{cast.en}</em>
              </div>
              <div className="zcast__grid">
                {cast.items.map((m) => (
                  <figure key={m.src}>
                    <button
                      className="case__media-hit"
                      onClick={() => onZoom({ src: m.src, caption: m.caption })}
                      aria-label={`放大查看 ${m.caption}`}
                    >
                      <img src={m.src} alt={m.caption} loading="lazy" />
                      <span className="case__media-zoom">
                        <svg viewBox="0 0 16 16" fill="none">
                          <circle cx="7" cy="7" r="4.4" stroke="currentColor" strokeWidth="1.4" />
                          <path d="M10.4 10.4 14 14M7 5.2v3.6M5.2 7h3.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                        </svg>
                      </span>
                    </button>
                    <figcaption>{m.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {group.rules && (
        <div className="zrules">
          <div className="zrules__head">
            <h4>
              {group.rules.title}
              <em>{group.rules.en}</em>
            </h4>
            <p className="zrules__lead">{group.rules.lead}</p>
          </div>
          <div className="zrules__grid">
            {group.rules.items.map((r) => (
              <div className="zrules__item" key={r.cond}>
                <span className="zrules__cond">{r.cond}</span>
                <span className="zrules__arrow" aria-hidden="true">
                  <svg viewBox="0 0 16 16" fill="none">
                    <path d="M2.5 8h11M9.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="zrules__then">{r.then}</span>
              </div>
            ))}
          </div>
          {group.rules.note && <p className="zrules__note">{group.rules.note}</p>}
        </div>
      )}

      {group.palette && (
        <div className="zpalette">
          <h4>
            {group.palette.title}
            <em>{group.palette.en}</em>
          </h4>
          <p className="zpalette__lead">{group.palette.lead}</p>
        </div>
      )}

      {group.tiers?.length > 0 && (
        <div className="ztiers">
          {group.tiers.map((tier) => (
            <div className="ztier" key={tier.name}>
              <div className="ztier__label">
                <span className="ztier__name">{tier.name}</span>
                <em className="ztier__en">{tier.en}</em>
                <p className="ztier__note">{tier.note}</p>
              </div>
              <div className="ztier__grid">
                {tier.items.map((m) => (
                  <figure key={m.src}>
                    <button
                      className="case__media-hit"
                      onClick={() => onZoom({ src: m.src, caption: tier.caption || tier.name })}
                      aria-label={`放大查看 ${tier.name}`}
                    >
                      <img src={m.src} alt={tier.caption || tier.name} loading="lazy" />
                      <span className="case__media-zoom">
                        <svg viewBox="0 0 16 16" fill="none">
                          <circle cx="7" cy="7" r="4.4" stroke="currentColor" strokeWidth="1.4" />
                          <path d="M10.4 10.4 14 14M7 5.2v3.6M5.2 7h3.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                        </svg>
                      </span>
                    </button>
                  </figure>
                ))}
              </div>
              {tier.caption && <p className="ztier__caption">{tier.caption}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

/* 场景转角度：每个场景一张大图全景 + 若干延伸机位 */
function SceneBlock({ sets, onZoom }) {
  return (
    <div className="zscenes">
      {sets.map((set) => (
        <div className="zscene" key={set.key}>
          <div className="zscene__head">
            <div className="zscene__title">
              <span className="zscene__no">{set.no}</span>
              <h4>
                {set.title}
                <em>{set.en}</em>
              </h4>
            </div>
            <p className="zscene__note">{set.note}</p>
          </div>

          <figure className="zscene__pan" style={{ '--ratio': set.pan.ratio }}>
            <button
              className="case__media-hit"
              onClick={() => onZoom({ src: set.pan.src, caption: set.pan.caption })}
              aria-label={`放大查看 ${set.pan.caption}`}
            >
              <img src={set.pan.src} alt={set.pan.caption} loading="lazy" />
              <span className="zscene__tag">全景 · 定调起手</span>
              <span className="case__media-zoom">
                <svg viewBox="0 0 16 16" fill="none">
                  <circle cx="7" cy="7" r="4.4" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M10.4 10.4 14 14M7 5.2v3.6M5.2 7h3.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <figcaption>{set.pan.caption}</figcaption>
          </figure>

          <div className="zscene__shots" style={{ '--cols': set.shots.length }}>
            {set.shots.map((m) => (
              <figure key={m.src} style={{ '--ratio': m.ratio }}>
                <button
                  className="case__media-hit"
                  onClick={() => onZoom({ src: m.src, caption: m.caption })}
                  aria-label={`放大查看 ${m.caption}`}
                >
                  <img src={m.src} alt={m.caption} loading="lazy" />
                  <span className="case__media-zoom">
                    <svg viewBox="0 0 16 16" fill="none">
                      <circle cx="7" cy="7" r="4.4" stroke="currentColor" strokeWidth="1.4" />
                      <path d="M10.4 10.4 14 14M7 5.2v3.6M5.2 7h3.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <figcaption>{m.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function CaseStudy() {
  const [step, setStep] = useState(0)
  const [groupTab, setGroupTab] = useState(0)
  const [zoom, setZoom] = useState(null)
  const flowRef = useRef(null)
  const railRef = useRef(null)
  const pendingScroll = useRef(false)
  const s = zeusCase.steps[step]

  // 鼠标停在左侧母目录上滚动，直接跳过右侧长内容
  useRailSkip(railRef, flowRef)

  /* 只在用户点了母目录时才对齐流程区（挂载时不滚，避免刷新后被拽走）。
     步骤高度差异大，切换瞬间浏览器会把旧 scrollY 夹到新文档末尾；
     这里用 layout effect + instant 滚动在同一帧纠正，且绕过全局 smooth。 */
  useLayoutEffect(() => {
    if (!pendingScroll.current) return
    pendingScroll.current = false
    const el = flowRef.current
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 96
    window.scrollTo({ top, behavior: 'instant' })
  }, [step])

  return (
    <section className="case section" id="case">
      <div className="shell">
        <div className="case__sec-head" data-reveal>
          <div>
            <span className="sec-head__no">02</span>
            <h2 className="sec-head__title">
              精选项目<em>Selected Work</em>
            </h2>
          </div>
          <p className="sec-head__note">
            覆盖真人短剧、漫剧、游戏场景、UI 与角色设计。以下为完整案例与作品合集。
          </p>
        </div>

        <div className="case__head" data-reveal>
          <div className="case__head-l">
            <span className="case__kicker">Case Study 01 · {zeusCase.year}</span>
            <h3 className="case__title">
              {zeusCase.title}
              <em>{zeusCase.en}</em>
            </h3>
            <p className="case__sub">{zeusCase.subtitle}</p>
            <span className="case__badge">
              <span className="case__badge-dot" />
              我的独立全案作品 · 从人设到交付
            </span>
          </div>
          <div className="case__head-r">
            <p className="case__intro">{zeusCase.intro}</p>
            <dl className="case__meta">
              {zeusCase.meta.map((m) => (
                <div key={m.k}>
                  <dt>{m.k}</dt>
                  <dd>{m.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <Method />

        <div className="case__stage" data-reveal>
          {zeusCase.video ? (
            <VideoPlayer src={zeusCase.video} poster={zeusCase.poster} className="vplayer--case" />
          ) : (
            <div
              className="case__placeholder"
              style={{ '--ph': `url("${new URL(zeusCase.poster, document.baseURI).href}")` }}
            >
              <div className="case__ph-frame">
                <span className="case__ph-badge">
                  <span className="case__ph-dot" />
                  Video coming soon
                </span>
                <p className="case__ph-note">成片视频后续补入，此处为封面预览</p>
              </div>
            </div>
          )}
        </div>

        <div className="case__flow" data-reveal ref={flowRef}>
          <div className="case__steps" role="tablist" aria-label="资产制作流程" ref={railRef}>
            {zeusCase.steps.map((it, i) => (
              <button
                key={it.key}
                role="tab"
                aria-selected={i === step}
                className={`zstep ${i === step ? 'is-on' : ''} ${i < step ? 'is-done' : ''}`}
                onClick={() => {
                  pendingScroll.current = true
                  setStep(i)
                  setGroupTab(0)
                }}
              >
                <span className="zstep__no">{it.no}</span>
                <span className="zstep__body">
                  <span className="zstep__title">{it.title}</span>
                  <span className="zstep__en">{it.en}</span>
                </span>
              </button>
            ))}
          </div>

          <div className="case__panel" key={s.key}>
            <div className={`case__panel-head ${s.points?.length ? '' : 'is-inline'}`}>
              <div className="case__panel-l">
                <span className="case__panel-no">{s.no} / 04</span>
                <h3>{s.title}</h3>
              </div>
              <div className={`case__panel-mid ${s.points?.length ? '' : 'is-single'}`}>
                <p className="case__panel-desc">{s.desc}</p>
                {s.points?.length > 0 && (
                  <ul className="case__points">
                    {s.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {s.groups ? (
              <div className="zgroups">
                <div className="zgroups__tabs" role="tablist" aria-label={`${s.title} 分项`}>
                  {s.groups.map((g, i) => (
                    <button
                      key={g.key}
                      role="tab"
                      aria-selected={i === groupTab}
                      className={`zgroups__tab ${i === groupTab ? 'is-on' : ''}`}
                      onClick={() => setGroupTab(i)}
                    >
                      <span className="zgroups__tab-no">{g.no}</span>
                      {g.title}
                      <em>{g.en}</em>
                    </button>
                  ))}
                </div>
                <GroupStage key={s.groups[groupTab].key} group={s.groups[groupTab]} onZoom={setZoom} />
              </div>
            ) : (
            <div className="case__panel-r">
              {s.sceneSets?.length > 0 && <SceneBlock sets={s.sceneSets} onZoom={setZoom} />}
              {s.compare && (
                <BeforeAfter
                  before={s.compare.before}
                  after={s.compare.after}
                  beforeLabel={s.compare.beforeLabel}
                  afterLabel={s.compare.afterLabel}
                  caption={s.compare.caption}
                  big
                  onZoom={setZoom}
                  zoomBefore={s.compare.zoomBefore}
                  zoomAfter={s.compare.zoomAfter}
                />
              )}
              {s.mediaRows && (
                <div className="case__mediarows">
                  {s.mediaRows.items.map((m) => (
                    <figure key={m.src}>
                      <button
                        className="case__media-hit"
                        onClick={() => setZoom({ src: m.src, caption: s.mediaRows.note })}
                        aria-label={`放大查看 ${s.mediaRows.note}`}
                      >
                        <img src={m.src} alt={s.mediaRows.note} loading="lazy" />
                        <span className="case__media-zoom">
                          <svg viewBox="0 0 16 16" fill="none">
                            <circle cx="7" cy="7" r="4.4" stroke="currentColor" strokeWidth="1.4" />
                            <path d="M10.4 10.4 14 14M7 5.2v3.6M5.2 7h3.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                          </svg>
                        </span>
                      </button>
                    </figure>
                  ))}
                  <p className="case__mediarows-note">{s.mediaRows.note}</p>
                </div>
              )}

              {s.media?.length > 0 && (
                <div className={`case__media case__media--${s.media.length} ${s.pair ? 'case__media--pair' : ''}`}>
                  {s.media.map((m) => (
                    <figure
                      key={m.src}
                      className={`${m.wide ? 'is-wide' : ''} ${m.tall ? 'is-tall' : ''} ${m.span ? `is-span${m.span}` : ''}`}
                      style={{ '--ratio': m.ratio || '4 / 3' }}
                    >
                      <button
                        className="case__media-hit"
                        onClick={() => setZoom({ src: m.src, caption: m.caption })}
                        aria-label={`放大查看 ${m.caption}`}
                      >
                        <img
                          src={m.src}
                          alt={m.caption}
                          loading="lazy"
                          style={m.fit ? { objectFit: m.fit, background: '#fff' } : undefined}
                        />
                        <span className="case__media-zoom">
                          <svg viewBox="0 0 16 16" fill="none">
                            <circle cx="7" cy="7" r="4.4" stroke="currentColor" strokeWidth="1.4" />
                            <path d="M10.4 10.4 14 14M7 5.2v3.6M5.2 7h3.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                          </svg>
                        </span>
                      </button>
                      <figcaption>{m.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              )}

              {s.alt?.length > 0 && (
                <div className={`case__alt ${s.alt.length === 1 ? 'case__alt--single' : ''}`}>
                  {s.alt.map((a) => (
                    <BeforeAfter
                      key={a.label}
                      before={a.before}
                      after={a.after}
                      beforeLabel="常态"
                      afterLabel={a.afterLabel || '发怒'}
                      caption={a.label}
                      onZoom={setZoom}
                      zoomBefore={a.zoomBefore}
                      zoomAfter={a.zoomAfter}
                    />
                  ))}
                  <p className="case__alt-hint">左侧为常态，拖动中间的竖线即可对比右侧状态</p>
                </div>
              )}
            </div>
            )}
          </div>
        </div>
      </div>

      <Lightbox item={zoom} onClose={() => setZoom(null)} />
    </section>
  )
}
