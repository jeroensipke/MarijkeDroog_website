// All site content — overgenomen van mijnkindenik.nl
const CONTENT = {
  brand: {
    name: "Marijke Droog",
    tagline: "Intuïtieve begeleiding voor wie voelt dat er meer is",
    instagram: "mijnkindenik",
    linkedin: "marijkedroog",
    facebook: "Mijnkindenik.coach",
    email: "marijke@mijnkindenik.nl",
    phone: "06 - 52 62 72 84",
    location: "Enschede & Almelo",
    address: "Penninkstraat 4, 7521 BT Enschede",
  },

  nav: [
    { key: "home", label: "Home" },
    { key: "voorwie", label: "Voor kind & gezin", children: [
      { key: "aanbod-reflex", label: "Reflexintegratie", desc: "Lichaamsgericht werk" },
      { key: "aanbod-nei", label: "NEI-therapie", desc: "Neuro Emotionele Integratie" },
      { key: "voorwie", label: "Coaching (kind/ouder)", desc: "(Kinder-) coaching & ouderbegeleiding" },
      { key: "aanbod-systemisch", label: "Opstellingen", desc: "Systemisch & familieopstellingen" },
    ]},
    { key: "voorwie-ondernemers", label: "Voor ondernemers", children: [
      { key: "voorwie-ondernemers", label: "Trajecten", desc: "Coaching voor vrouwen & ondernemers" },
    ]},
    { key: "voorwie-trainingen", label: "Voor groepen", children: [
      { key: "voorwie-trainingen", label: "Trainingen", desc: "Voor scholen, teams en professionals" },
      { key: "voorwie-trainingen", label: "Workshops (incl. biotensor)", desc: "Op aanvraag, op maat" },
      { key: "voorwie-trainingen", label: "Groepstrajecten", desc: "Verdieping in groepsverband" },
    ]},
    { key: "aanbod", label: "Werkwijze / Over mij", children: [
      { key: "aanbod", label: "Werkwijze", desc: "Methodes, trajecten & tarieven" },
      { key: "over", label: "Over mij", desc: "Marijke Droog" },
    ]},
    { key: "blog", label: "Blog" },
    { key: "contact", label: "Contact" },
  ],

  hero: {
    eyebrow: "Kindercoaching • Reflexintegratie • NEI therapie",
    quote: "Een kind dat moeilijk dóet, heeft het moeilijk.",
    quoteAuthor: "Eveline Ruiterberg",
    headline: "Voor gevoelige kinderen én hun bewuste ouders.",
    body: "Soms voel je dat er iets speelt bij je kind. Bij Mijn Kind en Ik kijk ik met een zachte blik naar wat er onder het gedrag ligt. Zodat jij en je kind weer rust, verbinding en vertrouwen ervaren — in huis én in jullie lijf.",
    location: "Praktijk in Enschede én Almelo. Ook online, van over de hele wereld.",
    cta: "Plan kennismaking",
    ctaSecondary: "Lees mijn werkwijze",
  },

  intro: {
    eyebrow: "Welkom",
    title: "Ik zie niet het 'probleemkind'. Ik zie een kind met een boodschap.",
    paragraphs: [
      "Je komt niet voor een quick fix. Je komt omdat je voelt dat er iets mag veranderen. Iets wat niet in woorden te vangen is. Iets wat verder gaat dan gedrag of het 'goed doen'.",
      "Misschien loopt je kind vast. Of voel je zelf onrust, triggers of terugkerende patronen. In mijn begeleiding werk ik op het snijvlak van hoofd, hart, lijf en energie. We gaan voorbij het verhaal — en komen bij de oorsprong.",
    ],
    signature: "Marijke",
  },

  pillars: [
    {
      num: "01",
      title: "Voor je kind",
      body: "Gevoelige, snel overprikkelde, angstige of boze kinderen. Kinderen die vastlopen in gedrag of emoties, thuis of op school.",
    },
    {
      num: "02",
      title: "Voor jou als moeder",
      body: "Jij hebt een sleutelrol. Vaak komt alles in beweging zodra jij iets aankijkt, heelt of loslaat. Oudercoaching voor bewuste moeders.",
    },
    {
      num: "03",
      title: "Voor jullie samen",
      body: "Het Moeder-Kind Traject. Wat je kind laat zien, raakt vaak ook iets in jou. Samen groeien en helen.",
    },
  ],

  quotes: [
    { text: "Don't tell someone to get over it, help them get through it.", author: "Sue Fitzmaurice" },
    { text: "There is no way to be a perfect mother, but a million ways to be a good one.", author: "Jim Churchill" },
    { text: "Give a child love, laughter and peace.", author: "Nelson Mandela" },
    { text: "Het meervoud van lef is leven.", author: "" },
    { text: "Een kind dat moeilijk dóet, heeft het moeilijk.", author: "Eveline Ruiterberg" },
  ],

  over: {
    eyebrow: "Over mij",
    title: "Dit ben ik.",
    lead: "Marijke Droog — kindercoach, moeder, en oprechte luisteraar.",
    body: [
      "In mijn praktijk Mijn Kind en Ik in Enschede en Almelo begeleid ik gevoelige kinderen en hun bewuste ouders. Mijn werk is een samenspel van kindercoaching, reflexintegratie, NEI-therapie en systemisch en energetisch werk.",
      "Ik geloof dat kinderen nooit 'zomaar' gedrag laten zien. Achter boosheid, onrust of angst zit altijd een boodschap — soms van het kind zelf, soms uit het familiesysteem, soms uit het lijf. Mijn werk is om die boodschap zichtbaar te maken.",
      "Ik werk zacht, intuïtief en doelgericht. Zonder oordeel, met veel ruimte voor wie jullie zijn. En ik werk met ouders — want vaak is dat waar het grootste werk ligt.",
    ],
    credentials: [
      "Kindercoach (registerlid)",
      "NEI-therapeut — Neuro Emotionele Integratie",
      "Reflexintegratie (MNRI/RMTi)",
      "Systemisch & energetisch werk",
      "Workshop docent 'Flow met je biotensor'",
    ],
  },

  aanbod: {
    eyebrow: "Werkwijze & aanbod",
    title: "Mijn manier van werken.",
    lead: "Mijn sessies zijn zacht, intuïtief, doelgericht en afgestemd. Welke methodes ik inzet, bepalen we samen op basis van jullie vraag.",

    // Core methodes
    methodes: [
      {
        name: "NEI-therapie",
        full: "Neuro Emotionele Integratie",
        body: "Een methode die snel en zacht emotionele ladingen opspoort en loslaat, zonder dat alles uitgesproken hoeft te worden. NEI helpt bij lichamelijke klachten, angsten, gedragspatronen, onrust of belemmerende overtuigingen. Voor kinderen én volwassenen.",
      },
      {
        name: "Reflexintegratie",
        full: "Lichaamsgericht werk",
        body: "Sommige primaire reflexen blijven actief in het lichaam, waardoor een kind voortdurend alert, gespannen of uit balans is. Via eenvoudige (lichaamsgerichte) oefeningen werken we aan rust en regulatie waardoor gedrag, motoriek en concentratie verbeteren.",
      },
      {
        name: "Systemisch & energetisch werk",
        full: "Voorbij het verhaal",
        body: "Gedrag en emoties staan nooit op zichzelf. We kijken naar wat je (onbewust) draagt uit je familiesysteem of van je kind. We maken zichtbaar wat gezien wil worden en brengen terug wat niet (meer) van jou is.",
      },
      {
        name: "(Oude-r-)coaching",
        full: "Voor moeder én kind",
        body: "Soms is het helpend om alleen met je kind te werken, soms juist met jou als moeder. Vaak zie ik hoe alles in beweging komt als jij als moeder iets aankijkt, heelt of loslaat.",
      },
    ],

    // Trajecten (pricing)
    trajecten: [
      {
        num: "01",
        title: "Coach-traject Basis",
        subtitle: "Voor kinderen",
        duration: "2 à 3 maanden",
        price: "€ 495,-",
        priceAlt: "Gespreid: 2 × € 255,-",
        items: [
          "Intake (30 min) online n.a.v. ingevulde vragenlijst",
          "2 × NEI consult kind (60–90 min)",
          "2 × sessies coaching × reflexintegratie kind (60 min)",
          "Eindgesprek",
          "(Energetische) coaching voor ouder + kind",
          "Inzicht in geboorte- en/of systemische patronen",
          "Lichaamsgerichte reflexintegratie oefeningen voor thuis",
        ],
      },
      {
        num: "02",
        title: "'En nu mama!' Traject",
        subtitle: "Voor moeders",
        duration: "6 maanden",
        price: "€ 849,-",
        priceAlt: "Gespreid: 3 × € 295,-",
        items: [
          "Maandelijks een sessie van min. 90 min",
          "Iedere sessie start met een energetische bodyscan",
          "Tussentijds telefonische update",
          "NEI: energetische blokkades opsporen en opheffen",
          "Systemische opstellingen",
          "Inzichten, opvoedtips, coaching",
          "Visualisaties, bewustwording, ademhalingsoefeningen",
        ],
      },
      {
        num: "03",
        title: "'Moeder & Kind' Traject",
        subtitle: "Samen groeien en helen",
        duration: "Combinatie-traject",
        price: "€ 849,-",
        priceAlt: "Combinatie 'Kind Basis' + 'En Nu Mama'",
        items: [
          "Wat je kind laat zien, raakt ook iets in jou",
          "Samen bewegen, samen helen",
          "Op maat voor moeder én kind",
          "Maximaal resultaat, gunstig tarief",
        ],
      },
    ],

    werkwijze: [
      { step: "Kennismaken", body: "Vrijblijvend kennismakingsgesprek via telefoon of Zoom. 15 minuten, kosteloos." },
      { step: "Intake", body: "Uitgebreide vragenlijst en online intakegesprek. We bepalen samen de richting." },
      { step: "Traject", body: "Sessies in een ritme dat past. Live in Enschede/Almelo of online — van waar dan ook." },
      { step: "Afronden", body: "Eindgesprek. Soms is er daarna een vervolg, soms is het klaar." },
    ],

    // What it delivers
    outcomes: [
      "Je kind wordt rustiger, weerbaarder en meer zichzelf",
      "Je leert als moeder voelen wat van jou is en wat niet",
      "Jullie komen uit de kramp van 'fixen' en in de flow van vertrouwen",
      "Je doorbreekt oude patronen, ook die jij hebt meegekregen",
      "Je leert luisteren naar je onderbewuste, je lijf en je intuïtie",
    ],
  },

  voorwie: {
    eyebrow: "Doelgroep",
    title: "Voor wie voelt: het mag anders.",
    lead: "Voor mijn kind, voor mezelf, of voor ons samen. Je bent welkom met alles wat er is.",
    intro: "Je bent van harte welkom als je één of meer van deze dingen herkent:",
    signals: [
      "Je kind is gevoelig, snel overprikkeld of angstig/boos/verdrietig/onzeker",
      "Je kind loopt vast in gedrag of emoties, thuis of op school",
      "Jij als ouder voelt: ik wil het anders, maar hoe?",
      "Je staat open voor coaching, NEI-therapie, reflexintegratie of energetisch/systemisch werk",
    ],
    groups: [
      {
        label: "Gevoelige kinderen",
        age: "Alle leeftijden",
        signals: [
          "Snel overprikkeld of angstig",
          "Boos, verdrietig of onzeker zonder duidelijke aanleiding",
          "Moeite met concentratie of slapen",
          "Hooggevoelig, veel voelen van buitenaf",
        ],
      },
      {
        label: "Kinderen die vastlopen",
        age: "Thuis of op school",
        signals: [
          "Faalangst, piekeren, lichamelijke klachten zonder oorzaak",
          "Moeite met vriendschappen of pesten",
          "Concentratieproblemen, motorische onrust",
          "Probleemgedrag dat zich blijft herhalen",
        ],
      },
      {
        label: "Bewuste moeders",
        age: "'En nu mama!'",
        signals: [
          "Je voelt: wat mijn kind laat zien, raakt ook iets in mij",
          "Terugkerende patronen en triggers",
          "Verlangen om uit de kramp van 'fixen' te komen",
          "Klaar om zelf stappen te zetten",
        ],
      },
      {
        label: "Moeder & kind samen",
        age: "Combinatie-traject",
        signals: [
          "Jullie zitten allebei in een proces",
          "Verbinding hersteld willen zien",
          "Samen groeien, samen helen",
          "Intuïtief aanvoelen dat het samen moet",
        ],
      },
    ],
  },

  tarieven: {
    eyebrow: "Tarieven",
    title: "Eerlijk en transparant.",
    lead: "Facturen worden verzonden na de eerste afspraak. Liever in termijnen? Geen probleem — vraag gerust naar de opties.",
    items: [
      { label: "Kennismakingsgesprek", duration: "± 15 min", price: "Kosteloos", note: "Telefonisch of via Zoom" },
      { label: "Coach-traject Basis (kind)", duration: "2–3 maanden", price: "€ 495", note: "Gespreid: 2 × € 255" },
      { label: "'En nu mama!' Traject", duration: "6 maanden", price: "€ 849", note: "Gespreid: 3 × € 295" },
      { label: "'Moeder & Kind' Traject", duration: "Combinatie", price: "€ 849", note: "Kind Basis + En Nu Mama" },
      { label: "Sessie (kinder-)coaching", duration: "60 min", price: "€ 125", note: "Losse sessie" },
      { label: "NEI-consult (los)", duration: "60–90 min", price: "€ 125", note: "Losse sessie" },
      { label: "NEI-traject", duration: "3 consulten", price: "€ 333", note: "60–90 min per consult" },
      { label: "Wandelcoaching", duration: "60–90 min", price: "€ 69,95", note: "In de buitenlucht" },
    ],
    fineprint: [
      "Genoemde bedragen zijn inclusief BTW.",
      "Facturen worden verzonden na de eerste afspraak.",
      "In termijnen betalen is altijd bespreekbaar.",
    ],
  },

  blog: {
    eyebrow: "Blog",
    title: "Inzichten uit de praktijk.",
    lead: "Over kinderen met een boodschap, over moeders die helen, over de weg van onrust naar vertrouwen.",
    posts: [
      {
        date: "28 juli 2025",
        readtime: "6 min",
        category: "Moederschap",
        title: "De Oervrouw in mij.",
        excerpt: "Speciaal voor moeders die het gevoel hebben dat ze in de loop der jaren de verbinding met hun oervrouw zijn kwijtgeraakt. Over terugkeren naar wat al in je zit.",
      },
      {
        date: "28 juli 2025",
        readtime: "7 min",
        category: "Moeder & Kind",
        title: "Moeder-Kind Traject: samen groeien en helen.",
        excerpt: "Steeds vaker ontmoet ik zelfbewuste moeders die intuïtief aanvoelen: 'Wat mijn kind laat zien, raakt ook iets in mij.' Over dat samen doen.",
      },
      {
        date: "28 januari 2025",
        readtime: "5 min",
        category: "Biotensor",
        title: "Flow Mama Traject: vind balans en herontdek je kracht.",
        excerpt: "Ben jij klaar om écht in je kracht te staan met behulp van jouw biotensor? Als moeder, als vrouw, als mens?",
      },
      {
        date: "12 december 2024",
        readtime: "4 min",
        category: "NEI therapie",
        title: "Wat NEI met je kind doet (en met jou).",
        excerpt: "Een methode die snel en zacht emotionele ladingen opspoort — zonder dat alles uitgesproken hoeft te worden. Hoe dat werkt, in mensentaal.",
      },
      {
        date: "10 november 2024",
        readtime: "6 min",
        category: "Reflexen",
        title: "Waarom rust begint in het lijf.",
        excerpt: "Als primaire reflexen actief blijven, is een kind constant alert. Over het verschil tussen een kind opvoeden en een kind reguleren.",
      },
      {
        date: "22 oktober 2024",
        readtime: "5 min",
        category: "Systemisch",
        title: "Je kind draagt iets dat niet van hem is.",
        excerpt: "Over loyaliteit, familiesystemen, en waarom kinderen soms dingen oppakken die bij een vorige generatie horen.",
      },
    ],
  },

  testimonials: [
    {
      body: "Dankzij de hulp en methodes van Marijke zit onze zoon weer super in zijn vel. Meer zelfvertrouwen en kan beter met zijn 'woede' omgaan. Hij voelde zich vrijwel direct op zijn gemak bij haar en wij als ouders trouwens ook.",
      author: "Ursula",
      context: "Moeder van S. (11 jr)",
    },
    {
      body: "Een simpele hulpvraag: minder piekeren en beter slapen. Nu heeft hij vooral geleerd om zich echt uit te spreken. Confronterende en vooral mooie gesprekken. Boven verwachting! Marijke is een betrouwbaar en fijn persoon. Met haar kunde en ook humor is mijn zoontje weer blij!",
      author: "Marije",
      context: "Moeder van L. (8 jr)",
    },
    {
      body: "Super blij met ons telefoongesprek. Hierin kon jij al zo duidelijk aan mij dingen vertellen over mijn zoontje die heel logisch klinken. Wat een pech dat we zover bij elkaar vandaan wonen. Bedankt voor je tips en hulp.",
      author: "Kelly",
      context: "Moeder van L. (8 jr)",
    },
    {
      body: "Duidelijke en eerlijke gesprekken! Met een paar mooie eye-openers, zodat we onze dochter nog beter kunnen helpen in haar zorgen!",
      author: "Tineke",
      context: "Moeder van L. (11 jr)",
    },
    {
      body: "Onze zoon had meteen een goeie klik met Marijke en wij ook. Ze is heel rustig, luistert goed, ze weet goed waar ze het over heeft en bij alle vragen die ze stelt krijg je het gevoel: ja dit klopt.",
      author: "Kim",
      context: "Moeder van M. (8 jr)",
    },
    {
      body: "Marijke weet feilloos haar vinger op precies de juiste plekken te leggen. Heldere en duidelijke handvatten waarmee je als ouder en als kind verder kan.",
      author: "Susan",
      context: "Moeder van B. (9 jr)",
    },
  ],

  faq: {
    eyebrow: "Veelgestelde vragen",
    title: "Goed om te weten.",
    items: [
      {
        q: "Waar vinden sessies plaats?",
        a: "Ik heb een praktijk in Enschede (Penninkstraat 4) en een praktijk in Almelo. Ook werk ik online — van over de hele wereld. Wandelcoaching doen we in de buitenlucht, op locatie rond Enschede.",
      },
      {
        q: "Hoe weet ik of we een klik hebben?",
        a: "Het kennismakingsgesprek van ongeveer 15 minuten is er precies voor dit. Telefonisch of via Zoom, kosteloos en vrijblijvend. Als het niet klikt, denk ik graag mee over een passende collega.",
      },
      {
        q: "Wat is NEI-therapie precies?",
        a: "NEI staat voor Neuro Emotionele Integratie. Het is een methode die snel en zacht emotionele ladingen opspoort en loslaat — zonder dat alles uitgesproken hoeft te worden. Het werkt bij lichamelijke klachten, angsten, gedragspatronen en belemmerende overtuigingen. Voor kinderen én volwassenen.",
      },
      {
        q: "Wat is reflexintegratie?",
        a: "Sommige primaire reflexen blijven actief in het lichaam, waardoor een kind voortdurend alert of gespannen is. Via eenvoudige oefeningen werken we aan rust en regulatie. Dit verbetert gedrag, motoriek en concentratie.",
      },
      {
        q: "Moet mijn kind meekomen naar het eerste gesprek?",
        a: "Meestal niet. Ik spreek liefst eerst alleen met de ouders — dat geeft rust en ruimte om open te praten. Daarna bespreken we hoe we je kind betrekken.",
      },
      {
        q: "Worden sessies vergoed door de zorgverzekering?",
        a: "Mijn praktijk valt niet onder de basisverzekering. Sommige aanvullende pakketten vergoeden een deel onder 'alternatieve zorg' of 'psychosociale zorg'. Check je polis of bel je verzekeraar.",
      },
      {
        q: "Kan ik in termijnen betalen?",
        a: "Ja, trajecten kun je in termijnen voldoen. Het Coach-traject Basis in 2 termijnen, 'En nu mama!' in 3 termijnen. Vraag naar de opties.",
      },
      {
        q: "Werk je ook online?",
        a: "Ja, met moeders en oudere kinderen werk ik regelmatig online. Met jongere kinderen werk ik het liefst live — omdat beweging, spel en het lijf belangrijk zijn in mijn werk.",
      },
      {
        q: "Wat is de workshop 'Flow met je biotensor'?",
        a: "Een 1-op-1 workshop waarin je leert werken met de biotensor voor thuis. Een waardevolle verdieping die je onder andere helpt om zelf energetische blokkades op te sporen bij jezelf of je kind.",
      },
    ],
  },

  contact: {
    eyebrow: "Contact",
    title: "Klaar voor meer rust, begrip en verbinding?",
    lead: "Plan een vrijblijvend kennismakingsgesprek. Dan kijken we samen wat past bij jou en je kind.",
    responseTime: "Ik reageer meestal binnen twee werkdagen — soms eerder.",
  },
};

Object.assign(window, { CONTENT });
