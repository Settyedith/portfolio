import { useState } from 'react'
import { profile } from '../data'
import WeChatModal from './WeChatModal'

export default function Contact() {
  const [qrOpen, setQrOpen] = useState(false)

  return (
    <section className="contact" id="contact">
      <div className="contact__aurora" aria-hidden="true">
        <span className="orb orb--c1" />
        <span className="orb orb--c2" />
        <span className="orb orb--c3" />
      </div>

      <div className="contact__inner shell">
        <div className="contact__eyebrow" data-reveal>
          <span className="dot" />
          <span>Let&apos;s make something</span>
        </div>

        <h2 className="contact__title">
          <span data-reveal style={{ '--d': '0.04s' }}>有故事想被看见？</span>
          <span data-reveal style={{ '--d': '0.12s' }}>
            <em>随时</em>聊一聊。
          </span>
        </h2>

        <p className="contact__lead" data-reveal style={{ '--d': '0.2s' }}>
          无论是短剧资产、AI 漫剧、游戏美术还是视觉体系搭建，欢迎把想法发给我。
        </p>

        <a
          className="contact__mail"
          href={`mailto:${profile.email}`}
          data-reveal
          style={{ '--d': '0.26s' }}
        >
          <span>{profile.email}</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 16 16 4M16 4H6.8M16 4v9.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </a>

        <div className="contact__cards" data-reveal style={{ '--d': '0.32s' }}>
          <button className="ccard ccard--qr" onClick={() => setQrOpen(true)}>
            <span className="ccard__label">WeChat</span>
            <strong>扫码加我</strong>
            <span className="ccard__hint">商业合作 / HR / 项目外包</span>
          </button>
          <a className="ccard" href={`mailto:${profile.email}`}>
            <span className="ccard__label">Email</span>
            <strong>{profile.email}</strong>
            <span className="ccard__hint">通常 24 小时内回复</span>
          </a>
          <div className="ccard ccard--static">
            <span className="ccard__label">Based in</span>
            <strong>广州 · 中国</strong>
            <span className="ccard__hint">可远程协作</span>
          </div>
        </div>

        <footer className="contact__foot">
          <span>© 2026 张诗婷 · AI Visual Designer</span>
          <span className="contact__foot-mid">Designed &amp; Built with AIGC</span>
          <a href="#top">回到顶部 ↑</a>
        </footer>
      </div>

      <WeChatModal open={qrOpen} onClose={() => setQrOpen(false)} />
    </section>
  )
}
