MAHWEB Portfolio – Next.js Edition

Een modern en animatie-gericht Next.js-portfolio, ontworpen om mijn webdesign-, branding- en ontwikkelwerk voor MAHWEB professioneel te presenteren.
De applicatie bevat vloeiende animaties, case-pagina’s, een WebGL-hero-effect en een volledig responsive ontwerp.

Overzicht

Deze portfolio is gebouwd om mijn echte klantprojecten op een rustige, moderne en interactieve manier te tonen.
De homepage bevat animatie-elementen, een 3D-geïnspireerd shader-effect en een projectslider.
Bezoekers kunnen uitgebreide case-studies bekijken via dynamische routing, met onderdelen zoals uitdaging, oplossing en resultaat.

Belangrijke kenmerken zijn onder andere:

Hero met Framer Motion animaties

WebGL shader via OGL (Balatro component)

Projectslider met Swiper.js

Dynamische casepagina’s via de Next.js App Router

MAHWEB-branding met kleuren #FAF6EB en #E9724C

Installatie

Zorg dat je Node.js 18+ hebt geïnstalleerd.

Clone het project en installeer alle afhankelijkheden:

git clone <repository-url>
cd portfolio
npm install

Interactiesysteem

Het portfolio gebruikt geen game-controller, maar ondersteunt meerdere interactievormen.

Navigatie via muis

Hover-animaties

WebGL shader reageert op cursorbeweging

Swiper is scroll- en sleepbaar

Navigatie via toetsenbord

Tab → navigeren

Enter → selecteren

Pijltjestoetsen → slider bewegen

Dynamische routing

Homepagina

Portfolio-overzicht

Projectpagina’s via dynamische slugs

Uitgebreide Barber Mardini case

Problemen oplossen bij interactie

Animaties werken niet: WebGL moet aan staan

Slider reageert niet: pagina verversen

Shader toont niet: controleer browser-instellingen

Applicatie starten
Ontwikkelmodus
npm run dev


Website draait op:

http://localhost:3000

Productiebuild
npm run build
npm start


Het project is gehost via Vercel, inclusief automatische deploys op elke GitHub-push.

Projectstructuur

Hieronder staat de globale structuur van het project in normale tekstvorm:

De map src/app bevat alle pagina’s en layouts

De root-layout met fonts, styling en de Navbar

De homepage met animaties, WebGL en projectslider

De portfolio-map met het overzicht van projecten

Een slug-map voor dynamische projectpagina’s

Een aparte Barber-Mardini map voor de uitgewerkte case

De map components bevat onder andere:

De Navbar

De Balatro WebGL-animatie

De map public bevat de projectafbeeldingen

tailwind.config.ts bevat kleur- en stijlconfiguratie

package.json bevat scripts en dependencies

Functionaliteiten
Hero-sectie

Shader-animatie met OGL

Roterende cirkelanimaties met Framer Motion

Fade-in headings en paragrafen

MAHWEB-branding in kleur en typografie

Projectslider

Coverflow-effect

Automatisch afspelen

Touch- en muisbesturing

Responsieve schaal

Casepagina’s

Dynamische routing via de App Router

Uitdaging, oplossing en resultaat per project

Extra animaties en visuele effecten

Barber Mardini case volledig uitgewerkt

Responsief ontwerp

Mobile-first design

Flex en grid

Schaalbare componenten

Belangrijke modules
Balatro WebGL-shader

Gebouwd met OGL

Shader reageert op tijd, beweging en cursor

Unieke studio-achtige dieptewerking

Geeft een premium uitstraling aan de hero-sectie

Navbar

Detecteert huidige route

Minimalistisch, strak ontwerp

Vriendelijke gebruikerservaring

Portfolio routing

Slug-gebaseerd systeem

Schone en SEO-vriendelijke URLs

Makkelijk uitbreidbaar

Afhankelijkheden

next

react & react-dom

tailwindcss

framer-motion

swiper

ogl

eslint
