"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, SearchX, ArrowRight } from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import {
  ALL_FAQS,
  FAQ_CATEGORIES,
  type FAQ,
  type FAQCategory,
} from "@/constants/faqs";
import { SITE_CONFIG } from "@/constants/site";

type Filter = "all" | FAQCategory;

export default function FaqsPage() {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  const [openKey, setOpenKey] = useState<string | null>(null);

  // Filter + search logic
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ALL_FAQS.filter((f) => {
      if (filter !== "all" && f.category !== filter) return false;
      if (!q) return true;
      return (
        f.question.toLowerCase().includes(q) ||
        f.answer.toLowerCase().includes(q)
      );
    });
  }, [filter, query]);

  // Group by category for display
  const groups = useMemo(() => {
    const map = new Map<FAQCategory, FAQ[]>();
    for (const f of visible) {
      const arr = map.get(f.category) ?? [];
      arr.push(f);
      map.set(f.category, arr);
    }
    return FAQ_CATEGORIES.filter((c) => map.has(c.key)).map((c) => ({
      ...c,
      items: map.get(c.key) ?? [],
    }));
  }, [visible]);

  // JSON-LD schema for SEO (Google FAQ rich results)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ALL_FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <>
      {/* JSON-LD for Google rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <PageHero
        eyebrow="Help Center"
        title={
          <>
            Everything, <span className="text-gold-gradient">explained.</span>
          </>
        }
        description="Browse the most common questions from ZYRO INC clients. Use the search below to jump directly to what you need — or filter by category."
      >
        {/* SEARCH */}
        <div className="relative max-w-xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-400 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search FAQs — e.g., 'withdrawal time', 'minimum deposit'..."
            className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-ink-900/70 border border-gold-500/25 text-sm text-white placeholder:text-ink-500 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500/60 transition"
          />
        </div>

        {/* Results counter */}
        <div className="mt-4 text-xs text-ink-400">
          Showing <span className="text-gold-400 font-semibold">{visible.length}</span> of{" "}
          {ALL_FAQS.length} questions
        </div>
      </PageHero>

      {/* CATEGORY FILTERS */}
      <div className="sticky top-20 z-20 bg-ink-950/85 backdrop-blur-md border-b border-gold-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setFilter("all")}
              className={cn(
                "px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all border",
                filter === "all"
                  ? "bg-gold-500/15 border-gold-500/60 text-gold-300"
                  : "bg-ink-900/50 border-gold-500/15 text-ink-300 hover:border-gold-500/40 hover:text-white"
              )}
            >
              All Questions
            </button>
            {FAQ_CATEGORIES.map((c) => (
              <button
                key={c.key}
                onClick={() => setFilter(c.key)}
                className={cn(
                  "px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all border",
                  filter === c.key
                    ? "bg-gold-500/15 border-gold-500/60 text-gold-300"
                    : "bg-ink-900/50 border-gold-500/15 text-ink-300 hover:border-gold-500/40 hover:text-white"
                )}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ GROUPS */}
      <Section size="lg">
        {groups.length === 0 ? (
          // Empty state
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-xl mx-auto text-center py-12"
          >
            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-ink-900 border border-gold-500/20 flex items-center justify-center">
              <SearchX className="w-5 h-5 text-gold-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              No matching questions
            </h3>
            <p className="text-sm text-ink-300 leading-relaxed mb-6">
              We couldn't find anything matching your search. Try a different term
              or clear the filter below.
            </p>
            <Button
              onClick={() => {
                setQuery("");
                setFilter("all");
              }}
              variant="outline"
              size="md"
            >
              Reset Search
            </Button>
          </motion.div>
        ) : (
          <div className="space-y-12 max-w-4xl mx-auto">
            {groups.map((group) => (
              <motion.div
                key={group.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xs font-bold text-gold-400 uppercase tracking-[0.2em] mb-5">
                  {group.label}
                </h2>

                <div className="space-y-3">
                  {group.items.map((item) => {
                    const key = `${item.category}-${item.question}`;
                    const isOpen = openKey === key;
                    return (
                      <div
                        key={key}
                        className={cn(
                          "rounded-xl border bg-ink-900/50 transition-colors",
                          isOpen
                            ? "border-gold-500/55"
                            : "border-gold-500/15 hover:border-gold-500/30"
                        )}
                      >
                        <button
                          onClick={() => setOpenKey(isOpen ? null : key)}
                          className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left"
                        >
                          <span className="text-base font-semibold text-white">
                            {item.question}
                          </span>
                          <ChevronDown
                            className={cn(
                              "w-5 h-5 text-gold-400 flex-shrink-0 transition-transform duration-300",
                              isOpen && "rotate-180"
                            )}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="px-5 sm:px-6 pb-5 text-sm sm:text-base text-ink-300 leading-relaxed">
                                {item.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </Section>

      {/* "CAN'T FIND IT?" CTA */}
      <Section size="lg" className="relative overflow-hidden bg-ink-900/30 border-y border-gold-500/10">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15]">
            Can't find what you're looking for?
          </h2>
          <p className="mt-5 text-base sm:text-lg text-ink-300 leading-relaxed">
            Our support team is ready to help with anything that isn't covered here.
            Reach out by email, live chat, or the contact form — we respond within
            two business hours.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button href="/contact" variant="gold" size="lg">
              Contact Support
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href={SITE_CONFIG.crm.login} external variant="outline" size="lg">
              Open Client Portal
            </Button>
          </div>
        </motion.div>
      </Section>
    </>
  );
}