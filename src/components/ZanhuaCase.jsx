import { useLayoutEffect, useRef, useState } from 'react'
import { zanhuaCase } from '../data'
import ImageLightbox from './ImageLightbox'
import BeforeAfter from './Compare'
import useRailSkip from '../useRailSkip'

function PairStage({ pairs, propPairs, onZoom }) {
  return (
    <>
      <div className="zhpairs">
        {pairs.map((p) => (
          <BeforeAfter
            key={p.label}
            before={p.before}
            after={p.after}
            beforeLabel="参考"
            afterLabel="转绘"
            caption={p.label}
            onZoom={onZoom}
          />
        ))}
      </div>

      {propPairs?.length > 0 && (
        <div className="zhprops">
          <div className="zhprops__head">
            <h5>
              道具转绘
              <em>Props Redraw</em>
            </h5>
            <p>饰品比人物更考验结构还原：花瓣的薄度、金丝的走向、镂空的孔位、珠子的透度，都要在转绘后还认得出来。</p>
          </div>
          <div className="zhpairs zhpairs--props">
            {propPairs.map((p) => (
              <BeforeAfter
                key={p.label}
                before={p.before}
                after={p.after}
                beforeLabel="原图"
                afterLabel="转绘"
                caption={p.label}
                ratio="1 / 1"
                onZoom={onZoom}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}

/* 模型选择：按资产类型分组，每组四张并排，文案跟在图片下方 */
function NavBlock({ group, onZoom }) {
  const sets = group.navSets || [{ label: null, items: group.nav }]

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
        <div className="zgroup__body is-single">
          <p className="zgroup__desc">{group.note}</p>
        </div>
      </div>

      {sets.map((set) => (
        <section className="zhnavset" key={set.label || 'all'}>
          {set.label && (
            <div className="zhnavset__head">
              <h5>
                {set.label}
                <em>{set.en}</em>
              </h5>
              <p>{set.note}</p>
            </div>
          )}
          <div className="zhnav">
            {set.items.map((n, i) => (
              <figure key={n.key} className={`zhnav__item ${n.final ? 'is-final' : ''}`}>
                <button
                  className="case__media-hit"
                  onClick={() => onZoom({ src: n.src, caption: n.caption })}
                  aria-label={`放大查看 ${n.caption}`}
                >
                  <img
                    src={n.src}
                    alt={n.caption}
                    loading="lazy"
                    style={set.ratio ? { aspectRatio: set.ratio } : undefined}
                  />
                  <span className="case__media-zoom">
                    <svg viewBox="0 0 16 16" fill="none">
                      <circle cx="7" cy="7" r="4.4" stroke="currentColor" strokeWidth="1.4" />
                      <path d="M10.4 10.4 14 14M7 5.2v3.6M5.2 7h3.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <figcaption>
                  <span className="zhnav__word">
                    <i>{String(i + 1).padStart(2, '0')}</i>
                    {n.title}
                    <em>{n.en}</em>
                  </span>
                  <p>{n.desc}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

/* 提示词工程：固定三段画风 / 构图 / 精度，只换材质槽 */
function PromptBlock({ prompt }) {
  return (
    <div className="zprompt">
      <div className="zprompt__head">
        <h4>
          {prompt.title}
          <em>{prompt.en}</em>
        </h4>
        <p className="zprompt__desc">{prompt.desc}</p>
      </div>

      <div className="zprompt__layers">
        {prompt.layers.map((l, i) => (
          <div className="zprompt__layer" key={l.k}>
            <span className="zprompt__layer-k">
              <i>{String(i + 1).padStart(2, '0')}</i>
              {l.k}
            </span>
            <span className="zprompt__layer-v">{l.v}</span>
            <span className="zprompt__lock">固定</span>
          </div>
        ))}
        <div className="zprompt__layer is-slot">
          <span className="zprompt__layer-k">
            <i>04</i>
            材质
          </span>
          <span className="zprompt__layer-v">按目标材质替换，见下方微调词</span>
          <span className="zprompt__lock is-open">可换</span>
        </div>
      </div>

      <div className="zprompt__tweaks">
        {prompt.tweaks.map((t) => (
          <div className="zprompt__tweak" key={t.mat}>
            <span className="zprompt__tweak-mat">
              {t.mat}
              <em>{t.en}</em>
            </span>
            <span className="zprompt__tweak-key">{t.key}</span>
          </div>
        ))}
      </div>

      <p className="zprompt__note">{prompt.note}</p>
    </div>
  )
}

/* 多材质实践：按材质分四类，每类四张，下方小字说明材质与工艺 */
function MatBlock({ categories, prompt, onZoom }) {
  return (
    <div className="zmat">
      {prompt && <PromptBlock prompt={prompt} />}
      {categories.map((c) => (
        <div key={c.label} className="zmat__cat">
          <div className="zmat__head">
            <h4>
              {c.label}
              <em>{c.en}</em>
            </h4>
            <span className="zmat__count">{c.items.length} 件</span>
          </div>
          <div className="zhgrid zmat__grid">
            {c.items.map((m) => (
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
  )
}

/* UI 实装：美术自测 / 程序实装两批，各带一组说明 */
function UiBlock({ sets, onZoom }) {
  return (
    <div className="zmat zui">
      {sets.map((set) => (
        <div key={set.label} className="zmat__cat">
          <div className="zmat__head">
            <h4>
              {set.label}
              <em>{set.en}</em>
            </h4>
            <span className="zmat__count">{set.items.length} 张</span>
          </div>
          <p className="zui__note">{set.note}</p>
          <div className="zhgrid" style={{ '--zh-cols': set.cols || 3 }}>
            {set.items.map((m) => (
              <figure key={m.src} style={{ '--ratio': m.ratio || set.ratio || '3 / 4' }}>
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

/* 切图交付：三张卡片轮转，中间最大最清晰，左右两张缩小虚化 */
function CutBlock({ items, onZoom }) {
  const [idx, setIdx] = useState(0)
  const n = items.length
  const cur = items[idx]
  const go = (d) => setIdx((v) => (v + d + n) % n)

  return (
    <div className="zhcarousel">
      <div className="zhcarousel__stage">
        {items.map((c, i) => {
          let d = (i - idx + n) % n
          if (d === n - 1) d = -1
          const pos = d === 0 ? 'is-center' : d < 0 ? 'is-left' : 'is-right'
          return (
            <figure className={`zhcarousel__card ${pos}`} key={c.src}>
              <button
                className="case__media-hit"
                onClick={() => (d === 0 ? onZoom({ src: c.src, caption: `${c.label} · ${c.note}` }) : setIdx(i))}
                aria-label={d === 0 ? `放大查看 ${c.label} 切图包` : `切换到 ${c.label} 切图包`}
                tabIndex={d === 0 ? 0 : -1}
              >
                <img src={c.src} alt={`${c.label} 切图包`} loading="lazy" />
                {d === 0 && (
                  <span className="case__media-zoom">
                    <svg viewBox="0 0 16 16" fill="none">
                      <circle cx="7" cy="7" r="4.4" stroke="currentColor" strokeWidth="1.4" />
                      <path d="M10.4 10.4 14 14M7 5.2v3.6M5.2 7h3.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </span>
                )}
              </button>
            </figure>
          )
        })}

        <button className="zhcarousel__nav is-prev" onClick={() => go(-1)} aria-label="上一张">
          <svg viewBox="0 0 16 16" fill="none">
            <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button className="zhcarousel__nav is-next" onClick={() => go(1)} aria-label="下一张">
          <svg viewBox="0 0 16 16" fill="none">
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="zhcarousel__meta" key={cur.src}>
        <span className="zhcarousel__label">
          {cur.label}
          <em>{cur.en}</em>
        </span>
        <span className="zhcarousel__note">{cur.note}</span>
        <span className="zhcarousel__count">
          {String(idx + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
        </span>
      </div>
    </div>
  )
}

/* 关卡成品：每条要点作为小节标题，成品图跟在下面成段排布 */
function SectionBlock({ sections, onZoom }) {
  return (
    <div className="zsections">
      {sections.map((sec) => (
        <div className={`zsection ${sec.items.length === 1 ? 'is-feature' : ''}`} key={sec.no}>
          <div className="zsection__head">
            <div className="zsection__title">
              <span className="zsection__no">{sec.no}</span>
              <h4>
                {sec.title}
                <em>{sec.en}</em>
              </h4>
            </div>
            <p className="zsection__desc">{sec.desc}</p>
          </div>
          <div
            className="zhgrid zsection__grid"
            style={{ '--zh-cols': sec.items.length === 1 ? 1 : sec.cols || 3 }}
          >
            {sec.items.map((m) => (
              <figure key={m.src} style={{ '--ratio': m.ratio || '3 / 4' }}>
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

function GroupBlock({ group, onZoom }) {
  if (group.nav || group.navSets) return <NavBlock group={group} onZoom={onZoom} />
  if (group.categories) return <MatBlock categories={group.categories} prompt={group.prompt} onZoom={onZoom} />
  if (group.sections) return <SectionBlock sections={group.sections} onZoom={onZoom} />
  if (group.uiSets) return <UiBlock sets={group.uiSets} onZoom={onZoom} />
  if (group.cuts) return <CutBlock items={group.cuts} onZoom={onZoom} />

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
        <div className="zgroup__body is-single">
          <p className="zgroup__desc">{group.note}</p>
        </div>
      </div>

      {(group.pairs?.length > 0 || group.propPairs?.length > 0) && (
        <PairStage pairs={group.pairs || []} propPairs={group.propPairs} onZoom={onZoom} />
      )}

      {group.items?.length > 0 && (
        <div className="zhgrid" style={{ '--zh-cols': group.cols || 3 }}>
          {group.items.map((m) => (
            <figure key={m.src} style={{ '--ratio': m.ratio || '3 / 4' }}>
              <button
                className="case__media-hit"
                onClick={() => onZoom({ src: m.src, caption: m.caption })}
                aria-label={`放大查看 ${m.caption}`}
              >
                <img
                  src={m.src}
                  alt={m.caption}
                  loading="lazy"
                  style={m.fit ? { objectFit: m.fit, background: '#faf8f5' } : undefined}
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
    </div>
  )
}

export default function ZanhuaCase() {
  const [step, setStep] = useState(0)
  const [groupTab, setGroupTab] = useState(0)
  const [zoom, setZoom] = useState(null)
  const flowRef = useRef(null)
  const railRef = useRef(null)
  const pendingScroll = useRef(false)
  const s = zanhuaCase.steps[step]
  const group = s.groups?.[groupTab]

  // 鼠标停在左侧母目录上滚动，直接跳过右侧长内容
  useRailSkip(railRef, flowRef)

  /* 只在用户点了母目录时才对齐流程区（挂载时不滚） */
  useLayoutEffect(() => {
    if (!pendingScroll.current) return
    pendingScroll.current = false
    const el = flowRef.current
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 96
    window.scrollTo({ top, behavior: 'instant' })
  }, [step])

  return (
    <section className="case section" id="zanhua">
      <div className="shell">
        <div className="case__head" data-reveal>
          <div className="case__head-l">
            <span className="case__kicker">Case Study {zanhuaCase.index} · {zanhuaCase.year}</span>
            <h3 className="case__title">
              {zanhuaCase.title}
              <em>{zanhuaCase.en}</em>
            </h3>
            <p className="case__sub">{zanhuaCase.subtitle}</p>
            <span className="case__badge">
              <span className="case__badge-dot" />
              {zanhuaCase.badge}
            </span>
          </div>
          <div className="case__head-r">
            <p className="case__intro">{zanhuaCase.intro}</p>
            <dl className="case__meta">
              {zanhuaCase.meta.map((m) => (
                <div key={m.k}>
                  <dt>{m.k}</dt>
                  <dd>{m.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="case__stage zhhero" data-reveal>
          {zanhuaCase.hero.map((src, i) => (
            <button
              key={src}
              className="zhhero__item"
              onClick={() => setZoom({ src, caption: `${zanhuaCase.title} · 关卡成品 ${i + 1}` })}
              aria-label="放大查看关卡成品"
            >
              <img src={src} alt={`${zanhuaCase.title} 成品 ${i + 1}`} loading={i ? 'lazy' : 'eager'} />
            </button>
          ))}
        </div>

        <div className="case__flow" data-reveal ref={flowRef}>
          <div className="case__steps" role="tablist" aria-label="簪花资产制作流程" ref={railRef}>
            {zanhuaCase.steps.map((it, i) => (
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
                <span className="case__panel-no">{s.no} / 0{zanhuaCase.steps.length}</span>
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

            {s.groups?.length > 1 && (
              <div className="zgroups__tabs" role="tablist" aria-label={`${s.title} 分项`}>
                {s.groups.map((g, i) => (
                  <button
                    key={g.no}
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
            )}

            {group && <GroupBlock key={group.no} group={group} onZoom={setZoom} />}
          </div>
        </div>
      </div>

      <ImageLightbox item={zoom} onClose={() => setZoom(null)} />
    </section>
  )
}
