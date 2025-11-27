MAHWEB Portfolio 
Een modern en animatie-gericht Next.js-portfolio, ontworpen om mijn webdesign-, branding- en ontwikkelwerk voor MAHWEB professioneel te presenteren.
De applicatie bevat vloeiende animaties, case-pagina’s, een WebGL-hero-effect en een volledig responsive ontwerp.
________________________________________
Overzicht
Deze portfolio is gebouwd om mijn echte klantprojecten op een rustige, moderne en interactieve manier te tonen.
De homepage bevat animatie-elementen, een 3D-geïnspireerd shader-effect en een project-slider.
Bezoekers kunnen uitgebreide case-studies bekijken via dynamische routing, waarbij iedere case eigen onderdelen heeft zoals uitdaging, oplossing en resultaat.
Belangrijke kenmerken:
•	Geanimeerde hero-sectie met Framer Motion
•	WebGL-shader animatie via OGL (Balatro component)
•	Projectslider met Swiper.js
•	Dynamische case-pagina’s via de Next.js App Router
•	Modern MAHWEB-design met de kleuren
o	#FAF6EB (beige)
o	#E9724C (warm oranje)
________________________________________
Installatie
Zorg dat je Node.js (18+) hebt geïnstalleerd.
Clone de repository en installeer de afhankelijkheden:
git clone <repository-url>
cd portfolio
npm install
________________________________________
Interactiesysteem
Dit portfolio gebruikt geen game-controllers, maar ondersteunt diverse interactieve invoervormen binnen de UI.
Navigatie-input
Muis / Touchpad
•	Hover-animaties op projectkaarten
•	Shader-animatie reageert op muisbeweging
•	Swiper-slider is sleepbaar
Toetsenbord
•	Tab — Navigeren door links
•	Enter — Selectie activeren
•	Arrow Keys — Swiper focus bewegen
Dynamische Routing (Next.js)
•	/ — Home
•	/portfolio — Projectoverzicht
•	/portfolio/[slug] — Dynamische case-pagina
•	/portfolio/barber-mardini — Uitgewerkte custom case
Probleemoplossing bij interactie
•	Animaties werken niet:
Controleer of JavaScript aan staat en WebGL wordt ondersteund.
•	Slider reageert niet:
Reload — komt soms door HMR in dev mode.
•	Shader toont niet:
Sommige browsers blokkeren WebGL in batterijbesparende modus.
________________________________________
Applicatie starten
Ontwikkelmodus (standaard)
Start de development server:
npm run dev
Je kunt de app bekijken op:
http://localhost:3000
Functies in ontwikkelmodus:
•	Live herladen
•	Directe updates bij wijzigingen
•	Hot-reloading voor animaties, routing en CSS
________________________________________
Productiemodus
Maak een productiebuild:
npm run build
npm start
De build gebruikt:
•	server-side rendering
•	geoptimaliseerde bundels
•	automatische minificatie
•	route-optimalisatie
Gehost via Vercel, met automatische deployments op elke GitHub-push.
________________________________________
Projectstructuur
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx               # Root layout met fonts, branding en Navbar
│   │   ├── page.tsx                 # Homepage met hero + projectslider
│   │   ├── components/
│   │   │   ├── Navbar.tsx           # Navigatie met active-state
│   │   │   └── Balatro.tsx          # WebGL shader-animatie (OGL)
│   │   ├── portfolio/
│   │   │   ├── page.tsx             # Overzicht van alle projecten
│   │   │   ├── [slug]/page.tsx      # Dynamische route voor case-pagina's
│   │   │   └── barber-mardini/
│   │   │       └── page.tsx         # Volledige uitgewerkte Barber Mardini case
│   ├── public/                      # Afbeeldingen en assets
│   │   ├── barbermardinilap.png
│   │   ├── carcentertulap.png
│   │   ├── smileagainlap.png
│   │   ├── stichtingdoetlap.png
│   │   └── portfoliofoto.png
│
├── tailwind.config.ts               # Tailwind configuratie + eigen kleuren
├── package.json                     # Scripts + dependencies
└── postcss.config.mjs
________________________________________
Functionaliteiten
Hero-sectie met animatie
•	Shader-effect met OGL (Balatro)
•	Roterende dash-cirkels via Framer Motion
•	Subtiele text-fade-ins
•	Direct herkenbare MAHWEB-stijl
________________________________________
Projectslider
Gebouwd met Swiper.js:
•	Coverflow-effect
•	Automatisch afspelen
•	Touch- en muisbesturing
•	Dynamische schaal-animatie
________________________________________
Case-pagina’s
Dankzij de Next.js App Router:
•	Iedere case krijgt een eigen URL
•	Slug-gebaseerd systeem
•	SEO-vriendelijke pagina’s
•	Layout geschikt voor storytelling
De Barber Mardini case bevat:
•	Uitdaging → Oplossing → Resultaten
•	Animaties op hover en scroll
•	Kleurenpaletten en mockups
________________________________________
Responsief ontwerp
Met Tailwind CSS:
•	Mobile-first
•	Flex- en gridsystemen
•	Diverse breakpoints
•	Volledige schaalbaarheid van animaties en slider
________________________________________
Belangrijke modules
Balatro WebGL Shader
•	Gebouwd met OGL (OpenGL library voor WebGL)
•	Shader reageert op tijd, rotatie en muis
•	Gebruikt GLSL-fragmentshaders
•	Creëert een high-end motion-studio uitstraling
Navbar
•	Current route detection via usePathname()
•	Donker/oranje accent styling
•	Minimalistisch ontwerp
Portfolio routing
•	Slug-gebaseerd
•	Automatische pagina-generatie
•	Makkelijk uitbreidbaar
________________________________________
Dependencies
•	next – Framework
•	react, react-dom – UI-basis
•	tailwindcss – Styling
•	framer-motion – Animaties
•	swiper – Slider
•	ogl – WebGL shader-engine
•	eslint – Codekwaliteit
