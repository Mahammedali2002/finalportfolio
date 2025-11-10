"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function BarberMardiniPage() {
  const colors = [
    { code: "#FFFFFF" },
    { code: "#181818" },
    { code: "#947942" },
  ];

  const [hovered, setHovered] = useState<number | null>(null);

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
          Barber Mardini
        </h1>
        <p className="text-lg md:text-xl text-[#7E4E24]/80 leading-relaxed">
          Een stijlvolle digitale beleving die vakmanschap en modern design samenbrengt.
        </p>
      </motion.section>

      {/* === CONTENT + WAAIER === */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-20 px-6 md:px-12 pb-28">
        {/* === LINKERKANT TEKST === */}
        <div className="md:w-1/2 space-y-14">
          {[
            {
              title: "Uitdaging",
              text: `De oude website van Barber Mardini paste niet meer bij hun moderne, verzorgde imago.
                     De uitdaging: een elegante en gebruiksvriendelijke site bouwen die vakmanschap en klasse uitstraalt op desktop én mobiel.`,
            },
            {
              title: "Oplossing",
              text: `We ontwierpen een volledig nieuwe digitale identiteit: minimalistisch, warm en stijlvol.
                     Met subtiele animaties, natuurlijke kleuren en een geïntegreerd online boekingssysteem dat eenvoudig werkt voor iedere klant.`,
            },
            {
              title: "Resultaat",
              text: `De nieuwe website is snel, responsief en intuïtief.
                     Bezoekers ervaren direct de sfeer van de barbershop, en klanten kunnen met één klik hun afspraak inplannen.`,
            },
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

        {/* === RECHTS DE WAAIER === */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center items-center relative"
        >
          <div className="relative group w-[500px] h-[560px] cursor-pointer">
            {colors.map((c, i) => (
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
                style={{ backgroundColor: c.code }}
              >
                <p className="text-sm font-semibold text-[#7E4E24]/80 drop-shadow-sm">
                  {c.code}
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
        {[
          { number: "+42%", label: "Meer boekingen via website" },
          { number: "+65%", label: "Betere mobiele ervaring" },
          { number: "97", label: "PageSpeed-score" },
        ].map((stat, i) => (
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

      {/* === KLANTQUOTE === */}
      <motion.blockquote
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-[#fff6e3] border-l-4 border-[#E9724C] px-6 py-6 italic text-lg text-[#7E4E24]/90 shadow-lg rounded-md max-w-4xl mx-auto mb-24"
      >
        “De nieuwe website weerspiegelt precies onze stijl — strak, warm en professioneel.
        Dankzij MAHWEB kunnen klanten nu eenvoudig online boeken.
        Het resultaat overtrof onze verwachtingen.”
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
