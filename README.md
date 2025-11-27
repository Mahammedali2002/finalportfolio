MAHWEB Portfolio – Next.js Edition

Een modern en animatie-gericht Next.js-portfolio, ontworpen om mijn webdesign-, branding- en ontwikkelwerk voor MAHWEB professioneel te presenteren.
De applicatie bevat vloeiende animaties, case-pagina’s, een WebGL-hero-effect en een volledig responsive ontwerp.

Overzicht

Deze portfolio is gebouwd om mijn echte klantprojecten op een rustige, moderne en interactieve manier te tonen.
De homepage bevat animatie-elementen, een 3D-geïnspireerd shader-effect en een projectslider.
Bezoekers kunnen uitgebreide case-studies bekijken via dynamische routing, met onderdelen zoals uitdaging, oplossing en resultaat.

Belangrijke kenmerken:

Hero met Framer Motion animaties

WebGL shader via OGL (Balatro component)

Projectslider met Swiper.js

Dynamische casepagina’s via de Next.js App Router

MAHWEB-branding met kleuren #FAF6EB en #E9724C

Installatie

Zorg dat je Node.js 18+ hebt geïnstalleerd.

Clone het project en installeer de afhankelijkheden:

git clone <repository-url>
cd portfolio
npm install

Interactiesysteem

Dit portfolio ondersteunt meerdere interactievormen binnen de UI.

Navigatie via muis

Hover-animaties

Shader reageert op cursorbeweging

Swiper-slider is sleepbaar en scrollbaar

Navigatie via toetsenbord

Tab – Navigeren door links

Enter – Selecteren

Arrow Keys – Slider bewegen

Dynamische routing

/ – Homepagina

/portfolio – Overzicht van projecten

/portfolio/[slug] – Dynamische casepagina

/portfolio/barber-mardini – Uitgewerkte case study

Problemen oplossen bij interactie

Animaties werken niet: controleer of WebGL aan staat

Slider werkt niet: ververst de pagina

Shader onzichtbaar: probeer een andere browser of zet battery-saver uit

Applicatie starten
Ontwikkelmodus
npm run dev


De applicatie is bereikbaar op:

http://localhost:3000

Productiebuild
npm run build
npm start


Gehost via Vercel, inclusief automatische deployments vanaf GitHub.

Projectstructuur

De globale structuur van het project:

De map src/app bevat alle pagina’s en layouts:

De root-layout met fonts, Tailwind en de Navbar

De homepage met animaties, WebGL hero en projectslider

De portfolio-map met een overzicht van projecten

Een slug-map voor dynamische projectdetailpagina’s

Een aparte Barber-Mardini map voor de volledige case

De map components bevat o.a.:

De Navbar

De Balatro WebGL-animatie

De map public bevat projectafbeeldingen

tailwind.config.ts bevat de MAHWEB-kleuren en configuratie

package.json bevat scripts en dependencies

Functionaliteiten
Hero-sectie

Shader-animatie met OGL

Roterende cirkelanimaties

Fade-in headings en tekst

Kleuren en typografie in MAHWEB-stijl

Projectslider

Coverflow-effect

Automatisch afspelen

Touch- en muisbediening

Volledig responsive

Casepagina’s

Dynamische routing met de App Router

Uitdaging → Oplossing → Resultaten structuur

Extra animaties per case

Volledig uitgewerkte Barber Mardini case

Responsive ontwerp

Mobile-first

Flexbox & Grid

Schaalbare componenten

Consistente spacing en typografie

Belangrijke modules
Balatro WebGL-shader

Gebouwd met OGL

Shader reageert op tijd, beweging en muis

Unieke studio-achtige visuele stijl

Creëert een premium hero-ervaring

Navbar

Detecteert huidige route via usePathname()

Minimalistisch en overzichtelijk ontwerp

Rustige UX met brandingkleuren

Portfolio routing

Slug-gebaseerde dynamic routing

Schone URLs

Eenvoudig uitbreidbaar met nieuwe projecten

Afhankelijkheden

next

react

react-dom

tailwindcss

framer-motion

swiper

ogl

eslint
