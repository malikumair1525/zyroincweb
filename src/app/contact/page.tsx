"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ContactChannels from "@/components/contact/ContactChannels";
import ContactForm from "@/components/contact/ContactForm";
import ContactSidePanel from "@/components/contact/ContactSidePanel";
import { SITE_CONFIG } from "@/constants/site";

const QUICK_LINKS = [
  {
    title: "Account FAQs",
    description: "Common questions about account tiers, upgrades, and verification.",
    href: "/account-types",
  },
  {
    title: "Funding Questions",
    description: "Answers about deposits, withdrawals, fees, and processing times.",
    href: "/deposits-withdrawals",
  },
  {
    title: "Trading Conditions",
    description: "Spreads, leverage, instruments, and execution details.",
    href: "/trading",
  },
  {
    title: "Partner Program",
    description: "Learn about commissions, tracking, and partner onboarding.",
    href: "/affiliates",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        eyebrow="Contact Us"
        title={
          <>
            Let's <span className="text-gold-gradient">talk.</span>
          </>
        }
        description="Our team is here to help with account questions, funding issues, platform support, partnership discussions, or anything else on your mind. Pick the channel that suits you best — we respond quickly."
      />

      {/* CONTACT CHANNELS */}
      <Section size="md">
        <ContactChannels />
      </Section>

      {/* FORM + SIDE PANEL */}
      <Section size="lg" className="bg-ink-900/20 border-y border-gold-500/5">
        <SectionHeading
          eyebrow="Send a Message"
          title="Reach out directly."
          description="Fill in the form below and a member of our support team will be in touch shortly. For account-specific issues, please also include your registered email address."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <div className="lg:col-span-1">
            <ContactSidePanel />
          </div>
        </div>
      </Section>

      {/* QUICK HELP */}
      <Section size="lg">
        <SectionHeading
          eyebrow="Quick Help"
          title="Answer might already be here."
          description="Before reaching out, you may find a faster answer in our dedicated information pages."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {QUICK_LINKS.map((link, i) => (
            <motion.div
              key={link.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              <Link
                href={link.href}
                className="group block h-full rounded-xl border border-gold-500/20 bg-ink-900/40 p-5 hover:border-gold-500/55 transition-colors"
              >
                <h3 className="text-sm font-semibold text-white group-hover:text-gold-400 transition-colors">
                  {link.title}
                </h3>
                <p className="mt-2 text-xs text-ink-300 leading-relaxed">
                  {link.description}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-gold-400">
                  View page
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FINAL CTA */}
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
            Already a client?{" "}
            <span className="text-gold-gradient">Fastest help is in-portal.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-ink-300 leading-relaxed">
            Log in to your client portal to access live chat, submit identity documents,
            or initiate a withdrawal — all in one place.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button href={SITE_CONFIG.crm.login} external variant="gold" size="lg">
              Open Client Portal
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href={SITE_CONFIG.crm.register} external variant="outline" size="lg">
              Open Account
            </Button>
          </div>
        </motion.div>
      </Section>
    </>
  );
}