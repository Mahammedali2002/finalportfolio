"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

interface LoadingProps {
  active: boolean;
  onFinish?: () => void;
  duration?: number; // ms
}

export default function Loading({ active, onFinish, duration = 1400 }: LoadingProps) {
  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => {
      onFinish?.();
    }, duration);
    return () => clearTimeout(t);
  }, [active, duration, onFinish]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "linear" }}
              className="w-28 h-28 md:w-36 md:h-36 flex items-center justify-center"
            >
              <Image
                src="/logo.png"
                alt="MAHWEB logo"
                width={160}
                height={160}
                className="object-contain"
                priority
              />
            </motion.div>

            <motion.p
              initial={{ y: 6, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="mt-4 text-[#E9724C] font-semibold tracking-wide"
            >
              Even een momentje...
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="w-48 md:w-64 h-1 bg-[#F3EBDC] rounded-full mt-4 overflow-hidden"
            >
              <motion.div
                className="h-1 bg-[#E9724C]"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: duration / 1000, ease: "easeOut" }}
                style={{ width: "100%" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}