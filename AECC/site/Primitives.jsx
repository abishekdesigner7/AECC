/* global React, Icon */

// Button — renders as <a> if href is provided, else <button>.
const Button = ({ variant = "primary", size = "md", arrow = false, href, children, ...rest }) => {
  const cls = `btn btn-${variant} btn-${size}`;
  const inner = (
    <>
      <span>{children}</span>
      {arrow && <Icon name="arrow-right" size={size === "sm" ? 14 : 16} strokeWidth={size === "sm" ? 2.5 : 2} />}
    </>
  );
  if (href) return <a className={cls} href={href} {...rest}>{inner}</a>;
  return <button className={cls} {...rest}>{inner}</button>;
};

const Eyebrow = ({ children, className = "", onDark = false }) => (
  <span className={`eyebrow ${onDark ? "eyebrow--on-dark" : ""} ${className}`.trim()}>{children}</span>
);

const Logo = ({ on = "light", href = "index.html" }) => (
  <a href={href} className="brand" aria-label="AECC home">
    <span className="brand-mark">A</span>
    <span className={`brand-word brand-word-${on}`}>AECC</span>
  </a>
);

const IconTile = ({ variant = "blue", icon, size = 48 }) => (
  <div className={`icon-tile icon-tile-${variant}`} style={{ width: size, height: size }}>
    <Icon name={icon} size={Math.round(size * 0.46)} />
  </div>
);

const CheckItem = ({ children }) => (
  <li className="check-item">
    <Icon name="check" size={16} strokeWidth={2.5} />
    <span>{children}</span>
  </li>
);

// SectionHead — eyebrow + h2 + lead, with optional right-side link.
const SectionHead = ({ eyebrow, title, lead, link, row = false }) => (
  <div className={`section-head ${row ? "section-head--row" : ""}`}>
    <div>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="section-h2">{title}</h2>
      {lead && <p className="section-lead">{lead}</p>}
    </div>
    {row && link && (
      <a className="section-link" href={link.href}>
        {link.label} <Icon name="arrow-right" size={14} strokeWidth={2.5} />
      </a>
    )}
  </div>
);

// PageHero — used on all sub-pages. Compact navy hero with eyebrow + h1 + lead.
const PageHero = ({ eyebrow, title, lead, children }) => (
  <section className="page-hero">
    <div className="page-hero__bg" aria-hidden="true">
      <div className="page-hero__grid"></div>
      <div className="page-hero__glow"></div>
    </div>
    <div className="container page-hero__inner">
      {eyebrow && <Eyebrow onDark>{eyebrow}</Eyebrow>}
      <h1 className="page-h1 page-hero__title">{title}</h1>
      {lead && <p className="page-hero__lead">{lead}</p>}
      {children}
    </div>
  </section>
);

window.Button = Button;
window.Eyebrow = Eyebrow;
window.Logo = Logo;
window.IconTile = IconTile;
window.CheckItem = CheckItem;
window.SectionHead = SectionHead;
window.PageHero = PageHero;
