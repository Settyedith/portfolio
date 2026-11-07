import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(fileURLToPath(import.meta.url))
const dist = resolve(root, 'dist')
const htmlPath = resolve(dist, 'index.html')

let html = readFileSync(htmlPath, 'utf8')

// 内联 CSS
html = html.replace(
  /<link[^>]*rel="stylesheet"[^>]*href="\.?\/?(assets\/[^"]+\.css)"[^>]*>/g,
  (m, href) => {
    const p = resolve(dist, href)
    if (!existsSync(p)) return m
    const css = readFileSync(p, 'utf8')
    return `<style>\n${css}\n</style>`
  },
)

// 内联 JS（module -> 普通脚本，避免 file:// 的 CORS 限制）
let inlineJs = ''
html = html.replace(
  /<script[^>]*type="module"[^>]*src="\.?\/?(assets\/[^"]+\.js)"[^>]*><\/script>/g,
  (m, src) => {
    const p = resolve(dist, src)
    if (!existsSync(p)) return m
    inlineJs = readFileSync(p, 'utf8')
    return ''
  },
)

// 脚本必须放在 #root 之后，否则 createRoot 找不到容器
// 注意：用函数式替换，避免 replace 把 bundle 里的 `$$` 当成转义序列吃掉
if (inlineJs) {
  html = html.replace('</body>', () => `<script>\n${inlineJs}\n</script>\n</body>`)
}

writeFileSync(htmlPath, html, 'utf8')
console.log('standalone: dist/index.html inlined')
