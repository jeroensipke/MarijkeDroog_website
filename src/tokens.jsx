// Design tokens — Editorial direction for Marijke Droog
// Based on official brand palette from mijnkindenik.nl: soft sage-teal greens + dark grey

const TOKENS = {
  editorial: {
    name: "Editorial",
    tagline: "Rustig, magazine-stijl, veel lucht",
    bg: "#F6FAF3",
    bgAlt: "#E8F3E0",
    surface: "#FFFFFF",
    ink: "#3C3C3C",
    inkSoft: "#5A5A5A",
    inkMuted: "#8C8C8C",
    rule: "#D1E6B5",
    primary: "#6FAC9B",
    primarySoft: "#9DD4B7",
    accent: "#6FAC9B",
    accentSoft: "#CFE8CA",
    fontDisplay: "'Cormorant Garamond', 'Times New Roman', serif",
    fontBody: "'Mulish', -apple-system, BlinkMacSystemFont, sans-serif",
    fontMono: "'JetBrains Mono', ui-monospace, monospace",
    displayWeight: 400,
    displayTracking: "-0.01em",
    bodyWeight: 400,
    radius: "2px",
    radiusLg: "4px",
    maxWidth: "1240px",
    gutter: "clamp(1.25rem, 3vw, 2.5rem)",
  },
};

function applyTheme(themeKey) {
  const t = TOKENS[themeKey] || TOKENS.editorial;
  const r = document.documentElement;
  r.style.setProperty('--bg', t.bg);
  r.style.setProperty('--bg-alt', t.bgAlt);
  r.style.setProperty('--surface', t.surface);
  r.style.setProperty('--ink', t.ink);
  r.style.setProperty('--ink-soft', t.inkSoft);
  r.style.setProperty('--ink-muted', t.inkMuted);
  r.style.setProperty('--rule', t.rule);
  r.style.setProperty('--primary', t.primary);
  r.style.setProperty('--primary-soft', t.primarySoft);
  r.style.setProperty('--accent', t.accent);
  r.style.setProperty('--accent-soft', t.accentSoft);
  r.style.setProperty('--font-display', t.fontDisplay);
  r.style.setProperty('--font-body', t.fontBody);
  r.style.setProperty('--font-mono', t.fontMono);
  r.style.setProperty('--display-weight', t.displayWeight);
  r.style.setProperty('--display-tracking', t.displayTracking);
  r.style.setProperty('--body-weight', t.bodyWeight);
  r.style.setProperty('--radius', t.radius);
  r.style.setProperty('--radius-lg', t.radiusLg);
  r.style.setProperty('--max-width', t.maxWidth);
  r.style.setProperty('--gutter', t.gutter);
  r.setAttribute('data-theme', themeKey);
}

Object.assign(window, { TOKENS, applyTheme });
