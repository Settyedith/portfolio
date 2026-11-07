import { useEffect, useRef, useState } from 'react'

export function fmtTime(t) {
  if (!Number.isFinite(t) || t < 0) t = 0
  const m = Math.floor(t / 60)
  const s = Math.floor(t % 60)
  return `${m}:${String(s).padStart(2, '0')}`
}

export default function VideoPlayer({ src, poster, className = '', autoPlay = true, portrait = false }) {
  const wrapRef = useRef(null)
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)
  const [volume, setVolume] = useState(1)
  const [time, setTime] = useState(0)
  const [dur, setDur] = useState(0)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const onTime = () => setTime(v.currentTime)
    const onMeta = () => setDur(v.duration)
    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    const onVolume = () => {
      setVolume(v.volume)
      setMuted(v.muted || v.volume === 0)
    }
    v.addEventListener('timeupdate', onTime)
    v.addEventListener('loadedmetadata', onMeta)
    v.addEventListener('play', onPlay)
    v.addEventListener('pause', onPause)
    v.addEventListener('volumechange', onVolume)
    if (autoPlay) {
      // 浏览器只允许静音自动播放；用户点音量按钮后立即恢复声音
      v.muted = true
      const p = v.play()
      if (p && p.catch) p.catch(() => {})
    }
    return () => {
      v.removeEventListener('timeupdate', onTime)
      v.removeEventListener('loadedmetadata', onMeta)
      v.removeEventListener('play', onPlay)
      v.removeEventListener('pause', onPause)
      v.removeEventListener('volumechange', onVolume)
    }
  }, [autoPlay, src])

  const toggle = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) v.play().catch(() => {})
    else v.pause()
  }

  const seekTo = (clientX) => {
    const track = wrapRef.current?.querySelector('.vplayer__track')
    const v = videoRef.current
    if (!track || !v || !dur) return
    const r = track.getBoundingClientRect()
    const ratio = Math.min(1, Math.max(0, (clientX - r.left) / r.width))
    v.currentTime = ratio * dur
    setTime(v.currentTime)
  }

  const onTrackDown = (e) => {
    e.preventDefault()
    seekTo(e.clientX)
    const move = (ev) => seekTo(ev.clientX)
    const up = () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', up)
    }
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)
  }

  const toggleMute = () => {
    const v = videoRef.current
    if (!v) return
    const next = !v.muted
    v.muted = next
    if (!next && v.volume === 0) {
      v.volume = 1
      setVolume(1)
    }
    setMuted(next)
    // 取消静音时若视频尚未播放，顺手开始播放，避免用户以为没声音
    if (!next && v.paused) v.play().catch(() => {})
  }

  const applyVolume = (val) => {
    const v = videoRef.current
    if (!v) return
    const next = Math.min(1, Math.max(0, val))
    v.volume = next
    v.muted = next === 0
    setVolume(next)
    setMuted(next === 0)
    if (next > 0 && v.paused) v.play().catch(() => {})
  }

  const onVolumeDown = (e) => {
    e.preventDefault()
    const track = e.currentTarget
    const set = (x) => {
      const r = track.getBoundingClientRect()
      applyVolume((x - r.left) / r.width)
    }
    set(e.clientX)
    const move = (ev) => set(ev.clientX)
    const up = () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', up)
    }
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)
  }

  const fullscreen = () => {
    const el = wrapRef.current
    if (!el) return
    if (document.fullscreenElement) document.exitFullscreen?.()
    else el.requestFullscreen?.()
  }

  const pct = dur ? (time / dur) * 100 : 0

  return (
    <div
      className={`vplayer ${portrait ? 'vplayer--portrait' : ''} ${className}`}
      ref={wrapRef}
      style={
        portrait && poster
          ? { '--vp-poster': `url("${new URL(poster, document.baseURI).href}")` }
          : undefined
      }
    >
      <video
        ref={videoRef}
        className="vplayer__video"
        src={src}
        poster={poster}
        muted={muted}
        playsInline
        onClick={toggle}
        onEnded={() => setPlaying(false)}
      />

      <div className="vplayer__bar">
        <button className="vplayer__btn" onClick={toggle} aria-label={playing ? '暂停' : '播放'}>
          {playing ? (
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <rect x="4" y="3" width="2.8" height="10" rx="1" fill="currentColor" />
              <rect x="9.2" y="3" width="2.8" height="10" rx="1" fill="currentColor" />
            </svg>
          ) : (
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M5 3.2v9.6c0 .5.6.8 1 .5l7-4.8c.4-.3.4-.9 0-1.2l-7-4.8c-.4-.3-1 0-1 .7Z" fill="currentColor" />
            </svg>
          )}
        </button>

        <span className="vplayer__time">
          {fmtTime(time)} <i>/</i> {fmtTime(dur)}
        </span>

        <div className="vplayer__track" onPointerDown={onTrackDown} role="slider"
          aria-label="播放进度" aria-valuemin={0} aria-valuemax={Math.round(dur)}
          aria-valuenow={Math.round(time)} tabIndex={0}>
          <div className="vplayer__rail">
            <div className="vplayer__fill" style={{ width: `${pct}%` }} />
          </div>
          <div className="vplayer__knob" style={{ left: `${pct}%` }} />
        </div>

        <div className={`vplayer__vol ${muted ? 'is-muted' : ''}`}>
          <button
            className="vplayer__btn vplayer__btn--sm"
            onClick={toggleMute}
            aria-label={muted ? '取消静音' : '静音'}
            aria-pressed={!muted}
          >
            {muted ? (
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="M3 6h2.2L8.5 3.4v9.2L5.2 10H3z" fill="currentColor" />
                <path d="m10.4 6.2 3 3.6M13.4 6.2l-3 3.6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            ) : volume < 0.5 ? (
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="M3 6h2.2L8.5 3.4v9.2L5.2 10H3z" fill="currentColor" />
                <path d="M10.6 5.8a3.1 3.1 0 0 1 0 4.4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="M3 6h2.2L8.5 3.4v9.2L5.2 10H3z" fill="currentColor" />
                <path d="M10.6 5.8a3.1 3.1 0 0 1 0 4.4M12.4 4.2a5.4 5.4 0 0 1 0 7.6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            )}
          </button>

          <div
            className="vplayer__volslide"
            onPointerDown={onVolumeDown}
            role="slider"
            aria-label="音量"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round((muted ? 0 : volume) * 100)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight' || e.key === 'ArrowUp') applyVolume(volume + 0.1)
              if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') applyVolume(volume - 0.1)
            }}
          >
            <div className="vplayer__rail vplayer__rail--vol">
              <div className="vplayer__fill" style={{ width: `${(muted ? 0 : volume) * 100}%` }} />
            </div>
            <div className="vplayer__knob" style={{ left: `${(muted ? 0 : volume) * 100}%` }} />
          </div>
        </div>

        <button className="vplayer__btn vplayer__btn--sm vplayer__btn--fs" onClick={fullscreen} aria-label="全屏">
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M6 3H3v3M10 3h3v3M10 13h3v-3M6 13H3v-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}
