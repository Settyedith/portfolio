import { profile, stats, experiences, education, tools } from '../data'

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="shell">
        <div className="sec-head" data-reveal>
          <span className="sec-head__no">01</span>
          <h2 className="sec-head__title">
            关于我<em>About</em>
          </h2>
          <p className="sec-head__note">
            设计出身，AIGC 落地。从品牌视觉走向短剧与游戏美术，我喜欢把不确定的灵感，变成可交付的资产。
          </p>
        </div>

        <div className="about__grid">
          <aside className="about__aside" data-reveal>
            <div className="about__portrait">
              <img src={profile.avatar} alt="张诗婷的头像" />
              <span className="about__portrait-ring" />
            </div>
            <div className="about__cards">
              <div className="mini-card">
                <span className="mini-card__label">年龄</span>
                <strong>{profile.age}</strong>
              </div>
              <div className="mini-card">
                <span className="mini-card__label">所在地</span>
                <strong>广州</strong>
              </div>
            </div>
          </aside>

          <div className="about__main">
            <div className="about__intro" data-reveal style={{ '--d': '0.06s' }}>
              <h3>
                {profile.name}
                <span>{profile.role} / {profile.roleSub}</span>
              </h3>
              <p>{profile.intro}</p>

              <div className="about__tools">
                {tools.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>

              <ul className="about__contact">
                <li>
                  <span>邮箱</span>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </li>
                <li>
                  <span>教育</span>
                  <b>{education.school} · {education.degree.split(' · ')[0]}</b>
                </li>
              </ul>
            </div>

            <div className="about__stats" data-reveal style={{ '--d': '0.12s' }}>
              {stats.map((s) => (
                <div className="stat" key={s.label}>
                  <div className="stat__num">
                    {s.value}
                    <em>{s.unit}</em>
                  </div>
                  <div className="stat__label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="timeline" data-reveal>
          <div className="timeline__head">
            <span>工作经历</span>
            <em>Experience</em>
          </div>
          <div className="timeline__list">
            {experiences.map((e, i) => (
              <article className="tl-item" key={e.role + e.period}>
                <div className="tl-item__year">
                  <span>{e.period}</span>
                  <i />
                </div>
                <div className="tl-item__body">
                  <h4>
                    {e.role}
                    <span>{e.company}</span>
                  </h4>
                  <ul>
                    {e.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
                <span className="tl-item__index">0{i + 1}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
