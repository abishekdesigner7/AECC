/* global React, Eyebrow, Button, IconTile, Icon, SectionHead, PageHero */

const HOME_SERVICES = [
  { icon: "zap",              title: "Electrical Installations & Repairs",          body: "Wiring, panel upgrades, fittings, and fault diagnosis by licensed electricians — for homes and commercial premises." },
  { icon: "droplets",         title: "Plumbing & Sanitary Works",                   body: "Concealed and surface plumbing, sanitary installations, leak repair, and pipe replacement — done right the first time." },
  { icon: "snowflake",        title: "Air Conditioning Installation & Maintenance",  body: "Split AC, cassette, and ducted system installs, gas refills, deep cleaning, and AMC contracts." },
  { icon: "camera",           title: "CCTV & Security Systems",                     body: "IP camera networks, NVR setup, access control, and intercom — installed and configured for everyday use." },
  { icon: "paintbrush",       title: "Painting & Waterproofing",                    body: "Interior, exterior, and texture painting plus terrace and wall waterproofing — with documented surface prep." },
  { icon: "hammer",           title: "Renovation & Interior Works",                 body: "Modular kitchens, false ceilings, partition walls, and full home renovations — planned and project-managed end-to-end." },
  { icon: "sun",              title: "Solar Panel Installation",                    body: "Rooftop solar — site survey, sizing, panel and inverter installation, net-metering, and post-install support." },
  { icon: "calendar-check",   title: "Annual Home Maintenance Contracts",           body: "One contract covers electrical, plumbing, AC, and minor civil work — scheduled visits and emergency callouts." },
];

const HomeServicesPage = () => (
  <>
    <PageHero
      title="Industrial-grade discipline, at the scale of your home."
      lead="Licensed crews, transparent pricing, scheduled visits. Eight service areas — and one annual maintenance contract if you'd rather not think about any of it."
    />

    <section className="section">
      <div className="container">
        <SectionHead
          eyebrow="01 / What we cover"
          title="Eight home &amp; facility services."
          lead="Every job is quoted itemised. Every job is staffed by the same crew you met during assessment. Every job ends with a written sign-off."
        />
        <div className="svc-grid">
          {HOME_SERVICES.map((s) => (
            <article className="svc-card svc-card--warm" key={s.title}>
              <IconTile variant="warm" icon={s.icon} />
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <a className="svc-card__more" href="contact.html">
                <span>Learn more</span>
                <Icon name="arrow-right" size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="section section--alt">
      <div className="container">
        <SectionHead
          eyebrow="02 / How it works"
          title="From enquiry to handover in four steps."
          lead="The same workflow runs for a single AC install and a full home renovation — only the timelines change."
        />
        <div className="steps">
          <article className="step">
            <span className="step__num">01 / Enquiry</span>
            <h3>Share your requirement</h3>
            <p>Tell us what you need — by phone, email, or the form on the contact page.</p>
          </article>
          <article className="step">
            <span className="step__num">02 / Survey</span>
            <h3>Site assessment</h3>
            <p>An engineer visits, measures, and confirms scope. No charges for the survey.</p>
          </article>
          <article className="step">
            <span className="step__num">03 / Quote</span>
            <h3>Transparent quote</h3>
            <p>Itemised estimate within one business day. You see every line before you sign.</p>
          </article>
          <article className="step">
            <span className="step__num">04 / Execute</span>
            <h3>Professional execution</h3>
            <p>Scheduled, supervised, and signed off on completion. Documented for your records.</p>
          </article>
        </div>
      </div>
    </section>

    <CTABanner
      eyebrow="Home enquiry"
      title="Book a site visit. Get an itemised quote."
      body="A senior engineer will respond within one business day to schedule your assessment."
      primaryLabel="Book a Site Visit"
      primaryHref="contact.html"
      secondaryLabel="Email aeccngl@gmail.com"
      secondaryHref="mailto:aeccngl@gmail.com"
    />
  </>
);

window.HomeServicesPage = HomeServicesPage;
