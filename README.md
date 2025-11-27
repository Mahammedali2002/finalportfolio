# Portfolio – Next.js Edition

Een modern, animatie-gericht Next.js-portfolio ontworpen om mijn webdesign-, branding- en ontwikkelwerk te presenteren.
De applicatie bevat vloeiende animaties, dynamische case-pagina’s, een WebGL-hero-effect en een volledig responsive ontwerp.

##  Overzicht
Deze portfolio toont echte klantprojecten op een rustige, moderne en interactieve manier.

- Homepage met animaties, 3D-geïnspireerd shader-effect en projectslider
- Uitgebreide case-studies via dynamische routing
- Volledige MAHWEB-branding met kleuren **#FAF6EB** en **#E9724C**

##  Belangrijke kenmerken
- Hero met Framer Motion-animaties
- WebGL shader via OGL (Balatro component)
- Projectslider met Swiper.js
- Dynamische casepagina’s via de Next.js App Router
- Volledig responsive ontwerp

## Installatie
Zorg dat je **Node.js 18+** hebt geïnstalleerd.

```bash
git clone <repository-url>
cd portfolio
npm install
```

##  Interactiesysteem

### Muisinteractie
- Hover-animaties
- Shader reageert op cursorbeweging
- Swiper-slider is sleepbaar en scrollbaar

### Dynamische routing
/ — Homepagina  
/portfolio — Overzicht van projecten  
/portfolio/[slug] — Dynamische casepagina  
/portfolio/barber-mardini — Uitgewerkte case study  

##  Problemen oplossen
- Animaties werken niet: controleer of WebGL aan staat
- Slider werkt niet: ververs de pagina
- Shader onzichtbaar: andere browser of battery-saver uit

##  Applicatie starten

### Ontwikkelmodus
```bash
npm run dev
```
App draait op: http://localhost:3000

### Productie
```bash
npm run build
npm start
```

##  Projectstructuur
- src/app — pagina’s & layouts
- components — Navbar, Balatro WebGL-animatie
- public — projectafbeeldingen
- tailwind.config.ts — MAHWEB kleuren
- package.json — scripts & dependencies

##  Afhankelijkheden
next, react, react-dom, tailwindcss, framer-motion, swiper, ogl, eslint

