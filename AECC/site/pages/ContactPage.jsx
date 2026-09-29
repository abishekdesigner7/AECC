/* global React, Eyebrow, Icon, IconTile, SectionHead, PageHero */

const ContactPage = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <>
      <PageHero
        title="Talk to a senior engineer."
        lead="Send us your requirement and we'll respond within one business day — usually the same day. No call centres, no bots."
      />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div style={{display: "flex", flexDirection: "column", gap: 20}}>
              <div className="reach-card">
                <h3>Reach us directly</h3>
                <div className="reach-row">
                  <IconTile variant="blue" icon="phone" />
                  <div className="reach-row__text">
                    <span className="reach-row__lbl">Phone</span>
                    <a className="reach-row__val" href="tel:+917845568702">+91 78455 68702</a>
                  </div>
                </div>
                <div className="reach-row">
                  <IconTile variant="blue" icon="smartphone" />
                  <div className="reach-row__text">
                    <span className="reach-row__lbl">Mobile</span>
                    <a className="reach-row__val" href="tel:+917601049704">+91 76010 49704</a>
                  </div>
                </div>
                <div className="reach-row">
                  <IconTile variant="blue" icon="mail" />
                  <div className="reach-row__text">
                    <span className="reach-row__lbl">Email</span>
                    <a className="reach-row__val" href="mailto:aeccngl@gmail.com">aeccngl@gmail.com</a>
                  </div>
                </div>
                <div className="reach-row">
                  <IconTile variant="blue" icon="globe" />
                  <div className="reach-row__text">
                    <span className="reach-row__lbl">Website</span>
                    <a className="reach-row__val" href="https://www.antrosengineering.com" target="_blank" rel="noopener">www.antrosengineering.com</a>
                  </div>
                </div>
                <div className="reach-row">
                  <IconTile variant="blue" icon="map-pin" />
                  <div className="reach-row__text">
                    <span className="reach-row__lbl">Head Office</span>
                    <span className="reach-row__val">176C-20, Ramanathichenputhur, Kumarapuram,<br />Thoppur (PO), Nagercoil-629402, KK District,<br />Tamil Nadu, India</span>
                  </div>
                </div>
              </div>

              <div className="promise-card">
                <Eyebrow onDark>Response time</Eyebrow>
                <h4>One business day. Usually the same day.</h4>
                <p>
                  Every enquiry is reviewed by a senior engineer before it's quoted. We'll
                  confirm receipt within a few hours and follow up with feasibility and
                  next steps within one business day.
                </p>
              </div>
            </div>

            <form className="form-card" onSubmit={onSubmit} noValidate>
              <div>
                <p className="form-card__title">Request a quote</p>
                <p className="form-card__sub">Fields marked <span style={{color: "var(--error)"}}>*</span> are required.</p>
              </div>

              {submitted && (
                <div role="status" style={{
                  background: "rgba(16,185,129,0.08)",
                  border: "1px solid rgba(16,185,129,0.40)",
                  borderRadius: "var(--radius-md)",
                  padding: "14px 16px",
                  display: "flex", alignItems: "center", gap: 12,
                  color: "#065f46", fontSize: 14
                }}>
                  <Icon name="check" size={18} strokeWidth={2.5} />
                  <span><strong>Enquiry received.</strong> A senior engineer will be in touch within one business day.</span>
                </div>
              )}

              <div className="form-row">
                <div className="field">
                  <label htmlFor="f-name">Full name <span className="req">*</span></label>
                  <input id="f-name" type="text" required placeholder="" />
                </div>
                <div className="field">
                  <label htmlFor="f-email">Email <span className="req">*</span></label>
                  <input id="f-email" type="email" required placeholder="" />
                </div>
              </div>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="f-phone">Phone</label>
                  <input id="f-phone" type="tel" placeholder="" />
                </div>
                <div className="field">
                  <label htmlFor="f-company">Company / Site</label>
                  <input id="f-company" type="text" placeholder="" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="f-service">Service of interest</label>
                <select id="f-service" defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <optgroup label="Industrial Services">
                    <option>Civil &amp; Structural Works</option>
                    <option>Piping Fabrication &amp; Installation</option>
                    <option>Equipment Installation &amp; Erection</option>
                    <option>Mechanical Maintenance &amp; AMC</option>
                    <option>Plant Shutdown &amp; Turnaround</option>
                    <option>Commissioning Support</option>
                    <option>Mining &amp; Site Development</option>
                    <option>HSE &amp; Compliance Support</option>
                  </optgroup>
                  <optgroup label="Home &amp; Facility Services">
                    <option>Electrical Installations &amp; Repairs</option>
                    <option>Plumbing &amp; Sanitary Works</option>
                    <option>AC Installation &amp; Maintenance</option>
                    <option>CCTV &amp; Security Systems</option>
                    <option>Painting &amp; Waterproofing</option>
                    <option>Renovation &amp; Interior Works</option>
                    <option>Solar Panel Installation</option>
                    <option>Annual Home Maintenance Contract</option>
                  </optgroup>
                  <option>Not sure / general enquiry</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="f-details">Project details <span className="req">*</span></label>
                <textarea id="f-details" required placeholder="Tell us about the site, scope, and timeline."></textarea>
                <span className="helper">A short description is enough — we'll follow up with the right questions.</span>
              </div>

              <button type="submit" className="btn btn-primary btn-lg form-card__submit">
                <span>Send enquiry</span>
                <Icon name="arrow-right" size={16} />
              </button>

              <p className="form-card__privacy">
                We use your details only to respond to this enquiry. We do not share them with third parties.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

window.ContactPage = ContactPage;
