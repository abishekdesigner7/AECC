/* global React, Icon */
const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <div className="site-footer__grid">
        <div className="site-footer__brand">
          <a href="index.html" className="brand" aria-label="AECC home">
            <img src="assets/logo.png" alt="AECC" className="header-logo" />
          </a>
          <p>
            Antros Engineering Construction Company — engineering &amp; construction for
            mining, oil &amp; gas and industrial plants, plus home &amp; facility services.
            18+ years and 1,500+ people across India &amp; Oman.
          </p>
          <div className="site-footer__chips">
            <span>18+ years</span>
            <span>1,500+ team</span>
            <span>HSE-led</span>
            <span>India &amp; Oman</span>
          </div>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><a href="about.html">About</a></li>
            <li><a href="about.html#vision">Vision &amp; Mission</a></li>
            <li><a href="index.html#why">Why AECC</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="careers.html">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li><a href="industrial.html">Industrial Services</a></li>
            <li><a href="home-services.html">Home &amp; Facility</a></li>
            <li><a href="client-care.html">Client Care</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:+917845568702"><Icon name="phone" size={14} /> +91 78455 68702</a></li>
            <li><a href="tel:+917601049704"><Icon name="smartphone" size={14} /> +91 76010 49704</a></li>
            <li><a href="mailto:aeccngl@gmail.com"><Icon name="mail" size={14} /> aeccngl@gmail.com</a></li>
            <li><a href="https://www.antrosengineering.com" target="_blank" rel="noopener"><Icon name="globe" size={14} /> www.antrosengineering.com</a></li>
            <li><span style={{whiteSpace: "normal", alignItems: "flex-start"}}><Icon name="map-pin" size={14} style={{marginTop: 3}} /> Nagercoil-629402, Tamil Nadu, India</span></li>
          </ul>
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>© 2026 Antros Engineering Construction Company. All rights reserved.</span>
        <span>www.antrosengineering.com</span>
      </div>
    </div>
  </footer>
);

window.Footer = Footer;
