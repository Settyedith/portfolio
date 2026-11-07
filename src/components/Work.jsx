import { useEffect, useRef, useState } from 'react'
import { projects } from '../data'
import VideoPlayer from './VideoPlayer'
import ImageLightbox from './ImageLightbox'

function ProjectCard({ p, onOpen }) {
  const videoRef = useRef(null)
  const [hover, setHover] = useState(false)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    if (hover) {
      const play = v.play()
      if (play && play.catch) play.catch(() => {})
    } else {
      v.pause()
      v.currentTime = 0
    }
  }, [hover])

  return (
    <article
      className={`pcard pcard--${p.span} tone-${p.tone} pcard--i${p.index} ${p.portrait ? 'pcard--portrait' : ''}`}
      data-reveal
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button className="pcard__hit" onClick={() => onOpen(p)} aria-label={`查看 ${p.title}`}>
        <div
          className="pcard__media"
          style={{
            ...(p.mediaRatio ? { aspectRatio: p.mediaRatio } : null),
            ...(p.portrait ? { '--amb': `url(${p.cover})` } : null),
          }}
        >
          {p.portrait ? (
            <div className={`pcard__series ${p.video ? 'has-video' : ''}`} aria-hidden="true">
              <span style={{ backgroundImage: `url(${p.cover})` }} />
              {p.gallery.slice(0, 2).map((g) => (
                <span key={g} style={{ backgroundImage: `url(${g})` }} />
              ))}
            </div>
          ) : (
            <img
              src={p.cover}
              alt={p.title}
              loading="lazy"
              style={p.mediaPos ? { objectPosition: p.mediaPos } : undefined}
            />
          )}

          {p.portrait && (
            <div
              className={`pcard__ambient ${hover ? 'is-on' : ''}`}
              aria-hidden="true"
              style={{ '--amb-base': `url(${(p.ambient || p.gallery)[0]})` }}
            >
              {[0, 1].map((i) => {
                const list = p.ambient || p.gallery
                return <span key={i} style={{ backgroundImage: `url(${list[i % list.length]})` }} />
              })}
            </div>
          )}

          {p.video && (
            <video
              ref={videoRef}
              className={`pcard__video ${hover ? 'is-on' : ''} ${p.portrait ? 'is-portrait' : ''}`}
              src={p.video}
              poster={p.poster}
              muted
              loop
              playsInline
              preload="none"
            />
          )}

          <div className="pcard__veil" />

          {p.video && (
            <span className={`pcard__play ${hover ? 'is-hover' : ''}`} aria-hidden="true">
              <svg viewBox="0 0 16 16">
                <path d="M5.4 3.3v9.4c0 .5.6.8 1 .5l6.6-4.7c.4-.3.4-.9 0-1.2L6.4 2.6c-.4-.3-1 0-1 .7Z" fill="currentColor" />
              </svg>
              <em>{hover ? 'Playing' : 'Play'}</em>
            </span>
          )}

          {!p.video && p.gallery?.length > 1 && (
            <div className="pcard__stack">
              {p.gallery.slice(0, 2).map((g) => (
                <img key={g} src={g} alt="" loading="lazy" />
              ))}
            </div>
          )}
        </div>

        <div className="pcard__body">
          <div className="pcard__top">
            <span className="pcard__index">{p.index}</span>
            <span className="pcard__arrow" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3.5 12.5 12.5 3.5M12.5 3.5H5.6M12.5 3.5v6.9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </span>
          </div>
          <h3>{p.title}</h3>
          <p className="pcard__sub">{p.subtitle}</p>
          <p className="pcard__desc">{p.desc}</p>
          <div className="pcard__tags">
            {p.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </button>
    </article>
  )
}

export default function Work() {
  const [active, setActive] = useState(null)
  const [zoom, setZoom] = useState(null)

  useEffect(() => {
    if (!active) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && setActive(null)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [active])

  const assets = active
    ? active.assets || (active.gallery || []).map((src) => ({ src }))
    : []
  const groups = active?.assetGroups || null

  return (
    <section className="work section" id="work">
      <div className="shell">
        <div className="sec-head sec-head--split" data-reveal>
          <div>
            <span className="sec-head__no">03</span>
            <h2 className="sec-head__title">
              更多作品<em>More Work</em>
            </h2>
          </div>
          <p className="sec-head__note">
            漫剧、游戏场景、UI 与角色设计。悬停可预览动态，点开看完整视频与配套资产。
          </p>
        </div>

        <div className="work__grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} p={p} onOpen={setActive} />
          ))}
        </div>
      </div>

      {active && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setActive(null)}>
          <div className="lightbox__inner" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox__close" onClick={() => setActive(null)} aria-label="关闭">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 3l10 10M13 3 3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            <div className="lightbox__head">
              <span className="lightbox__index">{active.index}</span>
              <h3>{active.title}</h3>
              <p>{active.subtitle}</p>
            </div>

            {active.video ? (
              <VideoPlayer
                src={active.video}
                poster={active.poster}
                className="vplayer--lightbox"
                portrait={active.portrait}
              />
            ) : (
              <figure className="lightbox__lead">
                <img src={active.cover} alt={active.title} />
              </figure>
            )}

            <p className="lightbox__desc">{active.desc}</p>

            {groups ? (
              <>
                <p className="lightbox__label">
                  资产图片 · Assets
                  <em>点击可放大</em>
                </p>
                {groups.map((grp) => (
                  <div className="lightbox__group" key={grp.title}>
                    <p className="lightbox__group-title">
                      {grp.title}
                      <em>{grp.en}</em>
                    </p>
                    <div
                      className={`lightbox__grid ${active.portrait ? 'is-portrait' : ''}`}
                      style={grp.ratio ? { '--grp-ratio': grp.ratio } : undefined}
                    >
                      {grp.items.map((g, i) => (
                        <figure key={g.src + i}>
                          <button
                            className="case__media-hit"
                            onClick={() => setZoom({ src: g.src, caption: g.caption })}
                            aria-label={`放大查看 ${g.caption}`}
                          >
                            <img src={g.src} alt={g.caption} loading="lazy" />
                            <span className="case__media-zoom">
                              <svg viewBox="0 0 16 16" fill="none">
                                <circle cx="7" cy="7" r="4.4" stroke="currentColor" strokeWidth="1.4" />
                                <path d="M10.4 10.4 14 14M7 5.2v3.6M5.2 7h3.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                              </svg>
                            </span>
                          </button>
                          {g.caption && <figcaption>{g.caption}</figcaption>}
                        </figure>
                      ))}
                    </div>
                  </div>
                ))}
              </>
            ) : (
              assets.length > 0 && (
                <>
                  <p className="lightbox__label">
                    资产图片 · Assets
                    <em>点击可放大</em>
                  </p>
                  <div className={`lightbox__grid ${active.portrait ? 'is-portrait' : ''}`}>
                    {assets.map((g, i) => (
                      <figure key={g.src + i}>
                        <button
                          className="case__media-hit"
                          onClick={() => setZoom({ src: g.src, caption: g.caption || `${active.title} 资产 ${i + 1}` })}
                          aria-label={`放大查看 ${g.caption || active.title}`}
                        >
                          <img src={g.src} alt={g.caption || `${active.title} 资产 ${i + 1}`} loading="lazy" />
                          <span className="case__media-zoom">
                            <svg viewBox="0 0 16 16" fill="none">
                              <circle cx="7" cy="7" r="4.4" stroke="currentColor" strokeWidth="1.4" />
                              <path d="M10.4 10.4 14 14M7 5.2v3.6M5.2 7h3.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                            </svg>
                          </span>
                        </button>
                        {g.caption && <figcaption>{g.caption}</figcaption>}
                      </figure>
                    ))}
                  </div>
                </>
              )
            )}
          </div>
        </div>
      )}

      <ImageLightbox item={zoom} onClose={() => setZoom(null)} />
    </section>
  )
}
