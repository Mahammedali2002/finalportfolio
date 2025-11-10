"use client";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    slug: "barber-mardini",
    title: "Barber Mardini",
    tagline: "Een stijlvolle digitale beleving die vakmanschap en modern design samenbrengt.",
    challenge: `De oude website van Barber Mardini paste niet meer bij hun moderne, verzorgde imago.
                De uitdaging: een elegante en gebruiksvriendelijke site bouwen die vakmanschap en klasse uitstraalt op desktop én mobiel.`,
    solution: `We ontwierpen een volledig nieuwe digitale identiteit: minimalistisch, warm en stijlvol.
               Met subtiele animaties, natuurlijke kleuren en een geïntegreerd online boekingssysteem dat eenvoudig werkt voor iedere klant.`,
    result: `De nieuwe website is snel, responsief en intuïtief.
             Bezoekers ervaren direct de sfeer van de barbershop, en klanten kunnen met één klik hun afspraak inplannen.`,
    quote: `“De nieuwe website weerspiegelt precies onze stijl — strak, warm en professioneel.
            Dankzij MAHWEB kunnen klanten nu eenvoudig online boeken. 
            Het resultaat overtrof onze verwachtingen.”`,
    stats: [
      { number: "+42%", label: "Meer boekingen via website" },
      { number: "+65%", label: "Betere mobiele ervaring" },
      { number: "97", label: "PageSpeed-score" },
    ],
    colors: ["#FFFFFF", "#181818", "#947942"],
  },
  {
    slug: "car-center-tu",
    title: "Car Center TU",
    tagline: "Een betrouwbare garage — nu ook online perfect vertegenwoordigd.",
    challenge: `Car Center TU had een verouderde site zonder duidelijke structuur.
                Er was nood aan een moderne presentatie van diensten, foto’s en contactmogelijkheden.`,
    solution: `We creëerden een overzichtelijke website met dynamische content, onderhoudstabellen
               en een directe afspraakmodule. De kleuren en iconografie geven vertrouwen en vakmanschap weer.`,
    result: `De website straalt professionaliteit uit, laadt snel en maakt het boeken van onderhoud eenvoudiger dan ooit.`,
    quote: `“De site oogt professioneel en eenvoudig te gebruiken — precies wat we wilden.”`,
    stats: [
      { number: "+54%", label: "Meer afspraken" },
      { number: "90", label: "PageSpeed" },
      { number: "+39%", label: "SEO-traffic" },
    ],
    colors: ["#D81010", "#fefefeff", "#000000"],
  },
  {
    slug: "smile-again",
    title: "Smile Again Tandartsen",
    tagline: "Een frisse, toegankelijke website die vertrouwen uitstraalt — met SEO-optimalisatie.",
    challenge: `Smile Again had een trage website met slechte vindbaarheid.
                De uitdaging lag in het verbeteren van structuur, laadtijd en uitstraling.`,
    solution: `Met een nieuw Next.js-ontwerp, optimalisatie voor Core Web Vitals en contentstrategie op SEO,
               groeide hun online zichtbaarheid enorm.`,
    result: `Een moderne website met duidelijke navigatie, sneller laden en hogere zoekresultaten.`,
    quote: `“Dankzij MAHWEB hebben we nu een site die vertrouwen wekt én gevonden wordt.”`,
    stats: [
      { number: "+70%", label: "Snellere laadtijd" },
      { number: "+55%", label: "Meer afspraken" },
      { number: "+88%", label: "SEO-groei" },
    ],
    colors: ["#493d2dff", "#ffffffff", "#9A8D7B"],
  },
  {
    slug: "stichtingdoet",
    title: "Stichting Doet",
    tagline: "Een sociaal initiatief met een sterke digitale identiteit en hosting-ondersteuning.",
    challenge: `De stichting had geen online zichtbaarheid. 
                De uitdaging was een platform te bouwen dat vertrouwen opwekt bij donateurs en vrijwilligers.`,
    solution: `We ontwikkelden een warme website met CMS-beheer, contact- en donatieformulieren
               en betrouwbare hosting door MAHWEB.`,
    result: `Een gebruiksvriendelijke, toegankelijke website die bijdraagt aan meer donaties en betrokkenheid.`,
    quote: `“Onze boodschap komt eindelijk goed over — MAHWEB heeft ons echt geholpen.”`,
    stats: [
      { number: "+40%", label: "Meer donateurs" },
      { number: "+60%", label: "Snellere laadtijd" },
      { number: "95", label: "PageSpeed" },
    ],
    colors: ["#782828", "#FFFFFF", "#D81010"],
  },
  {
    slug: "korontotech",
    title: "Koronto Tech Electra",
    tagline: "Een krachtige website voor een groeiend elektrotechnisch bedrijf.",
    challenge: `Koronto Tech had geen centrale online presentatie.
                Doel: professionaliteit uitstralen en klanten eenvoudiger laten aanvragen.`,
    solution: `We bouwden een CMS-site met dienstencatalogus, reviews en een strak contactformulier.
               De kleuren sluiten aan bij het merk en zorgen voor herkenning.`,
    result: `Een moderne, snelle en professionele online uitstraling die vertrouwen uitstraalt.`,
    quote: `“De website straalt nu de kracht van ons werk uit — overzichtelijk, modern en snel.”`,
    stats: [
      { number: "+58%", label: "Meer aanvragen" },
      { number: "+80%", label: "Betere mobiele ervaring" },
      { number: "96", label: "PageSpeed-score" },
    ],
    colors: ["#FACC15", "#1E293B", "#FFFFFF"],
  },
];

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [hovered, setHovered] = useState<number | null>(null);

  if (!project)
    return (
      <main className="flex items-center justify-center min-h-screen bg-[#FAF6EB] text-[#E9724C]">
        <p className="text-xl font-semibold">Project niet gevonden.</p>
      </main>
    );

  return (
    <main className="bg-[#FAF6EB] text-[#7E4E24] min-h-screen overflow-hidden">
      {/* === HERO === */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-6 pt-28 pb-20 max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#E9724C] mb-6 leading-tight">
          {project.title}
        </h1>
        <p className="text-lg md:text-xl text-[#7E4E24]/80 leading-relaxed">
          {project.tagline}
        </p>
      </motion.section>

      {/* === CONTENT + WAAIER === */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-20 px-6 md:px-12 pb-28">
        {/* === TEKST === */}
        <div className="md:w-1/2 space-y-14">
          {[
            { title: "Uitdaging", text: project.challenge },
            { title: "Oplossing", text: project.solution },
            { title: "Resultaat", text: project.result },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-extrabold text-[#E9724C] mb-3">
                {item.title}
              </h2>
              <p className="text-lg leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* === WAAIER === */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center items-center relative"
        >
          <div className="relative group w-[500px] h-[560px] cursor-pointer">
            {project.colors.map((c, i) => (
              <motion.div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                animate={{
                  rotate: hovered === i ? 0 : (i - 1.2) * 10,
                  x: hovered === i ? 0 : (i - 1.2) * 100,
                  y: hovered === i ? -10 : Math.abs(i - 1.2) * 6,
                  scale: hovered === i ? 1.1 : 1,
                  zIndex: hovered === i ? 10 : 5 - i,
                  boxShadow:
                    hovered === i
                      ? "0 25px 60px rgba(0,0,0,0.3)"
                      : "0 8px 25px rgba(0,0,0,0.1)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 18,
                }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[230px] h-[320px] md:w-[260px] md:h-[360px] rounded-3xl origin-bottom transition-all duration-500 flex items-end justify-start p-4"
                style={{ backgroundColor: c }}
              >
                <p className="text-sm font-semibold text-[#7E4E24]/80 drop-shadow-sm">
                  {c}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* === STATISTIEKEN === */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center max-w-5xl mx-auto px-6 mb-20"
      >
        {project.stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md py-8 hover:shadow-xl transition-all duration-500"
          >
            <p className="text-5xl font-extrabold text-[#E9724C]">
              {stat.number}
            </p>
            <p className="text-sm mt-2 text-[#7E4E24]/80">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      {/* === QUOTE === */}
      <motion.blockquote
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-[#fff6e3] border-l-4 border-[#E9724C] px-6 py-6 italic text-lg text-[#7E4E24]/90 shadow-lg rounded-md max-w-4xl mx-auto mb-24"
      >
        {project.quote}
      </motion.blockquote>

      {/* === TERUGKNOP === */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex justify-center mb-16"
      >
        <a
          href="/portfolio"
          className="border-2 border-[#E9724C] text-[#E9724C] px-10 py-3 rounded-full font-semibold 
                     hover:bg-[#E9724C] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg"
        >
          ← Terug naar Portfolio
        </a>
      </motion.div>
    </main>
  );
}
