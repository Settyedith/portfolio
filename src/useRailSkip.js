import { useEffect } from 'react'

/* 左侧母目录的滚轮捷径：
   鼠标停在目录这一列上滚动时，直接跳过右侧长长的子内容——
   向下滑到本案例内容区的末尾，向上回到内容区开头。
   鼠标在右侧内容区滚动则照常逐屏阅读。 */
export default function useRailSkip(railRef, flowRef, { gap = 110, lock = 700 } = {}) {
  useEffect(() => {
    const rail = railRef.current
    const flow = flowRef.current
    if (!rail || !flow) return
    // 窄屏目录是横向排布，交还原生滚动
    if (!window.matchMedia('(min-width: 821px)').matches) return

    let lockedUntil = 0

    const onWheel = (e) => {
      if (e.ctrlKey) return
      // 横向滚动 / 触控板双指横滑不接管
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return

      const now = performance.now()
      // 跳跃动画期间把滚轮吞掉，避免连环触发
      if (now < lockedUntil) {
        e.preventDefault()
        return
      }

      const vh = window.innerHeight
      const r = flow.getBoundingClientRect()
      const down = e.deltaY > 0
      // 向下→内容区末尾正好落在视口底；向上→内容区开头落在导航下方
      const target = down
        ? r.bottom + window.scrollY - vh
        : r.top + window.scrollY - gap
      const dist = Math.abs(target - window.scrollY)
      // 剩余距离不够半屏就没必要跳，交还给正常滚动
      if (dist < vh * 0.45) return

      e.preventDefault()
      lockedUntil = now + lock
      window.scrollTo({ top: Math.max(0, target), behavior: 'smooth' })
    }

    rail.addEventListener('wheel', onWheel, { passive: false })
    return () => rail.removeEventListener('wheel', onWheel)
  }, [railRef, flowRef, gap, lock])
}
