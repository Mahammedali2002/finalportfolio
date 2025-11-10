"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  const projects = [
    {
      slug: "car-center-tu",
      title: "Car Center Tu",
      category: "Auto-industrie • Website",
      img: "/carcentertulap.png",
    },
    {
      slug: "barber-mardini",
      title: "Barber Mardini",
      category: "Kapperszaak • Website",
      img: "/barbermardinilap.png",
    },
    {
      slug: "smile-again",
      title: "Smile Again",
      category: "Tandartspraktijk • Website",
      img: "/smileagainlap.png",
    },
    {
      slug: "stichtingdoet",
      title: "Stichtingdoet",
      category: "Non-profit • Website & Branding",
      img: "/stichtingdoetlap.png",
    },
    {
      slug: "korontotech",
      title: "KorontoTech",
      category: "Elektricien • CMS Website",
      img: "/korontoelectralap.png",
    },
         { 
      title: "Umrahvibe",
      category: "Umrah boeking • Website & Content",
      img: "/umrahlap.png",
      url: "https://korontotech.nl",
    },
  ];

  return (
    <main className="relative min-h-screen bg-[#FAF6EB] px-6 md:px-20 py-24 overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold text-center text-[#E9724C] mb-20"
      >
        Mijn Portfolio
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 max-w-7xl mx-auto">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              href={`/portfolio/${proj.slug}`}
              className="group relative overflow-hidden bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.07)] 
                         hover:shadow-[0_15px_60px_rgba(0,0,0,0.1)] transform hover:-translate-y-3 
                         transition-all duration-500 flex flex-col"
            >
              <div className="relative w-full h-80 flex items-center justify-center overflow-hidden">
                <Image
                  src={proj.img}
                  alt={proj.title}
                  width={600}
                  height={400}
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-left">
                <h2 className="text-2xl font-bold text-[#E9724C] mb-1 group-hover:text-[#C85B35] transition-colors">
                  {proj.title}
                </h2>
                <p className="text-[#5C5C5C] text-sm">{proj.category}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
