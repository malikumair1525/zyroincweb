"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText, ChevronRight } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import BreadcrumbSchema from "@/components/shared/BreadcrumbSchema";
import { cn } from "@/lib/utils";
import { LEGAL_NAV } from "@/constants/navigation";
import { SITE_CONFIG } from "@/constants/site";

export type LegalSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  list?: string[];
};

type Props = {
  title: string;
  lastUpdated: string;
  introduction: string;
  sections: LegalSection[];
  currentSlug: string;
};

export default function LegalDocument({
  title,
  lastUpdated,
  introduction,
  sections,
  currentSlug,
}: Props) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const onScroll = () => {
      const offsets = sections
        .map((s) => {
          const el = document.getElementById(s.id);
          if (!el) return null;
          return { id: s.id, top: el.getBoundingClientRect().top };
        })
        .filter(Boolean) as { id: string; top: number }[];

      const current = offsets.reverse().find((o) => o.top < 150);
      if (current) setActive(current.id);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
          {/* Breadcrumb schema for Google */}
          <BreadcrumbSchema
        items={[
          { name: "Legal", path: "/legal" },
          { name: title, path: `/legal${currentSlug}` },
        ]}
      />
      {/* HERO */}
      <section className="relative pt-28 pb-12 border-b border-gold-500/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gold-500/8 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-ink-400 mb-4">
            <Link href="/" className="hover:text-gold-400 transition">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-ink-500">Legal</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gold-400">{title}</span>
          </div>

          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 text-gold-400" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
                {title}
              </h1>
              <div className="mt-3 text-xs text-ink-400">
                Last updated: <span className="text-ink-200">{lastUpdated}</span>
              </div>
            </div>
          </div>

          <p className="mt-6 text-sm sm:text-base text-ink-300 leading-relaxed max-w-3xl">
            {introduction}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <Section size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 lg:gap-16">
          
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-6">

              {/* TOC */}
              <div>
                <h3 className="text-[10px] font-bold text-gold-400 uppercase tracking-[0.2em] mb-4">
                  On This Page
                </h3>
                <nav className="space-y-1">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(s.id);
                      }}
                      className={cn(
                        "block text-xs py-1.5 border-l-2 pl-3 transition-colors",
                        active === s.id
                          ? "border-gold-500 text-gold-400 font-medium"
                          : "border-gold-500/10 text-ink-300 hover:border-gold-500/40 hover:text-white"
                      )}
                    >
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Related docs */}
              <div>
                <h3 className="text-[10px] font-bold text-gold-400 uppercase tracking-[0.2em] mb-4">
                  Related Documents
                </h3>
                <nav className="space-y-1">
                  {LEGAL_NAV.filter((item) => !item.href.endsWith(currentSlug)).map(
                    (item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-xs py-1.5 border-l-2 border-gold-500/10 pl-3 text-ink-300 hover:border-gold-500/40 hover:text-white transition"
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </nav>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <article>
            
            {/* Mobile TOC */}
            <details className="lg:hidden mb-8 rounded-xl border border-gold-500/20 bg-ink-900/50 p-4">
              <summary className="text-sm font-semibold text-gold-400 cursor-pointer">
                Table of Contents
              </summary>
              <nav className="mt-4 space-y-1">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(s.id);
                    }}
                    className="block text-xs py-1.5 pl-3 border-l-2 border-gold-500/10 text-ink-300 hover:text-white transition"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
            </details>

            {/* Sections */}
            <div className="space-y-12">
              {sections.map((section, i) => (
                <motion.section
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="scroll-mt-28"
                >
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-5 pb-3 border-b border-gold-500/15">
                    {i + 1}. {section.title}
                  </h2>

                  {section.paragraphs?.map((p, idx) => (
                    <p key={idx} className="mb-4 text-ink-300 leading-relaxed">
                      {p}
                    </p>
                  ))}

                  {section.list && (
                    <ul className="space-y-2 mt-4 text-ink-300">
                      {section.list.map((item, li) => (
                        <li key={li}>{item}</li>
                      ))}
                    </ul>
                  )}
                </motion.section>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 pt-10 border-t border-gold-500/15">
              <div className="rounded-2xl border border-gold-500/25 bg-ink-900/50 p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Questions about this document?
                </h3>
                <p className="text-sm text-ink-300 mb-5">
                  Contact our compliance team for clarification.
                </p>
                <div className="flex gap-3">
                  <Button href="/contact">Contact Compliance</Button>
                  <Button href={SITE_CONFIG.contact.email} external variant="outline">
                    {SITE_CONFIG.contact.email}
                  </Button>
                </div>
              </div>
            </div>

          </article>
        </div>
      </Section>
    </>
  );
}