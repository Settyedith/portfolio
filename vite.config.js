import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 相对路径：构建后可直接双击 dist/index.html 打开（file:// 协议）
  base: './',
  server: {
    port: 5173,
    host: true,
  },
})
