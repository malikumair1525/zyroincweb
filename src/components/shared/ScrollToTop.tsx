"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;

      setVisible(scrollTop > 600);
      setProgress(height > 0 ? Math.min(scrollTop / height, 1) : 0);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // Run once on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Ring geometry
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - progress);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-40 group"
        >
          {/* Progress ring SVG */}
          <svg
            width="52"
            height="52"
            className="absolute inset-0 -rotate-90 pointer-events-none"
          >
            {/* Background track */}
            <circle
              cx="26"
              cy="26"
              r={radius}
              fill="none"
              stroke="rgba(212, 175, 55, 0.15)"
              strokeWidth="2"
            />
            {/* Progress arc */}
            <circle
              cx="26"
              cy="26"
              r={radius}
              fill="none"
              stroke="url(#ringGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              style={{
                transition: "stroke-dashoffset 0.15s ease-out",
              }}
            />
            <defs>
              <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f5d87a" />
                <stop offset="100%" stopColor="#b8902b" />
              </linearGradient>
            </defs>
          </svg>

          {/* Gold button */}
          <div className="relative w-[52px] h-[52px] rounded-full btn-gold shadow-[0_10px_30px_-10px_rgba(212,175,55,0.5)] flex items-center justify-center">
            <ArrowUp
              className="w-5 h-5 text-ink-950 group-hover:-translate-y-0.5 transition-transform"
              strokeWidth={2.5}
            />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}