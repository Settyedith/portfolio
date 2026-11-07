import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const videoRef = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const onCanPlay = () => setReady(true)
    v.addEventListener('canplay', onCanPlay)
    const play = v.play()
    if (play && play.catch) play.catch(() => {})
    return () => v.removeEventListener('canplay', onCanPlay)
  }, [])

  return (
    <section className="hero" id="top">
      <div className={`hero__media ${ready ? 'is-ready' : ''}`}>
        <video
          ref={videoRef}
          className="hero__video"
          src="assets/video/hero.mp4?v=3"
          poster="assets/video/hero-poster.jpg?v=3"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="hero__scrim" />
        <div className="hero__haze" />
        <div className="hero__grain" />
      </div>

      <div className="hero__aurora" aria-hidden="true">
        <span className="orb orb--1" />
        <span className="orb orb--2" />
        <span className="orb orb--3" />
      </div>

      <div className="hero__content shell">
        <div className="hero__eyebrow" data-reveal>
          <span className="hero__badge">Portfolio 2026</span>
          <span className="hero__line" />
          <span className="hero__eyebrow-text">AI Visual Designer · Short-Drama Asset Artist</span>
        </div>

        <h1 className="hero__title">
          <span className="hero__title-row" data-reveal style={{ '--d': '0.05s' }}>
            <span className="hero__title-cn">让想象</span>
          </span>
          <span className="hero__title-row" data-reveal style={{ '--d': '0.16s' }}>
            <span className="hero__title-cn">长成</span>
            <em className="hero__title-en">Visual</em>
          </span>
          <span className="hero__title-row" data-reveal style={{ '--d': '0.27s' }}>
            <span className="hero__title-cn">可被看见的样子</span>
          </span>
        </h1>

        <div className="hero__bottom">
          <p className="hero__lead" data-reveal style={{ '--d': '0.34s' }}>
            我是张诗婷，一名 AI 视觉设计师与 AI 短剧资产师。
            用 AIGC 把剧本里的世界，一帧一帧地做成真的。
          </p>

          <div className="hero__actions" data-reveal style={{ '--d': '0.42s' }}>
            <a className="btn btn--primary" href="#case">
              查看作品
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a className="btn btn--ghost" href="#contact">
              联系我
            </a>
          </div>
        </div>
      </div>

      <div className="hero__foot shell">
        <div className="hero__scroll">
          <span className="hero__scroll-line" />
          <span>Scroll</span>
        </div>
        <div className="hero__meta">
          <span>4 年视觉设计经验</span>
          <span className="hero__meta-dot" />
          <span>广州</span>
          <span className="hero__meta-dot" />
          <span>Available for work</span>
        </div>
      </div>
    </section>
  )
}
