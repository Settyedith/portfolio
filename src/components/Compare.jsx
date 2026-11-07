import { useEffect, useRef, useState } from 'react'

/* 拖动对比：左=常态，右=发怒/战损 */
export default function BeforeAfter({
  before,
  after,
  beforeLabel = '常态',
  afterLabel = '发怒',
  caption,
  big,
  ratio,
  onZoom,
  zoomBefore,
  zoomAfter,
}) {
  // 全图对比：中线放在正中，左右各露一半，拖动即可看清两种状态
  const [pos, setPos] = useState(50)
  // 用户一旦上手（点击 / 拖动）就接管，停止自动演示
  const [manual, setManual] = useState(false)
  const stageRef = useRef(null)
  const posRef = useRef(50)

  /* 自动演示：对比条在画面内缓慢往返，提示「这里可以拖」。
     只在组件进入视口后跑，离开视口停掉 rAF；用户点击后彻底停止。
     相位从「当前所在位置」反推，重新进入视口时接得上，不会跳回中间。 */
  useEffect(() => {
    if (manual) return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return

    const el = stageRef.current
    if (!el) return

    const PERIOD = 6200
    // 摆幅拉到 50：往返两端正好贴在图片左右边缘，前后两图各自完整露出
    const AMP = 50
    let raf = 0
    let t0 = 0

    const loop = (now) => {
      if (!t0) {
        const k = Math.min(1, Math.max(-1, (posRef.current - 50) / AMP))
        t0 = now - (Math.asin(k) / (Math.PI * 2)) * PERIOD
      }
      const p = 50 + AMP * Math.sin(((now - t0) / PERIOD) * Math.PI * 2)
      posRef.current = p
      setPos(p)
      raf = requestAnimationFrame(loop)
    }

    let running = false
    const start = () => {
      if (running) return
      running = true
      raf = requestAnimationFrame(loop)
    }
    const stop = () => {
      running = false
      cancelAnimationFrame(raf)
      raf = 0
    }

    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0.35 }
    )
    io.observe(el)

    return () => {
      stop()
      io.disconnect()
    }
  }, [manual])

  const onDown = (e) => {
    e.preventDefault()
    setManual(true)
    const r = e.currentTarget.getBoundingClientRect()
    const set = (x) => setPos(Math.min(100, Math.max(0, ((x - r.left) / r.width) * 100)))
    set(e.clientX)
    const move = (ev) => set(ev.clientX)
    const up = () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', up)
    }
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)
  }

  return (
    <figure className={`zcompare ${big ? 'zcompare--big' : ''}`}>
      <div
        className="zcompare__stage"
        ref={stageRef}
        onPointerDown={onDown}
        style={ratio ? { aspectRatio: ratio } : undefined}
      >
        <img className="zcompare__after" src={after} alt={afterLabel} loading="lazy" />
        <div className="zcompare__before" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <img src={before} alt={beforeLabel} loading="lazy" />
        </div>
        <span className="zcompare__handle" style={{ left: `${pos}%` }} />
        <span className="zcompare__tag zcompare__tag--l">{beforeLabel}</span>
        <span className="zcompare__tag zcompare__tag--r">{afterLabel}</span>
        <span className="zcompare__hint">拖动鼠标进行对比</span>
        {onZoom && (
          <button
            className="zcompare__zoom"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation()
              onZoom({ src: zoomAfter || after, caption: `${caption || ''} · ${afterLabel}` })
            }}
            aria-label="放大查看"
          >
            <svg viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="4.4" stroke="currentColor" strokeWidth="1.4" />
              <path d="M10.4 10.4 14 14M7 5.2v3.6M5.2 7h3.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </button>
        )}
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
