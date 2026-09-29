/* global React, Icon, PageHero, CTABanner */

const GALLERY = [
  { src: "assets/gallery/trench-panagudi.jpg",            title: "Trench excavation",           place: "Panagudi, Tamil Nadu",       cat: "Earthworks",       alt: "AECC mini-excavator digging a trench at Panagudi" },
  { src: "assets/gallery/di-pipe-parivirisuriyan.jpg?v=2", title: "DI pipeline installation",    place: "Parivirisuriyan, Tamil Nadu", cat: "Pipeline",        alt: "AECC crew fitting a ductile-iron K9 pipe in a trench" },
  { src: "assets/gallery/flyover-kollam.jpg?v=2",          title: "Flyover girder works",        place: "Kollam, Kerala",             cat: "Infrastructure",   alt: "Workers on a crane man-basket under a flyover at Kollam" },
  { src: "assets/gallery/pipeline-roadside.jpg",          title: "Roadside pipeline trenching", place: "Tamil Nadu",                 cat: "Pipeline",         alt: "AECC excavator beside a roadside trench with pipe laid in" },
  { src: "assets/gallery/earthworks-parivirisuriyan.jpg", title: "Roadside earthworks",         place: "Parivirisuriyan, Tamil Nadu", cat: "Earthworks",      alt: "AECC mini-excavator working a rural roadside" },
  { src: "assets/gallery/mobilisation.jpg",              title: "Machine mobilisation",        place: "Tamil Nadu",                 cat: "Plant & Equipment", alt: "AECC mini-excavator being loaded onto a transport truck" },
];

// Fullscreen viewer — Esc to close, arrow keys to navigate, click backdrop to dismiss.
const Lightbox = ({ items, index, onClose, onNav }) => {
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") onNav(1);
      else if (e.key === "ArrowLeft") onNav(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose, onNav]);

  const item = items[index];
  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.title} onClick={onClose}>
      <button className="lightbox__close" aria-label="Close" onClick={onClose}><Icon name="x" size={24} /></button>
      <button className="lightbox__nav lightbox__nav--prev" aria-label="Previous image"
        onClick={(e) => { e.stopPropagation(); onNav(-1); }}><Icon name="chevron-left" size={28} /></button>
      <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={item.alt} className="lightbox__img" />
        <figcaption className="lightbox__cap">
          <span className="lightbox__cap-title">{item.title}</span>
          <span className="lightbox__cap-meta">
            <Icon name="map-pin" size={13} strokeWidth={2} /> {item.place}
            <span className="lightbox__count">{index + 1} / {items.length}</span>
          </span>
        </figcaption>
      </figure>
      <button className="lightbox__nav lightbox__nav--next" aria-label="Next image"
        onClick={(e) => { e.stopPropagation(); onNav(1); }}><Icon name="chevron-right" size={28} /></button>
    </div>
  );
};

const GalleryPage = () => {
  const [active, setActive] = React.useState(null);
  const nav = (dir) => setActive((i) => (i + dir + GALLERY.length) % GALLERY.length);

  return (
    <>
      <PageHero
        title="Our work, out on site."
        lead="Live projects across Tamil Nadu and Kerala — earthworks, pipelines, and infrastructure delivered by AECC crews and plant."
      />

      <section className="section">
        <div className="container">
          <div className="gallery">
            {GALLERY.map((g, i) => (
              <button className="gallery__item" key={g.src} onClick={() => setActive(i)} aria-label={`View larger: ${g.title}, ${g.place}`}>
                <span className="gallery__media">
                  <img src={g.src} alt={g.alt} loading="lazy" className="gallery__img" />
                  <span className="gallery__zoom" aria-hidden="true"><Icon name="maximize-2" size={15} strokeWidth={2} /></span>
                </span>
                <span className="gallery__body">
                  <span className="gallery__cat">{g.cat}</span>
                  <span className="gallery__title">{g.title}</span>
                  <span className="gallery__place"><Icon name="map-pin" size={13} strokeWidth={2} /> {g.place}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {active !== null && (
        <Lightbox items={GALLERY} index={active} onClose={() => setActive(null)} onNav={nav} />
      )}

      <CTABanner
        eyebrow="Your project next"
        title="Have a site that needs plant and a crew that shows up?"
        body="Tell us the scope and location. A senior engineer will respond within one business day."
        primaryLabel="Start a Project"
        primaryHref="contact.html"
        secondaryLabel="Call +91 78455 68702"
        secondaryHref="tel:+917845568702"
      />
    </>
  );
};

window.GalleryPage = GalleryPage;
