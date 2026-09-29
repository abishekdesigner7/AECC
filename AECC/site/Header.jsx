/* global React, Logo, Button, Icon */
const NAV_LINKS = [
  { id: "home", label: "Home", href: "index.html" },
  { id: "about", label: "About", href: "about.html" },
  { id: "industrial", label: "Industrial", href: "industrial.html" },
  { id: "home-services", label: "Home & Facility", href: "home-services.html" },
  { id: "client-care", label: "Client Care", href: "client-care.html" },
  { id: "gallery", label: "Gallery", href: "gallery.html" },
  { id: "careers", label: "Careers", href: "careers.html" },
  { id: "contact", label: "Contact", href: "contact.html" },
];

const Header = ({ active = "home" }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="index.html" className="brand" aria-label="AECC home">
          <img src="assets/logo.png" alt="AECC — Antros Engineering &amp; Construction Company" className="header-logo" />
        </a>
        <nav className="site-nav" aria-label="Primary">
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <a href={l.href} className={active === l.id ? "active" : ""}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="site-header__cta">
          <a href="contact.html" className="btn btn-primary btn-md">
            <span>Start a Project</span>
            <Icon name="arrow-right" size={16} />
          </a>
        </div>
        <button className="site-header__menu" aria-label="Open menu" onClick={() => setOpen(true)}>
          <Icon name="menu" size={28} />
        </button>
      </div>
      {open && (
        <>
          <div className="mobile-menu__backdrop" onClick={() => setOpen(false)} aria-hidden="true"></div>
          <aside className="mobile-menu" role="dialog" aria-modal="true" aria-label="Site menu">
            <div className="mobile-menu__top">
              <a href="index.html" className="brand" aria-label="AECC home">
                <img src="assets/logo.png" alt="AECC" className="header-logo" />
              </a>
              <button className="mobile-menu__close" onClick={() => setOpen(false)} aria-label="Close menu">
                <Icon name="x" size={24} />
              </button>
            </div>
            <nav aria-label="Mobile primary">
              <ul>
                {NAV_LINKS.map((l) => (
                  <li key={l.id}>
                    <a href={l.href} className={active === l.id ? "active" : ""} onClick={() => setOpen(false)}>
                      <span>{l.label}</span>
                      <Icon name="chevron-right" size={18} />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </>
      )}
    </header>
  );
};

window.Header = Header;
