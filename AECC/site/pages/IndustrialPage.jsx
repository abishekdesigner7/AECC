/* global React, Eyebrow, Button, IconTile, Icon, SectionHead, PageHero */

const INDUSTRIAL_SERVICES = [
  { icon: "building-2", title: "Civil & Structural Works", body: "Foundations, structures, and site works for heavy-industrial plants.",
    subs: ["Excavation & earthworks", "Concrete foundations", "Structural concrete works", "Commercial construction", "Road & drainage works"] },
  { icon: "wrench", title: "Mechanical & Piping Works", body: "Fabrication and installation across metallic and non-metallic systems.",
    subs: ["Piping fabrication & installation", "HDPE piping", "Metallic & non-metallic piping", "Equipment installation & mechanical erection"] },
  { icon: "settings-2", title: "Equipment Installation & Erection", body: "Heavy-equipment setting and certified mechanical erection.",
    subs: ["Heavy-equipment installation", "Mechanical erection", "Baseplate grouting", "Alignment & handover"] },
  { icon: "clipboard-check", title: "Commissioning Support", body: "From mechanical completion through to live operation.",
    subs: ["Pre-commissioning assistance", "Mechanical completion support", "Punch clearance activities", "Site coordination support"] },
  { icon: "refresh-cw", title: "Maintenance & Shutdown", body: "Planned and emergency support that protects plant uptime.",
    subs: ["Plant shutdown support", "Mechanical maintenance", "Emergency maintenance support", "Shutdown manpower deployment"] },
  { icon: "mountain", title: "Mining Works", body: "Full-cycle mine development and material handling.",
    subs: ["Mine site development & excavation", "Drilling & blasting", "Ore, mineral & overburden removal", "Crushing, screening & material handling", "Safe, environmentally compliant operations"] },
  { icon: "users", title: "Manpower Supply", body: "Skilled, semi-skilled, and unskilled workforce, mobilised fast.",
    subs: ["Skilled, semi-skilled & unskilled crews", "Rapid mobilisation & deployment", "Trade-certified tradespeople", "Scaled to your project schedule"] },
];

const MANPOWER = [
  { icon: "users",            title: "Skilled Workforce",        body: "Trade-certified civil, mechanical, and E&I crews ready to mobilise." },
  { icon: "user-cog",         title: "Qualified Management",     body: "An experienced management team directing every project." },
  { icon: "drafting-compass", title: "Technical Expertise",      body: "Multi-disciplinary engineering depth across the plant lifecycle." },
  { icon: "shield-check",     title: "Health, Safety & Quality", body: "Certified HSE officers and QA/QC inspectors on every site." },
  { icon: "shuffle",          title: "Flexible Allocation",      body: "Resources scaled and re-deployed to match your schedule." },
  { icon: "award",            title: "Commitment to Excellence", body: "A workforce measured on the quality of what it hands over." },
];

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

const IndustrialPage = () => (
  <>
    <PageHero
      title="Engineered for plants, refineries, and mine sites."
      lead="Civil, mechanical, piping, commissioning, maintenance, and mining works — delivered on schedule with HSE documentation that holds up to audit, across India and the Sultanate of Oman."
    />

    {/* ---- Services ---- */}
    <section className="section">
      <div className="container">
        <SectionHead
          eyebrow="01 / What we deliver"
          title="Our core industrial capabilities."
          lead="Every service below is staffed by certified engineers and tradespeople, governed by documented procedures, and delivered under a written HSE plan."
        />
        <div className="svc-grid">
          {INDUSTRIAL_SERVICES.map((s) => (
            <article className="svc-card svc-card--blue" key={s.title}>
              <IconTile variant="blue" icon={s.icon} />
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <ul className="svc-card__list">
                {s.subs.map((x) => <li key={x}>{x}</li>)}
              </ul>
              <a className="svc-card__more" href="contact.html">
                <span>Request this service</span>
                <Icon name="arrow-right" size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* ---- Manpower strength ---- */}
    <section className="section section--alt">
      <div className="container">
        <SectionHead
          eyebrow="02 / Manpower strength"
          title="A 1,500-strong workforce, built to deploy."
          lead="Over 1,500 people across India and the Sultanate of Oman — the skilled hands and qualified management behind every project we take on."
        />
        <div className="pillars">
          {MANPOWER.map((m) => (
            <article className="pillar" key={m.title}>
              <IconTile variant="blue" icon={m.icon} size={56} />
              <h3>{m.title}</h3>
              <p>{m.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* ---- Industries ---- */}
    <section className="section section--alt" id="industries">
      <div className="container">
        <SectionHead
          eyebrow="03 / Industries we serve"
          title="Built for heavy industry."
          lead="Two decades of construction, commissioning, and maintenance across the sectors that keep economies running."
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

    {/* ---- By the numbers ---- */}
    <section className="section">
      <div className="container">
        <SectionHead
          eyebrow="04 / By the numbers"
          title="The standards we deliver against."
        />
        <div className="stat-strip">
          <div className="stat-strip__item">
            <div className="stat-strip__num">18+</div>
            <div className="stat-strip__lbl">Years of practice</div>
          </div>
          <div className="stat-strip__item">
            <div className="stat-strip__num">1,500+</div>
            <div className="stat-strip__lbl">Strong workforce</div>
          </div>
          <div className="stat-strip__item">
            <div className="stat-strip__num">Zero</div>
            <div className="stat-strip__lbl">LTI &amp; LTA target</div>
          </div>
          <div className="stat-strip__item">
            <div className="stat-strip__num stat-strip__num--sm">India &amp; Oman</div>
            <div className="stat-strip__lbl">Project reach</div>
          </div>
        </div>
      </div>
    </section>

    {/* ---- The 5 P's ---- */}
    <section className="section section--alt">
      <div className="container">
        <SectionHead
          eyebrow="05 / How we plan"
          title="The 5 P's we work by."
          lead="Proper Planning Prevents Poor Performance — the discipline behind every schedule we commit to."
        />
        <div className="fivep">
          {["Proper", "Planning", "Prevents", "Poor", "Performance"].map((p) => (
            <div className="fivep__item" key={p}>
              <span className="fivep__letter">P</span>
              <span className="fivep__word">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTABanner
      eyebrow="Industrial enquiry"
      title="Send us a scope. We'll send back a plan."
      body="Share your project requirement and target dates. A senior engineer will respond with feasibility and a documented estimate within one business day."
      primaryLabel="Request a Quote"
      primaryHref="contact.html"
      secondaryLabel="Email aeccngl@gmail.com"
      secondaryHref="mailto:aeccngl@gmail.com"
    />
  </>
);

window.IndustrialPage = IndustrialPage;
