// Blog, FAQ, Contact pages
const { useState: useStateExtra } = React;

function BlogPage({ onNav }) {
  const c = CONTENT.blog;
  const [selectedCat, setSelectedCat] = useStateExtra('Alle');
  const cats = ['Alle', ...Array.from(new Set(c.posts.map(p => p.category)))];
  const filtered = selectedCat === 'Alle' ? c.posts : c.posts.filter(p => p.category === selectedCat);

  return (
    <main>
      <PageHeader eyebrow={c.eyebrow} title={c.title} lead={c.lead} />

      <section className="section">
        <div className="container">
          <div className="blog-filters">
            {cats.map(cat => (
              <button
                key={cat}
                className={`blog-filter ${selectedCat === cat ? 'active' : ''}`}
                onClick={() => setSelectedCat(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="blog-grid">
            {filtered.map((post, i) => (
              <article key={i} className="blog-card">
                <div className="blog-card-media">
                  <PhotoPlaceholder ratio="4/3" label={`blog ${i + 1}`} />
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span className="blog-card-cat">{post.category}</span>
                    <span className="blog-card-dot">•</span>
                    <span>{post.date}</span>
                    <span className="blog-card-dot">•</span>
                    <span>{post.readtime}</span>
                  </div>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <button className="link-arrow">
                    Lees verder
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8m-3-3 3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function FaqPage({ onNav }) {
  const c = CONTENT.faq;
  const [openIdx, setOpenIdx] = useStateExtra(0);

  return (
    <main>
      <PageHeader eyebrow={c.eyebrow} title={c.title} />

      <section className="section">
        <div className="container container-narrow">
          <div className="faq-list">
            {c.items.map((item, i) => (
              <div key={i} className={`faq-item ${openIdx === i ? 'open' : ''}`}>
                <button className="faq-q" onClick={() => setOpenIdx(openIdx === i ? -1 : i)}>
                  <span className="faq-q-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="faq-q-text">{item.q}</span>
                  <span className="faq-q-toggle">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d={openIdx === i ? "M3 8h10" : "M8 3v10M3 8h10"} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                    </svg>
                  </span>
                </button>
                <div className="faq-a-wrap">
                  <div className="faq-a">{item.a}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-footer">
            <p>Staat je vraag er niet bij?</p>
            <button className="btn btn-ghost" onClick={() => onNav('contact')}>
              Stel je vraag
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8m-3-3 3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactPage({ onNav }) {
  const c = CONTENT.contact;
  const [form, setForm] = useStateExtra({
    naam: '', email: '', telefoon: '', onderwerp: '', bericht: ''
  });
  const [errors, setErrors] = useStateExtra({});
  const [submitted, setSubmitted] = useStateExtra(false);

  const validate = () => {
    const e = {};
    if (!form.naam.trim()) e.naam = 'Vul je naam in';
    if (!form.email.trim()) e.email = 'Vul je e-mail in';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Geen geldig e-mailadres';
    if (!form.onderwerp) e.onderwerp = 'Kies een onderwerp';
    if (!form.bericht.trim()) e.bericht = 'Schrijf een bericht';
    else if (form.bericht.trim().length < 10) e.bericht = 'Iets meer mag wel — minstens 10 tekens';
    return e;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSubmitted(true);
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
    }
  };

  const update = (k, v) => {
    setForm({ ...form, [k]: v });
    if (errors[k]) setErrors({ ...errors, [k]: undefined });
  };

  return (
    <main>
      <PageHeader eyebrow={c.eyebrow} title={c.title} lead={c.lead} />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-sidebar">
              <div className="contact-info-card">
                <span className="eyebrow">Direct contact</span>
                <a href={`mailto:${CONTENT.brand.email}`} className="contact-info-line">
                  <span className="contact-info-label">Mail</span>
                  <span className="contact-info-value">{CONTENT.brand.email}</span>
                </a>
                <a href={`tel:${CONTENT.brand.phone.replace(/\s/g, '')}`} className="contact-info-line">
                  <span className="contact-info-label">Bel</span>
                  <span className="contact-info-value">{CONTENT.brand.phone}</span>
                </a>
                <div className="contact-info-line">
                  <span className="contact-info-label">Praktijk</span>
                  <span className="contact-info-value">{CONTENT.brand.location}, NL</span>
                </div>
              </div>

              <div className="contact-hours-card">
                <span className="eyebrow">Spreekuren</span>
                <dl>
                  <dt>Ma – Do</dt><dd>09:00 – 17:00</dd>
                  <dt>Vrijdag</dt><dd>09:00 – 13:00</dd>
                  <dt>Weekend</dt><dd>Gesloten</dd>
                </dl>
                <p className="contact-hours-note">{c.responseTime}</p>
              </div>

              <div className="contact-social-card">
                <span className="eyebrow">Online</span>
                <a href="#" className="contact-social-link" onClick={e => e.preventDefault()}>
                  Instagram <span>{CONTENT.brand.instagram}</span>
                </a>
                <a href="#" className="contact-social-link" onClick={e => e.preventDefault()}>
                  LinkedIn <span>{CONTENT.brand.linkedin}</span>
                </a>
              </div>
            </div>

            <div className="contact-form-wrap">
              {submitted ? (
                <div className="contact-success">
                  <div className="contact-success-mark">
                    <svg viewBox="0 0 48 48" width="48" height="48" fill="none">
                      <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="1"/>
                      <path d="M14 24l7 7 13-15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h2 className="display">Dankjewel, {form.naam.split(' ')[0]}.</h2>
                  <p>Je bericht is bij me aangekomen. Ik reageer meestal binnen twee werkdagen — soms eerder.</p>
                  <button className="btn btn-ghost" onClick={() => { setSubmitted(false); setForm({ naam: '', email: '', telefoon: '', onderwerp: '', bericht: '' }); }}>
                    Nog een bericht sturen
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={onSubmit} noValidate>
                  <div className="form-row">
                    <label className={`field ${errors.naam ? 'field-error' : ''}`}>
                      <span className="field-label">Je naam</span>
                      <input type="text" value={form.naam} onChange={e => update('naam', e.target.value)} placeholder="Bijv. Saskia Jansen"/>
                      {errors.naam && <span className="field-error-text">{errors.naam}</span>}
                    </label>
                  </div>

                  <div className="form-row form-row-2">
                    <label className={`field ${errors.email ? 'field-error' : ''}`}>
                      <span className="field-label">E-mailadres</span>
                      <input type="email" value={form.email} onChange={e => update('email', e.target.value)} placeholder="saskia@email.nl"/>
                      {errors.email && <span className="field-error-text">{errors.email}</span>}
                    </label>
                    <label className="field">
                      <span className="field-label">Telefoon <span className="field-optional">(optioneel)</span></span>
                      <input type="tel" value={form.telefoon} onChange={e => update('telefoon', e.target.value)} placeholder="06 ..."/>
                    </label>
                  </div>

                  <div className="form-row">
                    <fieldset className={`field field-radio ${errors.onderwerp ? 'field-error' : ''}`}>
                      <legend className="field-label">Waar gaat het over?</legend>
                      <div className="radio-group">
                        {['Kindercoaching', 'Ouderbegeleiding', 'Individuele coaching', 'Gezinssessie', 'Iets anders'].map(o => (
                          <label key={o} className={`radio-chip ${form.onderwerp === o ? 'active' : ''}`}>
                            <input type="radio" name="onderwerp" value={o} checked={form.onderwerp === o} onChange={e => update('onderwerp', e.target.value)}/>
                            <span>{o}</span>
                          </label>
                        ))}
                      </div>
                      {errors.onderwerp && <span className="field-error-text">{errors.onderwerp}</span>}
                    </fieldset>
                  </div>

                  <div className="form-row">
                    <label className={`field ${errors.bericht ? 'field-error' : ''}`}>
                      <span className="field-label">Vertel me iets meer</span>
                      <textarea rows="5" value={form.bericht} onChange={e => update('bericht', e.target.value)} placeholder="Waar loop je tegenaan? Wat zou je willen?"/>
                      {errors.bericht && <span className="field-error-text">{errors.bericht}</span>}
                    </label>
                  </div>

                  <div className="form-actions">
                    <button type="submit" className="btn btn-primary btn-large">
                      Stuur je bericht
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
                    </button>
                    <span className="form-disclaimer">Je gegevens blijven tussen ons. Zie privacyverklaring.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { BlogPage, FaqPage, ContactPage });
