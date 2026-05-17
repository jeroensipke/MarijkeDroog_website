# Marijke Droog — Website

Bronbestanden voor de website van praktijk Marijke Droog (Mijn Kind en Ik).

## Structuur

```
.
├── index.html          → entry point — laadt React + Babel + alle JSX modules
├── assets/
│   └── logo.png        → praktijk-logo (Mijn Kind en Ik)
└── src/
    ├── tokens.jsx      → design tokens (kleuren, typografie, spacing)
    ├── content.jsx     → alle teksten + navigatiestructuur
    ├── ui.jsx          → shared components (Logo, Nav, Footer, PhotoPlaceholder, PageHeader)
    ├── pages-home.jsx  → homepage (keuzevork + blog preview + CTA)
    ├── pages-core.jsx  → Over mij, Werkwijze, Doelgroep, Tarieven
    ├── pages-extra.jsx → Blog, FAQ, Contact
    ├── app.jsx         → router + App shell
    └── styles.css      → volledige stylesheet (editorial theme)
```

## Lokaal draaien

Het is statische HTML die in de browser wordt geïnterpreteerd (React + Babel via CDN).
Open `index.html` *niet* direct via `file://` — gebruik een lokale server:

```bash
# Python 3
python -m http.server 8080

# of Node
npx serve .
```

Daarna: <http://localhost:8080>

## Aanpassen

- **Teksten:** alle copy staat in `src/content.jsx`
- **Kleuren / typografie:** `src/tokens.jsx` + `src/styles.css`
- **Navigatie:** `nav` array in `src/content.jsx`
- **Pagina's toevoegen:** een case in de `switch` van `src/app.jsx`

## Standalone export

In de root van het project staat ook `ontwerp.html` — dat is dezelfde website maar
gebundeld tot één bestand (offline werkend, alles inline).

## Brand

- **Praktijk:** Mijn Kind en Ik
- **Tagline:** Intuïtieve begeleiding — voor wie voelt dat er meer is
- **Locatie:** Enschede, Almelo & online
- **Kleuren:** sage-teal `#6FAC9B`, soft greens `#9DD4B7` / `#D1E6B5` / `#CFE8CA`, ink `#3C3C3C`
- **Type:** Cormorant Garamond (display) + Mulish (body) + JetBrains Mono (meta)
