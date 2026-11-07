import { useEffect } from 'react'
import { profile } from '../data'

export default function WeChatModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="wmodal" onClick={onClose} role="dialog" aria-modal="true" aria-label="微信联系">
      <div className="wmodal__card" onClick={(e) => e.stopPropagation()}>
        <button className="wmodal__close" onClick={onClose} aria-label="关闭">
          <svg viewBox="0 0 16 16" fill="none">
            <path d="M3 3l10 10M13 3 3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        <span className="wmodal__eyebrow">WeChat</span>
        <h3 className="wmodal__title">
          扫码加我<em>随时聊一聊</em>
        </h3>

        <div className="wmodal__qr">
          <img src={profile.wechatQr} alt="张诗婷的微信二维码" />
        </div>

        <p className="wmodal__note">
          商业合作、HR 招聘、项目外包都欢迎直接加微信沟通，备注一下来意我会更快通过。
        </p>

        <div className="wmodal__meta">
          <span>广州 · 中国</span>
          <span>{profile.email}</span>
        </div>
      </div>
    </div>
  )
}
