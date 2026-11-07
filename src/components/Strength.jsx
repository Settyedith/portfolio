import { strengths } from '../data'

export default function Strength() {
  return (
    <section className="strength section" id="strength">
      <div className="shell">
        <div className="sec-head sec-head--center" data-reveal>
          <span className="sec-head__no">04</span>
          <h2 className="sec-head__title">
            个人优势<em>What I&apos;m Good At</em>
          </h2>
          <p className="sec-head__note">
            不只是会出图，更擅长让产出稳定、可复用、能落地。
          </p>
        </div>

        <div className="strength__grid">
          {strengths.map((s, i) => (
            <article
              className={`scard tone-${s.tone}`}
              key={s.no}
              data-reveal
              style={{ '--d': `${i * 0.05}s` }}
            >
              <div className="scard__top">
                <span className="scard__no">{s.no}</span>
                <span className="scard__tag">{s.tag}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="scard__glow" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
