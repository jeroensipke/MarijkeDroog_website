// Shared UI primitives: Logo, Nav, Footer, Placeholder image, Section wrappers
const { useState, useEffect, useRef } = React;

// Monogram logo — simple "md" mark that works across all 3 themes
function Logo({ size = 48, onClick }) {
  return (
    <button onClick={onClick} className="logo-btn" aria-label="Marijke Droog — home">
      <div className="logo-mark" style={{ width: size, height: size }}>
        <img src={window.__resources ? window.__resources.logo : "assets/logo.png"} alt="" width={size} height={size} style={{ width: size, height: size, objectFit: 'contain', display: 'block' }}/>
      </div>
      <div className="logo-wordmark">
        <span className="logo-name">Marijke Droog</span>
        <span className="logo-sub">
          <span>Intuïtieve begeleiding</span>
          <span>voor wie voelt dat er meer is</span>
        </span>
      </div>
    </button>
  );
}

// Photo placeholder — striped SVG with monospace label (no hand-drawn illustrations)
function PhotoPlaceholder({ ratio = "4/5", label = "foto", note, className = "", style = {} }) {
  const id = `stripe-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <div className={`photo-ph ${className}`} style={{ aspectRatio: ratio, ...style }}>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100">
        <defs>
          <pattern id={id} patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
            <rect width="6" height="6" fill="var(--bg-alt)"/>
            <line x1="0" y1="0" x2="0" y2="6" stroke="var(--rule)" strokeWidth="1.2"/>
          </pattern>
        </defs>
        <rect width="100" height="100" fill={`url(#${id})`}/>
      </svg>
      <div className="photo-ph-label">
        <span className="photo-ph-tag">[ {label} ]</span>
        {note && <span className="photo-ph-note">{note}</span>}
      </div>
    </div>
  );
}

// Top navigation
function Nav({ current, onNav }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileSub, setOpenMobileSub] = useState(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const isActive = (item) => {
    if (current === item.key) return true;
    if (item.children) return item.children.some(c => current === c.key);
    return false;
  };
  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-inner">
        <Logo size={36} onClick={() => onNav('home')} />
        <nav className="nav-links" aria-label="Hoofdnavigatie">
          {CONTENT.nav.filter(n => n.key !== 'home').map(item => (
            item.children ? (
              <div
                key={item.key}
                className={`nav-dropdown ${openDropdown === item.key ? 'open' : ''}`}
                onMouseEnter={() => setOpenDropdown(item.key)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={`nav-link nav-link-dropdown ${isActive(item) ? 'active' : ''}`}
                  onClick={() => setOpenDropdown(openDropdown === item.key ? null : item.key)}
                  aria-expanded={openDropdown === item.key}
                  aria-haspopup="true"
                >
                  {item.label}
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="nav-chevron">
                    <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div className="nav-dropdown-panel" role="menu">
                  {item.children.map((child, ci) => (
                    <button
                      key={child.key + '_' + ci}
                      className={`nav-dropdown-item ${current === child.key ? 'active' : ''}`}
                      onClick={() => { onNav(child.key); setOpenDropdown(null); }}
                      role="menuitem"
                    >
                      <span className="nav-dropdown-item-label">{child.label}</span>
                      {child.desc && <span className="nav-dropdown-item-desc">{child.desc}</span>}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <button
                key={item.key}
                className={`nav-link ${current === item.key ? 'active' : ''}`}
                onClick={() => onNav(item.key)}
              >
                {item.label}
              </button>
            )
          ))}
        </nav>
        <button className="nav-cta" onClick={() => onNav('contact')}>
          Plan kennismaking
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8m-3-3 3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
        </button>
        <button className="nav-burger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span/><span/><span/>
        </button>
      </div>
      {open && (
        <div className="nav-mobile">
          {CONTENT.nav.map(item => (
            item.children ? (
              <div key={item.key} className="nav-mobile-group">
                <button
                  className={`nav-mobile-link nav-mobile-toggle ${openMobileSub === item.key ? 'open' : ''}`}
                  onClick={() => setOpenMobileSub(openMobileSub === item.key ? null : item.key)}
                  aria-expanded={openMobileSub === item.key}
                >
                  {item.label}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                {openMobileSub === item.key && (
                  <div className="nav-mobile-sub">
                    {item.children.map((child, ci) => (
                      <button
                        key={child.key + '_' + ci}
                        className="nav-mobile-link nav-mobile-sub-link"
                        onClick={() => { onNav(child.key); setOpen(false); setOpenMobileSub(null); }}
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button key={item.key} className="nav-mobile-link" onClick={() => { onNav(item.key); setOpen(false); }}>
                {item.label}
              </button>
            )
          ))}
        </div>
      )}
    </header>
  );
}

// Page header — eyebrow + big title used on every subpage
function PageHeader({ eyebrow, title, lead }) {
  return (
    <section className="page-header">
      <div className="container">
        <div className="ph-grid">
          <div className="ph-meta">
            <span className="eyebrow">{eyebrow}</span>
          </div>
          <div className="ph-body">
            <h1 className="display">{title}</h1>
            {lead && <p className="lead">{lead}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer({ onNav }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-mark">
              <img src={window.__resources ? window.__resources.logo : "assets/logo.png"} alt="Marijke Droog" width="56" height="56" style={{ width: 56, height: 56, objectFit: 'contain', display: 'block' }}/>
            </div>
            <p className="footer-tagline">
              Een praktijk voor ouders, kinderen, vrouwen en ondernemers die voelen dat er iets mag verschuiven.
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-link" onClick={e => e.preventDefault()}>
                <span>Instagram</span><span className="footer-social-handle">{CONTENT.brand.instagram}</span>
              </a>
              <a href="#" className="footer-social-link" onClick={e => e.preventDefault()}>
                <span>LinkedIn</span><span className="footer-social-handle">{CONTENT.brand.linkedin}</span>
              </a>
            </div>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <span className="footer-label">Pagina's</span>
              {CONTENT.nav.map(n => (
                <button key={n.key} className="footer-link" onClick={() => onNav(n.key)}>{n.label}</button>
              ))}
            </div>
            <div className="footer-col">
              <span className="footer-label">Contact</span>
              <a className="footer-link" href={`mailto:${CONTENT.brand.email}`}>{CONTENT.brand.email}</a>
              <a className="footer-link" href={`tel:${CONTENT.brand.phone.replace(/\s/g, '')}`}>{CONTENT.brand.phone}</a>
              <span className="footer-link footer-link-static">Enschede, Almelo &amp; online</span>
            </div>
            <div className="footer-col">
              <span className="footer-label">Praktisch</span>
              <button className="footer-link" onClick={() => onNav('tarieven')}>Tarieven</button>
              <button className="footer-link" onClick={() => onNav('faq')}>Veelgestelde vragen</button>
              <span className="footer-link footer-link-static">Algemene voorwaarden</span>
              <span className="footer-link footer-link-static">Privacyverklaring</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Marijke Droog</span>
          <span>Met zorg gebouwd in {CONTENT.brand.location}.</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Logo, PhotoPlaceholder, Nav, PageHeader, Footer });
