/* global React, Icon, IconTile, SectionHead, PageHero, CTABanner */

const WHY_JOIN = [
  { icon: "hard-hat",     title: "Real project exposure", body: "Industrial, mining, and housing projects across India and the Gulf." },
  { icon: "shield-check", title: "Safety-first culture",  body: "Documented HSE and a zero LTI / LTA goal on every site we run." },
  { icon: "users",        title: "A 1,500-strong team",   body: "Work alongside experienced engineers, supervisors, and tradespeople." },
];

const RESPONSIBILITIES = [
  "Installation and maintenance of water-supply & drainage piping systems",
  "Sanitary fixture installation and maintenance",
  "Plumbing works for residential buildings and housing projects",
  "Industrial plumbing installation and maintenance",
  "Read and interpret P&IDs, plumbing drawings, and layouts",
  "Pipe cutting, threading, fitting, and jointing",
  "Pressure testing and troubleshooting",
  "Follow HSE procedures and site safety requirements",
];

const REQUIREMENTS = [
  "Minimum 2–5 years of relevant experience",
  "Experience in industrial / residential plumbing",
  "Knowledge of different pipe materials and fittings",
  "Able to work independently and as part of a team",
  "Good understanding of site safety practices",
  "GCC experience will be an advantage",
];

const PHONES = [
  { label: "+91 78455 68702", href: "tel:+917845568702" },
  { label: "+91 75983 32713", href: "tel:+917598332713" },
  { label: "+91 97917 17640", href: "tel:+919791717640" },
];

const APPLY_MAIL =
  "mailto:aeccngl@gmail.com?subject=Application%20%E2%80%93%20Plumber%20(Industrial%20%26%20Housing)" +
  "&body=Please%20find%20my%20CV%20attached.%0D%0A%0D%0AName%3A%0D%0AYears%20of%20experience%3A%0D%0ACurrent%20location%3A%0D%0A";

const CareerPage = () => (
  <>
    <PageHero
      title="Build your career on real projects."
      lead="Join AECC's crews on industrial and housing projects across India and the Gulf. We hire skilled trades and engineers who take pride in the work."
    />

    {/* 01 — Why join */}
    <section className="section">
      <div className="container">
        <SectionHead
          eyebrow="01 / Why AECC"
          title="What you get working with us."
          lead="Hands-on projects, a safety-led site culture, and a team that has delivered for more than 18 years."
        />
        <div className="pillars">
          {WHY_JOIN.map((w) => (
            <article className="pillar" key={w.title}>
              <IconTile variant="blue" icon={w.icon} size={56} />
              <h3>{w.title}</h3>
              <p>{w.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* 02 — Current openings */}
    <section className="section section--alt" id="openings">
      <div className="container">
        <SectionHead
          eyebrow="02 / Current openings"
          title="One role open right now."
          lead="Think you're a fit? Apply with your CV — our team reviews every application."
        />

        <article className="job-card">
          <div className="job-card__head">
            <IconTile variant="blue" icon="wrench" size={52} />
            <div className="job-card__headings">
              <span className="job-card__tag">Now hiring</span>
              <h3>Plumber — Industrial &amp; Housing</h3>
              <div className="job-card__meta">
                <span><Icon name="map-pin" size={14} strokeWidth={2} /> Oman / GCC Projects</span>
                <span><Icon name="briefcase" size={14} strokeWidth={2} /> 2–5 years experience</span>
                <span><Icon name="building-2" size={14} strokeWidth={2} /> Industrial &amp; Housing</span>
              </div>
            </div>
          </div>

          <p className="job-card__intro">
            We are looking for experienced, skilled plumbers for industrial and residential /
            housing projects.
          </p>

          <div className="job-card__cols">
            <div className="job-col">
              <h4><Icon name="list-checks" size={17} strokeWidth={2} /> Responsibilities</h4>
              <ul className="job-list">
                {RESPONSIBILITIES.map((r) => (
                  <li key={r}><Icon name="check" size={15} strokeWidth={2.5} /><span>{r}</span></li>
                ))}
              </ul>
            </div>
            <div className="job-col">
              <h4><Icon name="badge-check" size={17} strokeWidth={2} /> Requirements</h4>
              <ul className="job-list">
                {REQUIREMENTS.map((r) => (
                  <li key={r}><Icon name="check" size={15} strokeWidth={2.5} /><span>{r}</span></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="job-apply">
            <div className="job-apply__info">
              <span className="job-apply__label">How to apply</span>
              <p>Send your CV / résumé to our recruitment team:</p>
              <div className="job-apply__contacts">
                <a href="mailto:aeccngl@gmail.com"><Icon name="mail" size={15} strokeWidth={2} /> aeccngl@gmail.com</a>
                {PHONES.map((p) => (
                  <a href={p.href} key={p.href}><Icon name="phone" size={15} strokeWidth={2} /> {p.label}</a>
                ))}
              </div>
            </div>
            <a className="btn btn-primary btn-lg job-apply__btn" href={APPLY_MAIL}>
              <span>Apply — email your CV</span><Icon name="arrow-right" size={16} />
            </a>
          </div>
        </article>
      </div>
    </section>

    <CTABanner
      eyebrow="Open application"
      title="Don't see your role? Send us your CV anyway."
      body="We're always glad to hear from skilled trades and engineers. Email your CV and we'll keep it on file for upcoming projects."
      primaryLabel="Email your CV"
      primaryHref="mailto:aeccngl@gmail.com?subject=Open%20Application%20%E2%80%93%20AECC"
      secondaryLabel="Call +91 78455 68702"
      secondaryHref="tel:+917845568702"
    />
  </>
);

window.CareerPage = CareerPage;
