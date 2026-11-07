import { useEffect, useState } from 'react'
import WeChatModal from './WeChatModal'

const links = [
  { href: '#about', label: '关于', en: 'About' },
  { href: '#case', label: '案例', en: 'Case' },
  { href: '#work', label: '作品', en: 'Work' },
  { href: '#strength', label: '优势', en: 'Strength' },
  { href: '#contact', label: '联系', en: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [qrOpen, setQrOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      let current = ''
      links.forEach((l) => {
        const el = document.querySelector(l.href)
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          current = l.href
        }
      })
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav__inner">
        <a className="nav__brand" href="#top">
          <span className="nav__mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none">
              <path d="M16 27c-5.2 0-9.4-4.2-9.4-9.4C6.6 12 11 6.4 16 5c5 1.4 9.4 7 9.4 12.6C25.4 22.8 21.2 27 16 27Z" stroke="currentColor" strokeWidth="1.4" />
              <path d="M16 5v22" stroke="currentColor" strokeWidth="1.1" opacity=".45" />
              <circle cx="16" cy="17.4" r="3.1" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </span>
          <span className="nav__name">
            张诗婷<em>Zhang Shiting</em>
          </span>
        </a>

        <nav className="nav__links" aria-label="主导航">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={active === l.href ? 'is-active' : ''}>
              <span>{l.label}</span>
              <em>{l.en}</em>
            </a>
          ))}
        </nav>

        <button className="btn btn--nav" onClick={() => setQrOpen(true)}>
          <span className="btn__dot" />
          聊一聊
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 11 11 3M11 3H4.6M11 3v6.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
        </button>

        <button
          className={`nav__burger ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="打开菜单"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`nav__mobile ${menuOpen ? 'is-open' : ''}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
            {l.label}
            <em>{l.en}</em>
          </a>
        ))}
        <button
          type="button"
          className="nav__mobile-cta"
          onClick={() => {
            setMenuOpen(false)
            setQrOpen(true)
          }}
        >
          微信联系
          <em>WeChat</em>
        </button>
      </div>

      <WeChatModal open={qrOpen} onClose={() => setQrOpen(false)} />
    </header>
  )
}
