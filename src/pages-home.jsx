// Home page — hero + intro + pillars + featured work + testimonial + CTA
const { useState: useStateHome } = React;

function HomePage({ onNav }) {
  return (
    <main>
      {/* Keuzevork — drie ingangen */}
      <section className="section section-keuzevork">
        <div className="container">
          <div className="keuzevork-head">
            <span className="eyebrow">Waar kom je voor?</span>
            <span className="section-num">— 01</span>
            <h2 className="display keuzevork-title">Kies in één klik wat bij je past.</h2>
            <p className="keuzevork-lead">Mijn werk raakt drie werelden. Begin met de ingang die voor jou nu het meest voelt — je kunt later altijd verder kijken.</p>
          </div>
          <div className="keuzevork-grid">
            {[
              {
                num: "01",
                statement: "Ik kom voor mijn kind & gezin",
                body: "Coaching, NEI-therapie, reflexintegratie of opstellingen. Voor gevoelige kinderen, ouders die vastlopen, of gezinnen die samen willen helen.",
                cta: "Naar kind & gezin",
                key: "voorwie",
                tags: ["Kinderen 4–18", "Ouders", "Gezinssessies"],
              },
              {
                num: "02",
                statement: "Ik kom voor mezelf als ondernemer",
                body: "Voor vrouwen en ondernemers die voorbij de strategie willen kijken. Werk op het snijvlak van ratio en intuïtie, persoonlijk leiderschap en systeem.",
                cta: "Naar ondernemers",
                key: "voorwie-ondernemers",
                tags: ["Trajecten op maat", "Vrouwen", "Leiderschap"],
              },
              {
                num: "03",
                statement: "Ik zoek een training of workshop",
                body: "Voor scholen, teams en groepen. Trainingen over hoogsensitiviteit, reflexen, systemisch werk, of de biotensor-workshop. Praktisch én met diepgang.",
                cta: "Naar groepen",
                key: "voorwie-trainingen",
                tags: ["Trainingen", "Workshops", "Groepstrajecten"],
              },
            ].map((opt, i) => (
              <button key={i} className="keuzevork-card" onClick={() => onNav(opt.key)}>
                <div className="keuzevork-card-top">
                  <span className="keuzevork-num">{opt.num}</span>
                  <span className="keuzevork-arrow" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M6 11h10m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </div>
                <h3 className="keuzevork-statement">{opt.statement}</h3>
                <p className="keuzevork-body">{opt.body}</p>
                <div className="keuzevork-tags">
                  {opt.tags.map((t, j) => (
                    <span key={j} className="keuzevork-tag">{t}</span>
                  ))}
                </div>
                <span className="keuzevork-cta">
                  {opt.cta}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8m-3-3 3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section section-intro">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-meta">
              <span className="eyebrow">{CONTENT.intro.eyebrow}</span>
              <span className="section-num">— 02</span>
            </div>
            <div className="intro-body">
              <h2 className="display intro-title">{CONTENT.intro.title}</h2>
              {CONTENT.intro.paragraphs.map((p, i) => (
                <p key={i} className="body-text">{p}</p>
              ))}
              <button className="link-arrow" onClick={() => onNav('over')}>
                Lees meer over mij
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8m-3-3 3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured quote / testimonial */}
      <section className="section section-quote">
        <div className="container">
          <figure className="big-quote">
            <svg className="big-quote-mark" viewBox="0 0 60 60" width="80" height="80">
              <text x="0" y="55" fontFamily="var(--font-display)" fontSize="90" fill="currentColor">"</text>
            </svg>
            <blockquote>
              <p>{CONTENT.testimonials[0].body}</p>
            </blockquote>
            <figcaption>
              <span className="big-quote-author">— {CONTENT.testimonials[0].author}</span>
              <span className="big-quote-context">{CONTENT.testimonials[0].context}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Blog preview */}
      <section className="section section-blog-preview">
        <div className="container">
          <div className="blog-preview-head">
            <div>
              <span className="eyebrow">Blog</span>
              <span className="section-num">— 03</span>
              <h2 className="display">Laatste gedachten</h2>
            </div>
            <button className="link-arrow" onClick={() => onNav('blog')}>
              Alles lezen
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8m-3-3 3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
            </button>
          </div>
          <div className="blog-preview-grid">
            {CONTENT.blog.posts.slice(0, 3).map((post, i) => (
              <article key={i} className="blog-preview-card" onClick={() => onNav('blog')}>
                <PhotoPlaceholder ratio="4/3" label={`blog foto ${i + 1}`} />
                <div className="blog-preview-meta">
                  <span className="blog-preview-cat">{post.category}</span>
                  <span className="blog-preview-date">{post.date}</span>
                </div>
                <h3 className="blog-preview-title">{post.title}</h3>
                <p className="blog-preview-excerpt">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="section section-cta">
        <div className="container">
          <div className="cta-band">
            <div className="cta-band-copy">
              <h2 className="display">Zullen we eens praten?</h2>
              <p>Een kennismaking duurt dertig minuten en is kosteloos. Telefonisch, via video, of gewoon bij mij op de praktijk.</p>
            </div>
            <button className="btn btn-primary btn-large" onClick={() => onNav('contact')}>
              Plan een kennismaking
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { HomePage });
