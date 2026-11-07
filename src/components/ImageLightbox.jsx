/* 图片点击放大（全屏灯箱） */
export default function ImageLightbox({ item, onClose }) {
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
