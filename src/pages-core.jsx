// Over mij, Aanbod, Voor wie, Tarieven pages

function OverPage({ onNav }) {
  const c = CONTENT.over;
  return (
    <main>
      <PageHeader eyebrow={c.eyebrow} title={c.title} lead={c.lead} />

      <section className="section">
        <div className="container">
          <div className="over-grid">
            <div className="over-media">
              <PhotoPlaceholder ratio="4/5" label="portret marijke" note="grote foto" />
              <div className="over-meta-card">
                <span className="eyebrow">In het kort</span>
                <dl>
                  <dt>Praktijk</dt><dd>Mijn Kind en Ik</dd>
                  <dt>Locaties</dt><dd>{CONTENT.brand.location}</dd>
                  <dt>Ook</dt><dd>Online, wereldwijd</dd>
                  <dt>Specialisatie</dt><dd>NEI, reflexintegratie, systemisch werk</dd>
                </dl>
              </div>
            </div>
            <div className="over-copy">
              {c.body.map((p, i) => (
                <p key={i} className="body-text">{p}</p>
              ))}

              <div className="over-credentials">
                <span className="eyebrow">Opleiding & specialisatie</span>
                <ul>
                  {c.credentials.map((cr, i) => (
                    <li key={i}>
                      <span className="cred-dot">✦</span>
                      <span>{cr}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="over-quote">
                <p>"Ik zie niet het 'probleemkind'. Ik zie een kind met een boodschap."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-bg-alt">
        <div className="container">
          <div className="over-photos">
            <PhotoPlaceholder ratio="3/4" label="praktijkruimte" note="Penninkstraat, Enschede" />
            <PhotoPlaceholder ratio="1/1" label="werkmaterialen" note="biotensor, NEI-kaarten" />
            <PhotoPlaceholder ratio="3/4" label="detailfoto" note="reflexintegratie" />
          </div>
        </div>
      </section>

      <section className="section section-cta">
        <div className="container">
          <div className="cta-band">
            <div className="cta-band-copy">
              <h2 className="display">Benieuwd of we bij elkaar passen?</h2>
              <p>Het kennismakingsgesprek is er om het uit te vinden. Kosteloos, vrijblijvend.</p>
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

function AanbodPage({ onNav, focusMethode }) {
  const c = CONTENT.aanbod;
  const methodeContext = {
    nei: { eyebrow: "Wat is NEI-therapie", title: "NEI-therapie.", lead: c.methodes.find(m => m.name.toLowerCase().includes('nei'))?.body },
    reflex: { eyebrow: "Wat is reflexintegratie", title: "Reflexintegratie.", lead: c.methodes.find(m => m.name.toLowerCase().includes('reflex'))?.body },
    systemisch: { eyebrow: "Wat zijn opstellingen", title: "Systemisch werk & opstellingen.", lead: c.methodes.find(m => m.name.toLowerCase().includes('systemisch'))?.body },
  };
  const ctx = (focusMethode && methodeContext[focusMethode]) || { eyebrow: c.eyebrow, title: c.title, lead: c.lead };
  React.useEffect(() => {
    if (focusMethode) {
      // wait for App's scroll-to-top to settle, then scroll to the method
      setTimeout(() => {
        const el = document.getElementById('methode-' + focusMethode);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top, behavior: 'auto' });
          el.classList.add('methode-card-flash');
          setTimeout(() => el.classList.remove('methode-card-flash'), 1800);
        }
      }, 280);
    }
  }, [focusMethode]);
  return (
    <main>
      <PageHeader eyebrow={ctx.eyebrow} title={ctx.title} lead={ctx.lead} />

      {/* Methodes */}
      <section className="section">
        <div className="container">
          <div className="section-sub-head">
            <span className="eyebrow">Methodes</span>
            <h2 className="display section-sub-title">Waarmee ik werk.</h2>
          </div>
          <div className="methodes-grid">
            {c.methodes.map((m, i) => {
              const slug = ['nei', 'reflex', 'systemisch'][i] || String(i);
              return (
                <article key={i} id={'methode-' + slug} className="methode-card">
                  <span className="methode-num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="methode-body">
                    <h3 className="methode-title">{m.name}</h3>
                    <span className="methode-sub">{m.full}</span>
                    <p className="methode-text">{m.body}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trajecten */}
      <section className="section section-bg-alt">
        <div className="container">
          <div className="section-sub-head">
            <span className="eyebrow">Trajecten</span>
            <h2 className="display section-sub-title">Kies wat bij jullie past.</h2>
          </div>
          <div className="trajecten-grid">
            {c.trajecten.map((t, i) => (
              <article key={i} className="traject-card">
                <div className="traject-head">
                  <span className="traject-num">{t.num}</span>
                  <span className="traject-duration">{t.duration}</span>
                </div>
                <h3 className="traject-title">{t.title}</h3>
                <span className="traject-subtitle">{t.subtitle}</span>
                <div className="traject-price">
                  <span className="traject-price-main">{t.price}</span>
                  <span className="traject-price-alt">{t.priceAlt}</span>
                </div>
                <ul className="traject-items">
                  {t.items.map((item, j) => (
                    <li key={j}>
                      <span className="cred-dot">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="btn btn-ghost traject-cta" onClick={() => onNav('contact')}>
                  Dit wil ik
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8m-3-3 3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Werkwijze steps */}
      <section className="section">
        <div className="container">
          <div className="werkwijze-head">
            <span className="eyebrow">Werkwijze</span>
            <h2 className="display">Zo ziet een traject er meestal uit.</h2>
          </div>
          <div className="werkwijze-steps">
            {c.werkwijze.map((s, i) => (
              <div key={i} className="werkwijze-step">
                <div className="werkwijze-step-num">{String(i + 1).padStart(2, '0')}</div>
                <h4>{s.step}</h4>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What it delivers */}
      <section className="section section-bg-alt">
        <div className="container">
          <div className="outcomes-grid">
            <div className="outcomes-head">
              <span className="eyebrow">Wat levert het op</span>
              <h2 className="display">Van onrust naar vertrouwen.</h2>
            </div>
            <ul className="outcomes-list">
              {c.outcomes.map((o, i) => (
                <li key={i}>
                  <span className="outcomes-num">{String(i + 1).padStart(2, '0')}</span>
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

function VoorwiePage({ onNav, variant = "kind" }) {
  const c = CONTENT.voorwie;
  const variants = {
    kind: {
      eyebrow: "Doelgroep — Kind en gezin",
      title: c.title,
      lead: c.lead,
      intro: c.intro,
    },
    ondernemers: {
      eyebrow: "Doelgroep — Ondernemers",
      title: "Voor vrouwen en ondernemers met een innerlijke vraag.",
      lead: "Soms loopt je bedrijf, maar voel je vanbinnen iets vastzitten. Ik werk met vrouwen en ondernemers die voorbij de strategie willen kijken — naar wat er écht speelt onder de oppervlakte.",
      intro: "Voor wie wil ondernemen vanuit kracht, niet vanuit moeten.",
    },
    trainingen: {
      eyebrow: "Doelgroep — Trainingen & Workshops",
      title: "Voor scholen, teams en groepen.",
      lead: "Trainingen en workshops over kindgedrag, sensitiviteit, reflexen en systemisch werk. Op maat voor scholen, kinderopvang, oudergroepen en professionals.",
      intro: "Praktisch, ervaringsgericht en met diepgang.",
    },
  };
  const v = variants[variant];
  return (
    <main>
      <PageHeader eyebrow={v.eyebrow} title={v.title} lead={v.lead} />

      <section className="section">
        <div className="container">
          <div className="voorwie-intro">
            <p>{v.intro}</p>
            {variant === 'kind' && (
              <ul className="voorwie-intro-list">
                {c.signals.map((s, i) => (
                  <li key={i}>
                    <span className="voorwie-bullet">—</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {variant === 'kind' && (
            <div className="voorwie-grid">
              {c.groups.map((g, i) => (
                <article key={i} className="voorwie-card">
                  <div className="voorwie-card-head">
                    <span className="voorwie-card-age">{g.age}</span>
                    <h3 className="voorwie-card-label">{g.label}</h3>
                  </div>
                  <div className="voorwie-card-media">
                    <PhotoPlaceholder ratio="3/2" label={g.label.toLowerCase()} />
                  </div>
                  <ul className="voorwie-signals">
                    {g.signals.map((s, j) => (
                      <li key={j}>
                        <span className="voorwie-bullet">—</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          )}

          {variant === 'ondernemers' && (
            <div className="voorwie-grid">
              {[
                { label: "Vrouwelijk leiderschap", signals: ["Je voelt dat je vanuit kracht wilt leiden, niet vanuit moeten", "Je verlangt naar meer rust, intuïtie en focus", "Je wilt leren luisteren naar het systeem om je heen"] },
                { label: "Ondernemerschap", signals: ["Patronen die je business in de weg staan", "Plafonds die niet logisch te verklaren zijn", "Beslissingen vanuit afstemming i.p.v. angst"] },
                { label: "Persoonlijk groei", signals: ["Triggers in samenwerkingen of met klanten", "De vraag: wat houdt mij hier vast?", "Werken op het snijvlak van ratio en intuïtie"] },
              ].map((g, i) => (
                <article key={i} className="voorwie-card">
                  <div className="voorwie-card-head">
                    <span className="voorwie-card-age">{String(i+1).padStart(2,'0')}</span>
                    <h3 className="voorwie-card-label">{g.label}</h3>
                  </div>
                  <div className="voorwie-card-media">
                    <PhotoPlaceholder ratio="3/2" label={g.label.toLowerCase()} />
                  </div>
                  <ul className="voorwie-signals">
                    {g.signals.map((s, j) => (
                      <li key={j}><span className="voorwie-bullet">—</span><span>{s}</span></li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          )}

          {variant === 'trainingen' && (
            <div className="voorwie-grid">
              {[
                { label: "Voor scholen & kinderopvang", signals: ["Sensitiviteit & reflexen in de klas", "Werken met gevoelige kinderen", "Praktische tools voor leerkrachten"] },
                { label: "Voor oudergroepen", signals: ["Themabijeenkomsten op aanvraag", "Verbinding met je kind", "Communicatie & systemisch ouderschap"] },
                { label: "Voor teams & professionals", signals: ["Verdieping voor coaches en zorgverleners", "Intervisie en casuïstiek", "Inspiratie- en lezingen op maat"] },
              ].map((g, i) => (
                <article key={i} className="voorwie-card">
                  <div className="voorwie-card-head">
                    <span className="voorwie-card-age">{String(i+1).padStart(2,'0')}</span>
                    <h3 className="voorwie-card-label">{g.label}</h3>
                  </div>
                  <div className="voorwie-card-media">
                    <PhotoPlaceholder ratio="3/2" label={g.label.toLowerCase()} />
                  </div>
                  <ul className="voorwie-signals">
                    {g.signals.map((s, j) => (
                      <li key={j}><span className="voorwie-bullet">—</span><span>{s}</span></li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          )}

          {variant === 'kind' && (
            <>
              {/* Wat speelt er vaak — themes */}
              <div className="kind-themes">
                <div className="section-sub-head">
                  <span className="eyebrow">Wat speelt er vaak</span>
                  <h2 className="display section-sub-title">Onderwerpen waar ouders mee komen.</h2>
                </div>
                <div className="kind-themes-grid">
                  {[
                    { t: "Slapen & inslaapproblemen", d: "Niet kunnen loslaten, nachtmerries, terugkerende onrust in bed." },
                    { t: "Boze of explosieve buien", d: "Drift, woede die uit het niets lijkt te komen, agressie naar broertje of zusje." },
                    { t: "Faalangst & piekeren", d: "Buikpijn voor school, perfectionisme, zichzelf wegcijferen." },
                    { t: "Hooggevoeligheid & overprikkeling", d: "Te veel voelen van buitenaf, snel uitgeput, terugtrekken." },
                    { t: "Sociale moeite & pesten", d: "Geen aansluiting voelen, onveilig op school, niet voor zichzelf opkomen." },
                    { t: "Lichamelijke klachten", d: "Buikpijn, hoofdpijn of vermoeidheid zonder medische verklaring." },
                  ].map((th, i) => (
                    <div key={i} className="kind-theme-card">
                      <span className="kind-theme-num">{String(i + 1).padStart(2, '0')}</span>
                      <h3 className="kind-theme-title">{th.t}</h3>
                      <p className="kind-theme-desc">{th.d}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Wat een traject brengt */}
              <div className="kind-outcomes">
                <div className="kind-outcomes-grid">
                  <div>
                    <span className="eyebrow">Wat het brengt</span>
                    <h2 className="display section-sub-title">Voor je kind én voor jullie gezin.</h2>
                    <p className="kind-outcomes-lead">Geen quick fix, maar een traject waarin we de oorzaak aankijken in plaats van het gedrag bestrijden. Daardoor verandert er iets dat blijft.</p>
                  </div>
                  <ul className="kind-outcomes-list">
                    {[
                      "Meer rust in het lijf — minder overprikkeling, beter slapen",
                      "Emoties krijgen ruimte zonder dat ze het huis overnemen",
                      "Je kind voelt zich gezien, gehoord en serieus genomen",
                      "Jij voelt weer grond onder je voeten als ouder",
                      "Verbinding tussen jullie wordt zachter en sterker",
                      "Patronen die generaties oud zijn, mogen stoppen bij jullie",
                    ].map((o, i) => (
                      <li key={i}>
                        <span className="kind-outcome-mark">→</span>
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Hoe het gaat */}
              <div className="kind-flow">
                <div className="section-sub-head">
                  <span className="eyebrow">Zo werken we</span>
                  <h2 className="display section-sub-title">Wat kun je verwachten?</h2>
                </div>
                <ol className="kind-flow-steps">
                  {[
                    { t: "Vrijblijvend kennismaken", d: "We bellen 15 minuten — gratis, zonder verplichtingen. Je vertelt wat er speelt, ik vertel of mijn werk passend is." },
                    { t: "Intake met ouders", d: "Een gesprek van een uur waarin we de geschiedenis, de gevoeligheid en de vraag in beeld brengen. Je kind hoeft hier (nog) niet bij te zijn." },
                    { t: "Sessies met je kind", d: "Speels, lichaamsgericht en op maat. Soms aan tafel, soms op de mat, soms buiten. Reflexen, NEI, tekenen, beweging — wat past." },
                    { t: "Tussen-momenten met jou", d: "Want vaak ligt de grootste sleutel bij ouder. Korte oudermomenten of een 'En nu mama!' verdieping ernaast." },
                    { t: "Afronding & vervolg", d: "We sluiten af zodra je voelt: het draagt. Met handvatten voor thuis, en de deur staat altijd open." },
                  ].map((s, i) => (
                    <li key={i} className="kind-flow-step">
                      <span className="kind-flow-num">{String(i + 1).padStart(2, '0')}</span>
                      <div>
                        <h3 className="kind-flow-title">{s.t}</h3>
                        <p className="kind-flow-desc">{s.d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Pull quote */}
              <blockquote className="kind-quote">
                <p>&ldquo;Een kind dat moeilijk dóet, heeft het moeilijk. Wij helpen het kind én de ouder om weer ruimte te maken voor wat er onder ligt.&rdquo;</p>
                <cite>— Marijke Droog</cite>
              </blockquote>
            </>
          )}

          <div className="voorwie-note">
            <p>Herken je iets, maar twijfel je? Bel of mail gerust. Samen komen we er wel achter of mijn praktijk passend is.</p>
            <button className="btn btn-ghost" onClick={() => onNav('contact')}>
              Stel je vraag
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function TarievenPage({ onNav }) {
  const c = CONTENT.tarieven;
  return (
    <main>
      <PageHeader eyebrow={c.eyebrow} title={c.title} lead={c.lead} />

      <section className="section">
        <div className="container">
          <div className="tarieven-table">
            <div className="tarieven-row tarieven-head">
              <span>Dienst</span>
              <span>Duur</span>
              <span>Tarief</span>
              <span>Opmerking</span>
            </div>
            {c.items.map((item, i) => (
              <div key={i} className="tarieven-row">
                <span className="tarieven-label">{item.label}</span>
                <span className="tarieven-duration">{item.duration}</span>
                <span className="tarieven-price">{item.price}</span>
                <span className="tarieven-note">{item.note}</span>
              </div>
            ))}
          </div>

          <div className="tarieven-fineprint">
            <span className="eyebrow">Goed om te weten</span>
            <ul>
              {c.fineprint.map((f, i) => (
                <li key={i}>
                  <span className="cred-dot">✦</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-cta">
        <div className="container">
          <div className="cta-band">
            <div className="cta-band-copy">
              <h2 className="display">Niet zeker wat bij je past?</h2>
              <p>Laten we bellen — dan kijken we samen wat passend is.</p>
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

Object.assign(window, { OverPage, AanbodPage, VoorwiePage, TarievenPage });
