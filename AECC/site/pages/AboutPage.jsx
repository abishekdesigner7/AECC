/* global React, Eyebrow, Button, IconTile, Icon, SectionHead, PageHero */

const GLANCE = [
  { dt: "Founded & led by", dd: "Mr. Antros Vijin, Founder & MD" },
  { dt: "Experience", dd: "18+ years in engineering & construction" },
  { dt: "Workforce", dd: "1,500+ people across India & Oman" },
  { dt: "Head office", dd: "Tamil Nadu, India" },
  { dt: "Operating regions", dd: "India & the Sultanate of Oman" },
  { dt: "Service lines", dd: "Industrial · Mining · Home & Facility" },
];

const DEPARTMENTS = [
  "Project Control / Planning", "Construction", "QA/QC", "HSE",
  "Procurement", "Document Control", "Administration", "IT",
];

const MISSION = [
  { tag: "Quality",     text: "Provide high-quality engineering and construction services." },
  { tag: "Delivery",    text: "Complete projects safely, efficiently, and on schedule." },
  { tag: "Integrity",   text: "Maintain the highest standards of professionalism and integrity." },
  { tag: "Improvement", text: "Continuously improve through innovation and skilled manpower." },
];

const VALUES = [
  { icon: "shield-check", label: "Integrity",  body: "We do what we say — safely, transparently, and to standard." },
  { icon: "award",        label: "Expertise",  body: "Multi-disciplinary engineering depth across civil, mechanical, and piping." },
  { icon: "lightbulb",    label: "Innovation", body: "Better methods, better tools, better outcomes — project after project." },
];

const AboutPage = () => (
  <>
    <PageHero
      title="Engineering &amp; construction, built on reliability."
      lead="Antros Engineering Construction Company (AECC) is a professionally managed mining construction and manpower supply company with more than 18 years of experience — now expanding across India and the Sultanate of Oman."
    />

    {/* ---- Overview ---- */}
    <section className="section">
      <div className="container">
        <div className="about-grid">
          <div className="about-prose">
            <Eyebrow>01 / Overview</Eyebrow>
            <h2 className="section-h2" style={{marginTop: 18, marginBottom: 24}}>The company.</h2>
            <p>
              AECC is a professionally managed mining construction and manpower supply company
              with more than 18 years of experience across Oil &amp; Gas, Refineries, Petrochemical,
              Fertilizer, Cement, Power, Desalination, and Aluminium &amp; Steel industries. From its
              head office in Tamil Nadu, India, AECC currently employs over 1,500 people across
              India and Oman.
            </p>
            <p>
              Founded and led by <strong>Mr. Antros Vijin</strong>, the company specialises in the
              Mining &amp; Metal sector, civil, mechanical, piping &amp; structural works,
              construction, commissioning support, and maintenance &amp; shutdown activities —
              with operations now expanding into the Sultanate of Oman.
            </p>
            <p>
              In parallel, we run a Home &amp; Facility Services line that brings the same
              industrial-grade engineers, processes, and standards to electrical, plumbing, AC,
              security, painting, renovation, and solar work for homes and commercial premises.
            </p>
          </div>

          <aside className="glance-card" aria-label="AECC at a glance">
            <p className="glance-card__title">At a glance</p>
            <dl>
              {GLANCE.map((g) => (
                <div className="glance-row" key={g.dt}><dt>{g.dt}</dt><dd>{g.dd}</dd></div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>

    {/* ---- Leadership & organisation ---- */}
    <section className="section section--alt" id="leadership">
      <div className="container">
        <SectionHead
          eyebrow="02 / Leadership & organisation"
          title="Led by an owner who answers for the work."
          lead="A flat, accountable structure — a single managing director, one project manager per job, and dedicated functions behind every site."
        />
        <div className="leadership">
          <article className="leader-card">
            <div className="leader-card__avatar">
              <img src="assets/founder.jpg" alt="Mr. Antros Vijin, Founder &amp; Managing Director of AECC" />
            </div>
            <div className="leader-card__name">Mr. Antros Vijin</div>
            <div className="leader-card__role">Founder &amp; Managing Director</div>
            <p className="leader-card__bio">
              AECC is founded and led by Mr. Antros Vijin, with a personal commitment to
              excellence, safety, integrity, and customer satisfaction on every project the
              company undertakes.
            </p>
          </article>

          <div className="org">
            <div className="org__flow">
              <span className="org__node org__node--lead">Founder &amp; Managing Director</span>
              <span className="org__connector" aria-hidden="true"></span>
              <span className="org__node">Project Manager</span>
            </div>
            <p className="org__caption">Functions reporting through the Project Manager</p>
            <div className="org__depts">
              {DEPARTMENTS.map((d) => <span className="org__dept" key={d}>{d}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ---- Vision, Mission & Values ---- */}
    <section className="section" id="vision">
      <div className="container">
        <SectionHead eyebrow="03 / Vision, Mission & Values" title="What we are building toward." />
        <div className="vm-grid">
          <div className="vision-card">
            <Eyebrow onDark>Vision</Eyebrow>
            <h3>To become one of the most trusted and preferred engineering &amp; construction companies.</h3>
            <p>Delivering quality services, innovative solutions, and long-term value to our clients.</p>
          </div>
          <div>
            <span className="eyebrow">Mission</span>
            <div className="mission-grid" style={{marginTop: 16}}>
              {MISSION.map((m, i) => (
                <article className="mission-card" key={m.tag}>
                  <span className="mission-card__step">{`0${i + 1} / ${m.tag}`}</span>
                  <p>{m.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="values">
          {VALUES.map((v) => (
            <div className="value-card" key={v.label}>
              <span className="value-card__icon"><Icon name={v.icon} size={22} strokeWidth={2} /></span>
              <div className="value-card__text">
                <h4>{v.label}</h4>
                <p>{v.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ---- Conclusion ---- */}
    <section className="section section--alt">
      <div className="container">
        <div className="about-prose" style={{maxWidth: 760}}>
          <Eyebrow>04 / In closing</Eyebrow>
          <h2 className="section-h2" style={{margin: "14px 0 16px"}}>Built on trust, driven by excellence.</h2>
          <p>
            AECC has built its reputation on quality workmanship, professional management, and
            customer satisfaction — backed by extensive industry experience and a dedicated
            workforce. We deliver reliable engineering and construction solutions across every
            sector we serve.
          </p>
        </div>
      </div>
    </section>

    <CTABanner
      eyebrow="Talk to us"
      title="Tell us what you need built, maintained, or installed."
      body="We respond to every enquiry within one business day, with a senior engineer on the call."
      secondaryLabel="Email aeccngl@gmail.com"
      secondaryHref="mailto:aeccngl@gmail.com"
    />
  </>
);

window.AboutPage = AboutPage;
