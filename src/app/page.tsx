"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

const Balatro = dynamic(() => import("./components/Balatro"), { ssr: false });

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: "Car center tu",
      img: "/carcentertulap.png",
      desc: "Auto garage met duidelijke informatie pagina en content gemaakt.",
    },
    {
      title: "Barber Mardini",
      img: "/barbermardinilap.png",
      desc: "Moderne kapperswebsite met online boekingssysteem.",
    },
    {
      title: "Smile again",
      img: "/smileagainlap.png",
      desc: "Tandarts met een moderne website + SEO",
    },
    {
      title: "Stichtingdoet",
      img: "/stichtingdoetlap.png",
      desc: "totaal pakket hosting website logo.",
    },
    {
      title: "KorontoTech",
      img: "/korontoelectralap.png",
      desc: "Elektricienwebsite met CMS-beheer en contactformulier.",
    },
  ];

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#FAF6EB]"
          >
            <div className="relative flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                className="absolute w-56 h-56 rounded-full border-4 border-dashed border-[#E9724C]"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                className="absolute w-72 h-72 rounded-full border-[6px] border-[#E9724C]/30"
              />
              <Image
                src="/logo.png"
                alt="MAHWEB Logo"
                width={180}
                height={180}
                priority
                className="relative drop-shadow-xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* === HERO SECTIE === */}
      <main className="relative text-[#E9724C] min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-around px-8 md:px-20 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Balatro isRotate={true} mouseInteraction={true} pixelFilter={700} />
        </div>

        {/* === Tekstgedeelte === */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl space-y-5 md:mr-10 relative z-10"
        >
          <p className="uppercase tracking-wide text-sm font-semibold text-[#E9724C]">
            Developer & UX Designer
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-[#E9724C]">
            WELKOM <br />
            <span className="text-[#E9724C]"></span>
          </h1>

          <p className="text-[#5C5C5C] max-w-md text-lg leading-relaxed">
            ''Ik creëer gebruiksvriendelijke digitale ervaringen met een strak design en soepele functionaliteit een combinatie van code en creativiteit.''
          </p>
          <p className="uppercase tracking-wide text-sm font-semibold text-[#E9724C]">
            @Mahammed ali
          </p>


          <div className="pt-6 flex gap-4">
  <motion.a
    whileHover={{ scale: 1.05 }}
    href="https://www.linkedin.com/in/mahammed-ali-hussein-a47ab0145/"
    target="_blank"
    rel="noopener noreferrer"
    className="border-2 border-[#E9724C] text-[#E9724C] px-6 py-2 rounded-full font-semibold 
               hover:bg-[#E9724C] hover:text-white transition-all duration-300"
  >
    LinkedIn
  </motion.a>
</div>
        </motion.div>

        {/* === Foto === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative mt-14 md:mt-0 flex justify-center items-center z-10"
        >
          <motion.div
            animate={{
              rotate: 360,
              boxShadow: [
                "0 0 40px #E9724C55",
                "0 0 60px #FAF6EB",
                "0 0 40px #E9724C55",
              ],
              borderColor: ["#E9724C", "#FAF6EB", "#E9724C"],
            }}
            transition={{
              rotate: { repeat: Infinity, duration: 25, ease: "linear" },
              boxShadow: { repeat: Infinity, duration: 4, ease: "easeInOut" },
              borderColor: { repeat: Infinity, duration: 6, ease: "easeInOut" },
            }}
            className="absolute border-[5px] border-dashed rounded-full w-[23rem] h-[23rem] md:w-[29rem] md:h-[29rem]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-[22rem] h-[22rem] md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden bg-[#FAF6EB]/90 flex items-center justify-center shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]"
          >
            <Image
              src="/portfoliofoto.png"
              alt="Mahammed Ali"
              width={450}
              height={450}
              className="object-cover rounded-full"
              priority
            />
          </motion.div>
        </motion.div>
      </main>

     {/* === PROJECT SWIPER === */}
<section className="bg-[#FAF6EB] py-28 relative overflow-hidden">
  <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#E9724C] mb-12">
    My Projects
  </h2>

  <Swiper
    effect="coverflow"
    grabCursor={true}
    centeredSlides={true}
    slidesPerView="auto"
    loop={true}
    coverflowEffect={{
      rotate: 30,
      stretch: 0,
      depth: 250,
      modifier: 1,
      slideShadows: true,
    }}
    autoplay={{ delay: 3500, disableOnInteraction: false }}
    pagination={{ clickable: true }}
    modules={[EffectCoverflow, Pagination, Autoplay]}
    className="w-full max-w-6xl"
  >
    {projects.map((proj, i) => {
      // 🔗 Geef een slug op voor elke projecttitel
      const slug = proj.title.toLowerCase().replace(/\s+/g, "-");
      return (
        <SwiperSlide
          key={i}
          className="bg-white rounded-3xl shadow-lg overflow-hidden max-w-sm md:max-w-md cursor-pointer hover:shadow-2xl transition-all duration-300"
        >
          <a href={`/portfolio/${slug}`} className="block group">
            <div className="relative w-full h-72 overflow-hidden">
              <Image
                src={proj.img}
                alt={proj.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-[#E9724C] mb-2 group-hover:text-[#7E4E24] transition-colors">
                {proj.title}
              </h3>
              <p className="text-[#5C5C5C]">{proj.desc}</p>
            </div>
          </a>
        </SwiperSlide>
      );
    })}
  </Swiper>
</section>


      {/* === SKILLS 4 STAPPEN === */}
      <section className="bg-white text-[#1E1E1E] py-28">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-center text-[#E9724C] mb-16"
        >
          Hoe ik digitale ervaringen bouw
        </motion.h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-6 text-center">
          {[
            {
              step: "01",
              title: "Research & Ideation",
              text: "Ik begin met het begrijpen van de doelgroep, concurrenten en het probleem dat we oplossen.",
            },
            {
              step: "02",
              title: "Wireframing & Design",
              text: "Ik ontwerp intuïtieve en visueel aantrekkelijke interfaces in Figma met focus op UX.",
            },
            {
              step: "03",
              title: "Development",
              text: "Met bijvoorbeeld React, Next.js en Tailwind en meer waar nodig bouw ik performante websites die soepel en responsief zijn.",
            },
            {
              step: "04",
              title: "Launch & Optimize",
              text: "Ik test, verbeter en optimaliseer continu voor snelheid, SEO en gebruikservaring.",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="group bg-[#FAF6EB] hover:bg-[#E9724C] hover:text-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500"
            >
              <h3 className="text-5xl font-extrabold text-[#E9724C] group-hover:text-white mb-3">
                {step.step}
              </h3>
              <h4 className="text-xl font-bold mb-2">{step.title}</h4>
              <p className="text-sm opacity-80">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === CONTACT === */}
      <section className="relative bg-[#E9724C] text-white text-center py-28 overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold mb-6"
        >
          Let’s build something together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg opacity-90 mb-10 max-w-xl mx-auto"
        >
     Klaar om aan de slag te gaan bij een bedrijf waar ik mijn passie voor design en development kan laten groeien.
        </motion.p>

        <motion.a
          whileHover={{ scale: 1.1 }}
          href="mailto:info@mahweb.nl"
          className="inline-block bg-white text-[#E9724C] px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#FAF6EB] transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)]"
        >
          Neem contact op
        </motion.a>
      </section>

      {/* === FOOTER === */}
      <footer className="bg-[#FAF6EB] py-14 px-8 md:px-20 text-[#1E1E1E] border-t border-[#E9724C]/20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start text-center md:text-left justify-items-center">
          {/* === Logo + Tekst === */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/logo.png"
              alt="MAHWEB Logo"
              width={140}
              height={140}
              className="object-contain mb-3"
            />
            <p className="text-[#E9724C] font-extrabold text-xl leading-snug">
              BOUW VANDAAG EN <br /> GROEI MORGEN
            </p>
            <p className="text-sm mt-3 font-semibold text-[#1E1E1E]">
            
            </p>
          </div>

          {/* === Links === */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-[#E9724C] font-extrabold italic text-lg mb-2">
              LINKS
            </h3>
            <ul className="space-y-2 font-medium">
              <li>
                <a href="/" className="hover:text-[#E9724C] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/portfolio" className="hover:text-[#E9724C] transition-colors">
                  Portfolio
                </a>
              </li>
             
            </ul>
          </div>

          {/* === Contact === */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-[#E9724C] font-extrabold italic text-lg mb-2">
              CONTACTS
            </h3>
            <div className="space-y-3 text-sm font-semibold">
              <div className="flex items-center justify-center md:justify-start gap-2">
         
                <a href="mailto:info@mahweb.nl" className="hover:text-[#E9724C]">
                  info@mahweb.nl
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
            
                <a href="tel:0622645580" className="hover:text-[#E9724C]">
                  0622645580
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-[#5C5C5C] mt-10 border-t border-[#E9724C]/10 pt-4">
          © {new Date().getFullYear()} MAHWEB. Portfolio
        </div>
      </footer>
    </>
  );
}
