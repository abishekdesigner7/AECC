/* global React, Eyebrow, Button, IconTile, Icon, SectionHead */

// ---------- Hero (homepage) ----------
const HomeHero = () => (
  <section className="hero" id="top">
    <div className="hero__bg" aria-hidden="true">
      <div className="hero__glow"></div>
    </div>
    <div className="container hero__inner">
      <div className="hero__content">
        <h1 className="hero__title">
          Building reliable{" "}
          <span className="hero__title-accent-blue">industrial</span> &amp;{" "}
          <span className="hero__title-accent-blue">home</span> solutions across India &amp; Oman.
        </h1>
        <p className="hero__lead">
          AECC delivers civil, mechanical, piping, commissioning, and facility services for
          plants, refineries, mines, and homes. 18+ years of engineering practice and a
          1,500-strong workforce — one standard of work across every project we sign.
        </p>
        <div className="hero__cta">
          <Button variant="primary" size="lg" arrow href="contact.html">Start a Project</Button>
          <Button variant="secondary" size="lg" arrow href="industrial.html">Explore Services</Button>
        </div>
        <div className="hero__stats">
          <div className="stat">
            <div className="stat__num">18+</div>
            <div className="stat__lbl">Years of experience</div>
          </div>
          <div className="stat">
            <div className="stat__num">1,500+</div>
            <div className="stat__lbl">Strong workforce</div>
          </div>
          <div className="stat">
            <div className="stat__num stat__num--sm">India &amp; Oman</div>
            <div className="stat__lbl">Operating regions</div>
          </div>
        </div>
      </div>
      <div className="hero__photo-grid">
        <div className="hero__photo-stack">
          <figure className="hero__photo-card hero__photo-card--1">
            <img src="assets/images/solar.jpg" alt="Solar panel installation" className="hero__photo" />
          </figure>
          <figure className="hero__photo-card hero__photo-card--2">
            <img src="assets/images/garden.jpg" alt="Facility maintenance" className="hero__photo" />
          </figure>
        </div>
        <div className="hero__photo-stack hero__photo-stack--offset">
          <figure className="hero__photo-card hero__photo-card--3">
            <img src="assets/images/plumbing.jpg" alt="Industrial plumbing" className="hero__photo" />
          </figure>
          <figure className="hero__photo-card hero__photo-card--4">
            <img src="assets/images/construction.jpg" alt="Construction works" className="hero__photo" />
          </figure>
        </div>
      </div>
    </div>
  </section>
);

// ---------- Industries We Serve ----------
const INDUSTRIES = [
  { icon: "flame",         label: "Oil & Gas" },
  { icon: "factory",       label: "Refineries" },
  { icon: "flask-conical", label: "Petrochemical" },
  { icon: "sprout",        label: "Fertilizer" },
  { icon: "blocks",        label: "Cement" },
  { icon: "zap",           label: "Power" },
  { icon: "droplets",      label: "Desalination" },
  { icon: "layers",        label: "Aluminium & Steel" },
  { icon: "mountain",      label: "Mining & Metal" },
];

const Industries = () => (
  <section className="section section--alt" id="industries">
    <div className="container">
      <SectionHead
        eyebrow="01 / Industries we serve"
        title="Built for heavy industry."
        lead="Construction, commissioning, and maintenance across the sectors that keep economies running — from oil &amp; gas to mining and metals."
      />
      <div className="industries">
        {INDUSTRIES.map((i) => (
          <div className="industry" key={i.label}>
            <span className="industry__icon"><Icon name={i.icon} size={22} strokeWidth={1.75} /></span>
            <span className="industry__label">{i.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ---------- Why AECC — real advantages ----------
const WHY = [
  { icon: "user-check",     title: "Single-Point Responsibility", body: "One accountable general contractor from enquiry to final handover." },
  { icon: "briefcase",      title: "Committed Management Team",   body: "A dedicated management team backing every project team on site." },
  { icon: "globe",          title: "Middle East Experience",      body: "A project-management team proven on Gulf operations." },
  { icon: "users",          title: "Skilled Craftsmen & Labour",  body: "Skilled civil, mechanical, and E&I crews with ample labour force." },
  { icon: "wrench",         title: "Abundant Plant & Machinery",  body: "Extensive plant and machinery resources ready to mobilise." },
  { icon: "construction",   title: "Dedicated Scaffolding Team",  body: "An experienced, in-house scaffolding team on our own roster." },
  { icon: "tent",           title: "Workforce Camps & Catering",  body: "Own workforce camp and catering facilities for remote sites." },
  { icon: "calendar-check", title: "Performs to Any Schedule",    body: "Resourced to deliver against demanding project timelines." },
  { icon: "history",        title: "Recovers Schedule Slips",     body: "Able to help recover engineering or procurement delays." },
  { icon: "package",        title: "Global Procurement Support",  body: "Dedicated sourcing keeps the right materials flowing to site." },
];

const WhyAECC = () => (
  <section className="section" id="why">
    <div className="container">
      <SectionHead
        eyebrow="02 / Why AECC"
        title="The kind of partner that finishes the job."
        lead="What clients hire us for — and what we hold ourselves to on every site, industrial or residential."
      />
      <div className="pillars">
        {WHY.map((p) => (
          <article className="pillar" key={p.title}>
            <IconTile variant="blue" icon={p.icon} size={56} />
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

// ---------- Service lines split ----------
const ServiceLines = () => (
  <section className="section section--alt" id="services">
    <div className="container">
      <SectionHead
        eyebrow="03 / Service lines"
        title="Two service lines. One standard of work."
        lead="The same engineers, HSE protocols, and quality controls that run our industrial sites serve our home and facility clients."
      />
      <div className="service-lines">

        <article className="service-line service-line--industrial">
          <div className="service-line__top">
            <IconTile variant="solid" icon="factory" size={48} />
            <h3>Industrial Services</h3>
          </div>
          <p className="service-line__lead">
            Civil, mechanical, piping, commissioning, shutdown, and mining works
            for plants, refineries, and mine sites — India &amp; Oman.
          </p>
          <ul className="service-line__list">
            <li>Civil &amp; Structural Works</li>
            <li>Piping Fabrication &amp; Installation</li>
            <li>Equipment Installation &amp; Erection</li>
            <li>Mechanical Maintenance &amp; AMC</li>
            <li>Plant Shutdown &amp; Turnaround</li>
            <li>Commissioning Support</li>
          </ul>
          <a className="service-line__cta" href="industrial.html">
            View all industrial services <Icon name="arrow-right" size={14} strokeWidth={2} />
          </a>
        </article>

        <article className="service-line service-line--home">
          <div className="service-line__top">
            <IconTile variant="warm" icon="home" size={48} />
            <h3>Home &amp; Facility Services</h3>
          </div>
          <p className="service-line__lead">
            Electrical, plumbing, AC, security, and renovation work for homes
            and commercial spaces — under one annual contract.
          </p>
          <ul className="service-line__list">
            <li>Electrical Installations</li>
            <li>Plumbing &amp; Sanitary Works</li>
            <li>AC Install &amp; Maintenance</li>
            <li>CCTV &amp; Security Systems</li>
            <li>Painting &amp; Waterproofing</li>
            <li>Solar Panel Installation</li>
          </ul>
          <a className="service-line__cta" href="home-services.html">
            View all home &amp; facility services <Icon name="arrow-right" size={14} strokeWidth={2} />
          </a>
        </article>

      </div>
    </div>
  </section>
);

// ---------- HSE & Quality ----------
const HSEQuality = () => (
  <section className="section" id="hse-quality">
    <div className="container">
      <SectionHead
        eyebrow="04 / HSE & Quality"
        title="Safety and quality — documented, not promised."
        lead="Every site runs on a written HSE plan and a quality system built on inspection test plans, audits, and sign-offs."
      />
      <div className="hseq">
        <article className="hseq-col">
          <div className="hseq-col__head">
            <IconTile variant="blue" icon="shield-check" size={48} />
            <div>
              <span className="hseq-col__tag">Health · Safety · Environment</span>
              <h3>Zero LTI &amp; LTA — the goal on every site.</h3>
            </div>
          </div>
          <ul className="hseq-list">
            <li><Icon name="check" size={15} strokeWidth={2.5} /><span>Identify the task</span></li>
            <li><Icon name="check" size={15} strokeWidth={2.5} /><span>Identify the hazards</span></li>
            <li><Icon name="check" size={15} strokeWidth={2.5} /><span>Assess the risk</span></li>
            <li><Icon name="check" size={15} strokeWidth={2.5} /><span>Establish minimum standards</span></li>
            <li><Icon name="check" size={15} strokeWidth={2.5} /><span>Define accountability &amp; responsibility</span></li>
            <li><Icon name="check" size={15} strokeWidth={2.5} /><span>Establish safe procedures</span></li>
            <li><Icon name="check" size={15} strokeWidth={2.5} /><span>Measure performance</span></li>
            <li><Icon name="check" size={15} strokeWidth={2.5} /><span>Audit for compliance</span></li>
          </ul>
        </article>
        <article className="hseq-col">
          <div className="hseq-col__head">
            <IconTile variant="blue" icon="badge-check" size={48} />
            <div>
              <span className="hseq-col__tag">Quality Management</span>
              <h3>High quality, on time, zero rejection.</h3>
            </div>
          </div>
          <ul className="hseq-list">
            <li><Icon name="check" size={15} strokeWidth={2.5} /><span>Defined quality management system</span></li>
            <li><Icon name="check" size={15} strokeWidth={2.5} /><span>Total commitment to quality across the team</span></li>
            <li><Icon name="check" size={15} strokeWidth={2.5} /><span>Strict adherence to specs &amp; standards</span></li>
            <li><Icon name="check" size={15} strokeWidth={2.5} /><span>Inspection Test Plans for full coverage</span></li>
            <li><Icon name="check" size={15} strokeWidth={2.5} /><span>Civil, electrical &amp; mechanical QA/QC inspectors</span></li>
            <li><Icon name="check" size={15} strokeWidth={2.5} /><span>Internal &amp; external audits</span></li>
            <li><Icon name="check" size={15} strokeWidth={2.5} /><span>Preventive measures against non-conformances</span></li>
            <li><Icon name="check" size={15} strokeWidth={2.5} /><span>Vendor evaluation &amp; approved vendor list</span></li>
          </ul>
        </article>
      </div>
    </div>
  </section>
);

// ---------- Vision · Mission · Values ----------
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

const VisionMission = () => (
  <section className="section section--alt" id="vision">
    <div className="container">
      <SectionHead
        eyebrow="05 / Vision, Mission & Values"
        title="The standard we hold ourselves to."
      />
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
);

const HomePage = () => (
  <>
    <HomeHero />
    <Industries />
    <WhyAECC />
    <ServiceLines />
    <HSEQuality />
    <VisionMission />
    <CTABanner
      eyebrow="Ready when you are"
      title="Start your next industrial or home project with AECC."
      body="Tell us about your requirement. A senior engineer will review and respond within one business day."
      primaryLabel="Start a Project"
      primaryHref="contact.html"
      secondaryLabel="Email aeccngl@gmail.com"
      secondaryHref="mailto:aeccngl@gmail.com"
    />
  </>
);

window.HomePage = HomePage;
