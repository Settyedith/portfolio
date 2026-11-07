const STEPS = ['01 读懂剧本', '02 定义风格', '03 批量生成', '04 精修交付']

export default function Method() {
  return (
    <div className="method-line" data-reveal>
      <span className="method-line__label">
        短剧工作方法<em>Method</em>
      </span>
      <ol className="method-line__steps">
        {STEPS.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>
    </div>
  )
}
