/* global React, Icon */
const CTABanner = ({
  eyebrow = "Ready when you are",
  title = "Start your next project with engineers who deliver.",
  body = "Tell us about your requirement. A senior engineer will review and respond within one business day.",
  primaryLabel = "Start a Project",
  primaryHref = "contact.html",
  secondaryLabel = "Call +91 78455 68702",
  secondaryHref = "tel:+917845568702",
}) => (
  <section className="cta-banner-wrap">
    <div className="container">
      <div className="cta-banner">
        <div className="cta-banner__bg" aria-hidden="true">
          <div className="cta-banner__grid"></div>
          <div className="cta-banner__glow"></div>
        </div>
        <div className="cta-banner__content">
          <span className="eyebrow eyebrow--on-dark">{eyebrow}</span>
          <h2 className="section-h2 cta-banner__title">{title}</h2>
          <p className="cta-banner__lead">{body}</p>
          <div className="cta-banner__actions">
            <a href={primaryHref} className="btn btn-primary btn-lg">
              <span>{primaryLabel}</span><Icon name="arrow-right" size={16} />
            </a>
            <a href={secondaryHref} className="btn btn-ghost btn-lg">
              <span>{secondaryLabel}</span><Icon name="arrow-right" size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

window.CTABanner = CTABanner;
