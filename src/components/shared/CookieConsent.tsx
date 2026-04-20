"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Cookie, X } from "lucide-react";
import { useLocalStorage } from "@/lib/hooks/useLocalStorage";

type ConsentValue = "accepted" | "rejected" | null;

export default function CookieConsent() {
  const [consent, setConsent, loaded] = useLocalStorage<ConsentValue>(
    "zyro-cookie-consent",
    null
  );

  // Don't render until we've checked localStorage (prevents flash)
  if (!loaded || consent !== null) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50"
      >
        <div className="relative rounded-2xl border border-gold-500/30 bg-ink-900/95 backdrop-blur-md p-5 shadow-[0_25px_80px_-20px_rgba(212,175,55,0.25)]">
          {/* Close button */}
          <button
            onClick={() => setConsent("rejected")}
            aria-label="Reject cookies"
            className="absolute top-3 right-3 w-7 h-7 rounded-md flex items-center justify-center text-ink-400 hover:text-white hover:bg-ink-800 transition"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Content */}
          <div className="flex items-start gap-3 pr-6">
            <div className="w-9 h-9 rounded-lg bg-gold-500/10 border border-gold-500/25 flex items-center justify-center flex-shrink-0">
              <Cookie className="w-4 h-4 text-gold-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-white mb-1.5">
                We use cookies
              </h3>
              <p className="text-xs text-ink-300 leading-relaxed">
                ZYRO INC uses essential cookies to deliver our services, and optional
                analytics cookies to improve your experience. You can manage your choice
                below. Learn more in our{" "}
                <Link
                  href="/legal/privacy"
                  className="text-gold-400 hover:text-gold-300 underline underline-offset-2"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-4 flex gap-2">
            <button
              onClick={() => setConsent("accepted")}
              className="btn-gold flex-1 px-4 py-2 rounded-lg text-xs font-semibold"
            >
              Accept All
            </button>
            <button
              onClick={() => setConsent("rejected")}
              className="px-4 py-2 rounded-lg text-xs font-medium border border-gold-500/25 text-ink-200 hover:border-gold-500/55 hover:text-white transition"
            >
              Essential Only
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}