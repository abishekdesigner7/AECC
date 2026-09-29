/* global React, Eyebrow, Button, IconTile, Icon, SectionHead, PageHero */

const COMMITMENTS = [
  {
    icon: "user-check",
    title: "Dedicated Engineer",
    body: "One named senior engineer is assigned to your project from the first call to the final sign-off — no handoffs, no confusion.",
  },
  {
    icon: "clock",
    title: "Fast, Same-Day Response",
    body: "We aim to give every enquiry — new project, breakdown, or complaint — a qualified response within one business day, usually the same day.",
  },
  {
    icon: "file-text",
    title: "Transparent Documentation",
    body: "Every site visit, milestone, and handover is documented in writing. You always have a paper trail, not just a verbal update.",
  },
  {
    icon: "shield-check",
    title: "We Stand Behind Our Work",
    body: "If something isn't right with work we've executed, we'll put it right. Our name is on every project we hand over.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Raise a Request",
    body: "Reach us by phone, email, or WhatsApp with your requirement — new project, scheduled maintenance, or an urgent breakdown.",
  },
  {
    num: "02",
    title: "Acknowledge & Assign",
    body: "A senior engineer reviews your request and aims to send a written acknowledgement the same business day, with an expected timeline.",
  },
  {
    num: "03",
    title: "Assess & Quote",
    body: "We visit the site if needed, confirm scope, and aim to deliver an itemised estimate within one business day. No surprises in the invoice.",
  },
  {
    num: "04",
    title: "Execute & Sign Off",
    body: "Work is completed, inspected by the assigned engineer, and handed over with a written sign-off document you keep on file.",
  },
];

const FAQS = [
  {
    q: "Where do I find my Job ID or reference number?",
    a: "It's on your invoice and on the confirmation email we send when work is scheduled. Can't find it? Describe the job and site in your report and we'll locate it for you.",
  },
  {
    q: "How quickly will someone respond to my call or email?",
    a: "We aim to acknowledge every enquiry the same business day and follow up with a full response — including feasibility and estimated cost — within one business day.",
  },
  {
    q: "Do you handle emergency breakdowns outside business hours?",
    a: "Yes. AMC clients have access to our emergency line for priority callouts. For non-AMC clients, contact us by phone and we will schedule the earliest available slot.",
  },
  {
    q: "What is covered under an Annual Maintenance Contract (AMC)?",
    a: "An AECC AMC covers scheduled preventive visits plus emergency callouts for electrical, plumbing, AC, and minor civil work — all under one contract with predictable pricing.",
  },
  {
    q: "Will I receive a report after each site visit?",
    a: "Yes. Every visit ends with a documented site report covering work performed, materials used, observations, and next steps, sent to you by email.",
  },
  {
    q: "Can I escalate a complaint if I am not satisfied?",
    a: "Absolutely. Every client has a direct escalation path to our operations lead. Write to aeccngl@gmail.com with the subject 'Escalation' and we'll get back to you quickly.",
  },
  {
    q: "How do I track the status of an ongoing project?",
    a: "Your assigned engineer sends regular progress updates on active sites. For longer projects, we provide summary reports with schedule status and next-step actions.",
  },
];

const FaqItem = ({ q, a }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={`faq-item${open ? " faq-item--open" : ""}`}>
      <button className="faq-question" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{q}</span>
        <Icon name={open ? "minus" : "plus"} size={18} strokeWidth={2} />
      </button>
      {open && <p className="faq-answer">{a}</p>}
    </div>
  );
};

const ISSUE_TYPES = [
  "Workmanship / quality",
  "Scheduling / delay",
  "Site safety concern",
  "Billing / invoice",
  "Staff conduct",
  "Other",
];

// Sidebar: request-a-callback form (front-end only, mirrors the Contact form)
const CallbackForm = () => {
  const [done, setDone] = React.useState(false);
  return (
    <form className="cc-side-card" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
      <div className="cc-side-card__head">
        <IconTile variant="blue" icon="phone-call" size={44} />
        <div>
          <h3>Quick contact</h3>
          <p className="cc-side-card__sub">Prefer a callback? Leave your details and we'll reach out.</p>
        </div>
      </div>
      {done ? (
        <div className="cc-note cc-note--ok">
          <Icon name="check" size={16} strokeWidth={2.5} />
          <span>Thanks — we'll call you back shortly.</span>
        </div>
      ) : (
        <>
          <div className="field"><label htmlFor="cb-name">Your name</label><input id="cb-name" type="text" /></div>
          <div className="field"><label htmlFor="cb-phone">Phone number</label><input id="cb-phone" type="tel" /></div>
          <div className="field"><label htmlFor="cb-msg">Brief message (optional)</label><textarea id="cb-msg" rows={3}></textarea></div>
          <button type="submit" className="btn btn-primary btn-lg">Request callback</button>
        </>
      )}
    </form>
  );
};

// Main: report-an-issue form (front-end only, mirrors the Contact form)
const ReportIssueForm = () => {
  const [sent, setSent] = React.useState(false);
  return (
    <form className="form-card" onSubmit={(e) => { e.preventDefault(); setSent(true); }} noValidate>
      <div>
        <p className="form-card__title">Report an issue</p>
        <p className="form-card__sub">Tell us about any concern with work we've carried out. Our quality team reviews every report.</p>
      </div>

      {sent && (
        <div className="cc-note cc-note--ok">
          <Icon name="check" size={18} strokeWidth={2.5} />
          <span><strong>Report received.</strong> Our quality team will review it and aim to follow up within one business day.</span>
        </div>
      )}

      <div className="form-row">
        <div className="field">
          <label htmlFor="ri-job">Job ID / reference number <span className="req">*</span></label>
          <input id="ri-job" type="text" required placeholder="e.g. AECC-2024-1234" />
          <span className="helper">Find this on your invoice or confirmation email.</span>
        </div>
        <div className="field">
          <label htmlFor="ri-type">Type of issue <span className="req">*</span></label>
          <select id="ri-type" defaultValue="" required>
            <option value="" disabled>Select issue type</option>
            {ISSUE_TYPES.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="ri-desc">Describe your concern <span className="req">*</span></label>
        <textarea id="ri-desc" required placeholder="What happened, when it occurred, and anything that helps us investigate."></textarea>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="ri-email">Email <span className="req">*</span></label>
          <input id="ri-email" type="email" required placeholder="" />
        </div>
        <div className="field">
          <label htmlFor="ri-phone">Phone</label>
          <input id="ri-phone" type="tel" placeholder="" />
        </div>
      </div>

      <div className="cc-whatnext">
        <strong>What happens next?</strong> Our quality team reviews every report and aims to get back to you within one business day to agree the next steps.
      </div>

      <button type="submit" className="btn btn-primary btn-lg form-card__submit">
        <span>Submit report</span>
        <Icon name="arrow-right" size={16} />
      </button>
    </form>
  );
};

const ClientCarePage = () => (
  <>
    <PageHero
      title="Client care that stays with you after the job."
      lead="One engineer. One point of contact. Full documentation from first call to final sign-off — and we stand behind every job we execute."
    />

    {/* Urgent help bar */}
    <div className="cc-urgent">
      <div className="container cc-urgent__inner">
        <div className="cc-urgent__msg">
          <Icon name="phone-call" size={18} strokeWidth={2} />
          <span>
            Urgent issue on an active site? Call us directly:{" "}
            <a className="cc-urgent__phone" href="tel:+917845568702">+91 78455 68702</a>
          </span>
        </div>
        <div className="cc-urgent__note">
          <Icon name="clock" size={15} strokeWidth={2} />
          <span>Priority response for active-site issues</span>
        </div>
      </div>
    </div>

    {/* 01 — Report an issue (primary action) */}
    <section className="section cc-report" id="report">
      <div className="container">
        <SectionHead
          eyebrow="01 / Report an issue"
          title="Something not right? Tell us."
          lead="Report a concern about work we've carried out — our quality team reviews every report and follows up with you directly. It only takes a minute."
        />
        <div className="contact-grid">
          <div className="cc-side">
            <CallbackForm />
            <div className="cc-side-card">
              <div className="cc-side-card__head">
                <IconTile variant="blue" icon="file-text" size={44} />
                <div><h3>Track your request</h3></div>
              </div>
              <p>Already reported an issue? Reply to your confirmation email or call us with your reference number for a status update.</p>
            </div>
          </div>
          <ReportIssueForm />
        </div>
      </div>
    </section>

    {/* 02 — Commitments */}
    <section className="section section--alt">
      <div className="container">
        <SectionHead
          eyebrow="02 / Our commitments"
          title="What every AECC client can count on."
          lead="These four commitments apply to every project — industrial or residential, ₹50,000 or ₹5 crore."
        />
        <div className="svc-grid">
          {COMMITMENTS.map((c) => (
            <article className="svc-card svc-card--blue" key={c.title}>
              <IconTile variant="blue" icon={c.icon} />
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* 03 — How support works */}
    <section className="section">
      <div className="container">
        <SectionHead
          eyebrow="03 / How it works"
          title="From first contact to sign-off in four steps."
          lead="The same process runs for a routine maintenance call and a plant shutdown — only the timelines differ."
        />
        <div className="steps">
          {STEPS.map((s) => (
            <article className="step" key={s.num}>
              <span className="step__num">{s.num} / {s.title}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* 04 — Response SLA strip */}
    <section className="section cc-sla-section">
      <div className="container">
        <SectionHead
          eyebrow="04 / Response times"
          title="The response times we aim for."
        />
        <div className="cc-sla-grid">
          <div className="cc-sla-card">
            <div className="cc-sla-card__time">Same day</div>
            <div className="cc-sla-card__label">Acknowledgement</div>
            <p className="cc-sla-card__body">We aim to acknowledge every new enquiry, breakdown report, or complaint the same business day.</p>
          </div>
          <div className="cc-sla-card">
            <div className="cc-sla-card__time">1 day</div>
            <div className="cc-sla-card__label">Full response &amp; quote</div>
            <p className="cc-sla-card__body">A senior engineer reviews your requirement and responds with feasibility, scope, and an itemised estimate — usually within a day.</p>
          </div>
          <div className="cc-sla-card">
            <div className="cc-sla-card__time">Every visit</div>
            <div className="cc-sla-card__label">Site report</div>
            <p className="cc-sla-card__body">A documented report covering work done, materials used, and next steps — sent to you after each site visit.</p>
          </div>
          <div className="cc-sla-card">
            <div className="cc-sla-card__time">Always</div>
            <div className="cc-sla-card__label">We stand behind our work</div>
            <p className="cc-sla-card__body">If any issue traces back to work we executed, we'll make it right. Our name is on every handover.</p>
          </div>
        </div>
      </div>
    </section>

    {/* 05 — Reach us */}
    <section className="section section--alt cc-reach-section">
      <div className="container">
        <SectionHead
          eyebrow="05 / Reach us"
          title="Three ways to get in touch."
          lead="Choose the channel that works for you. All three reach the same team."
        />
        <div className="cc-reach-grid">
          <div className="cc-reach-card">
            <IconTile variant="blue" icon="mail" size={52} />
            <div>
              <h3>Email</h3>
              <p>Send your requirement, scope, or complaint to our engineering team. Best for detailed project briefs.</p>
              <a className="cc-reach-link" href="mailto:aeccngl@gmail.com">aeccngl@gmail.com <Icon name="arrow-right" size={14} /></a>
            </div>
          </div>
          <div className="cc-reach-card">
            <IconTile variant="blue" icon="phone" size={52} />
            <div>
              <h3>Phone</h3>
              <p>Speak directly to a senior engineer. For emergencies, urgent breakdowns, and time-sensitive site matters.</p>
              <a className="cc-reach-link" href="tel:+917845568702">+91 78455 68702 <Icon name="arrow-right" size={14} /></a>
            </div>
          </div>
          <div className="cc-reach-card">
            <IconTile variant="blue" icon="message-circle" size={52} />
            <div>
              <h3>Contact Form</h3>
              <p>Fill out the project enquiry form — name, service, scope, timeline. We'll respond within one business day.</p>
              <a className="cc-reach-link" href="contact.html">Open form <Icon name="arrow-right" size={14} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* 06 — FAQ */}
    <section className="section">
      <div className="container">
        <SectionHead
          eyebrow="06 / FAQ"
          title="Questions clients ask us most."
        />
        <div className="faq-list">
          {FAQS.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
        </div>
      </div>
    </section>

    <CTABanner
      eyebrow="Client care enquiry"
      title="Have a concern or a new requirement?"
      body="Reach out directly. A senior engineer will review and respond within one business day."
      primaryLabel="Send an Enquiry"
      primaryHref="contact.html"
      secondaryLabel="Email aeccngl@gmail.com"
      secondaryHref="mailto:aeccngl@gmail.com"
    />
  </>
);

window.ClientCarePage = ClientCarePage;
