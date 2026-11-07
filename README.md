# 张诗婷 · 个人作品集网站

React 18 + Vite 6 单页作品集。马卡龙色系，全屏铺满 + 等比缩放（以 1920px 为基准，clamp/vw 实现），PC 优先。

## 三种打开方式

| 方式 | 命令 / 文件 | 说明 |
| --- | --- | --- |
| 双击打开（离线） | `D:\AI作品\打开作品集.html` 或 `portfolio\dist\index.html` | 不需要 Node，直接 file:// 打开 |
| 开发预览 | `cd portfolio && npm run dev` | http://localhost:5173 |
| 构建 | `npm run build` | 输出到 `dist/`（ES module 版，需服务器） |
| 构建离线版 | `npm run build:offline` | 构建 + 内联 JS/CSS 成单文件，双击可用 |

> **离线版原理**：`vite.config.js` 里 `base: './'` 让产物用相对路径；`build-standalone.mjs`
> 再把 JS/CSS 内联进 `dist/index.html`（并移到最后，确保 `#root` 已存在）。
> 不使用 `type="module"`，否则 file:// 会被 CORS 拦截。
> 每次改完内容要重新跑 `npm run build:offline`，双击的才是最新版。

## 结构

```
src/
  data.js              # 所有文案、项目数据（改内容只动这里）
  styles.css           # 全部样式
  components/
    Nav.jsx            # 固定导航（滚动变色 / 高亮当前模块 / 移动端抽屉）
    Hero.jsx           # 首屏：视频背景 + 主标题 + CTA
    About.jsx          # 个人经历：头像、简介、联系方式、数据、工作经历时间线
    CaseStudy.jsx      # 宙斯深潜：视频位 + 四步资产流程 + 变体分组 A/B/C
    VideoPlayer.jsx    # 自建播放器（进度条拖动 / 静音 / 全屏）
    Work.jsx           # 精选项目：悬停播放视频 + 点击弹完整视频与资产图
    Strength.jsx       # 个人优势：6 张马卡龙卡片 + 工作方法
    Contact.jsx        # 整屏收尾：邮箱、电话、城市、页脚
  useReveal.js         # 滚动淡入
public/assets/
  img/                 # 作品图片（60 张）
  video/               # hero.mp4 + maotang.mp4 + season.mp4 + kongque.mp4
```

## 页面顺序

Hero → 关于 01 → **宙斯为爱而来（案例）** 02 → 精选项目 03 → 优势 04 → 联系

## 宙斯案例的四步结构

`data.js` 的 `zeusCase.steps`，每步一个 tab：

1. **01 脸模融合 Face Model** — 两组 `media`
2. **02 服装 / 状态 / 色彩体系** — `groups` 数组，页面上是 A/B/C 胶囊切换
   - A 服装变体 → `casts`（按角色分组，每组 3 套）
   - B 状态变体 → `compare`（主对比）+ `alt`（两组副对比）
   - C 色彩体系 → `tiers`（三档层级，每档 3 张）
3. **03 场景转角度 Scene** — `media`（span 6 / 3 / 3）
4. **04 道具资产表 Props** — `media`

### 变体分组的数据写法

```js
groups: [
  {
    no: 'A', key: 'costume', title: '服装变体', en: 'Costume Variant',
    desc: '...',                    // 每组说明
    points: ['...', '...'],         // 可省略；省略时说明会与左侧标题齐平单列铺开
    casts: [{ name: '宙斯', en: 'Zeus', items: [{ src, caption }] }],
  },
  { no: 'B', ..., compare: {...}, alt: [...] },
  { no: 'C', ..., tiers: [{ name, en, note, items: [...] }] },
]
```

> `points` 一旦留空，`.case__panel-mid.is-single` / `.zgroup__body.is-single`
> 会接管布局。注意 `CaseStudy.jsx` 里对 `s.points` 已做可选链，别再直接 `.map`。

## 常见改动

### 补充宙斯的成片视频

把视频放到 `public/assets/video/zeus.mp4`，`src/data.js`：

```js
export const zeusCase = {
  video: 'assets/video/zeus.mp4',   // 原本是 null
  ...
}
```

`null` 时显示「Video coming soon」封面占位。

### 项目悬停播放 / 弹窗视频

```js
video: 'assets/video/xxx.mp4',  // 有则悬停播放 + 弹窗完整播放
poster: 'assets/img/xxx.jpg',   // 视频未加载时的首帧
portrait: true,                 // 竖版视频（猫汤 9:16）才需要
```

### 替换图片

新图放 `public/assets/img/`，改 `src/data.js` 对应路径。

**路径写相对形式**（`assets/img/xxx.jpg`，不要以 `/` 开头），否则 `file://` 下会解析成盘符根目录而裂图。

### 首页视频

替换 `public/assets/video/hero.mp4`（建议 10–15 秒、1600px 宽、无音轨、CRF 30）。
同时替换 `hero-poster.jpg`，并给 `Hero.jsx` 里的 `?v=3` 递增版本号避免缓存。

### 视频压缩

```bash
ffmpeg -i input.mp4 -vf "scale=1280:-2" -c:v libx264 -crf 30 -preset slow \
  -pix_fmt yuv420p -an -movflags +faststart output.mp4
```

竖版改用 `scale=-2:1280`。

## 响应式约定

- 版心 `--shell: 100%`，靠 `--pad: clamp(24px, 3vw, 83.5px)` 留边
- 所有字号/间距/圆角/栅格用 `clamp(下限, vw, 上限)`，基准 1920px，窗口缩小整体等比收缩
- 断点只有两个：`1180px`（导航折叠）、`820px`（单列）
- 不要在中间插固定 px 的断点，会破坏等比缩放

## 素材映射

| 项目 | 图片 | 视频 |
| --- | --- | --- |
| 宙斯为爱而来 | zeus-*（脸模 / 服装 / 状态 / 色彩 / 场景 / 道具） | 待补 |
| 猫咪和汤 · 节气 | mt-01 ~ mt-06 | maotang.mp4（9:16） |
| 3D 等距四季场景 | sc-01 ~ sc-05 | season.mp4 |
| 孔雀东南飞 | kq-01 ~ kq-06 | kongque.mp4 |
| 古风 2.5D UI | ui-01 ~ ui-05 | — |
| 奇幻职业角色 | ch-01 ~ ch-03 | — |
| 烬雪 | jx-01 ~ jx-05 | — |
| 头像 | avatar.jpg | — |
| 首页视频 | — | hero.mp4（孔雀 1，22–35s） |

原始素材在上级目录：`AI真人剧/宙斯/服装变体`、`AI真人剧/宙斯/色彩体系`。
