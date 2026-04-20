"use client";

import { motion } from "framer-motion";
import {
  Target,
  ShieldCheck,
  Sparkles,
  Users,
  ArrowRight,
  Compass,
  Scale,
  LineChart,
  HeartHandshake,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/constants/site";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Integrity First",
    description:
      "Every business decision — from order execution to fund handling — is made with one question in mind: is this fair to the client?",
  },
  {
    icon: Sparkles,
    title: "Precision Execution",
    description:
      "We obsess over the details traders care about most — latency, spread quality, fill rates, and reliability during volatile sessions.",
  },
  {
    icon: Scale,
    title: "Radical Transparency",
    description:
      "Clear pricing, accessible reporting, and straightforward terms. No hidden fees, no ambiguous markups, no surprises.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description:
      "Our business only grows when our clients succeed. We treat every account — from the first deposit to institutional size — with equal care.",
  },
];

const PRINCIPLES = [
  {
    icon: Compass,
    title: "Client-Centric Design",
    text: "Every feature on the TM9 platform exists because traders asked for it — or because we saw a better way to deliver something they needed.",
  },
  {
    icon: LineChart,
    title: "Institutional Discipline",
    text: "We run our operations to standards expected of prime brokers — risk controls, reconciliation, uptime targets, and reporting.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Relationships",
    text: "We don't chase one-time deposits. We earn loyalty through consistency — tight spreads today, the same tight spreads two years from now.",
  },
];

const MILESTONES = [
  { value: "500+", label: "Tradable Instruments" },
  { value: "50ms", label: "Average Execution" },
  { value: "120+", label: "Countries Served" },
  { value: "24/5", label: "Client Support" },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        eyebrow="About ZYRO INC"
        title={
          <>
            A broker built on <span className="text-gold-gradient">principle</span>,
            <br />
            operated with precision.
          </>
        }
        description="ZYRO INC was founded with a singular purpose — to deliver institutional-quality trading infrastructure to every serious market participant, regardless of account size. We exist to bridge the gap between retail access and professional execution."
      />

      {/* MISSION SECTION */}
      <Section size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-gold-400 mb-4">
              Our Mission
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
              Trading, as it{" "}
              <span className="text-gold-gradient">should be.</span>
            </h2>
            <div className="mt-6 space-y-4 text-base sm:text-lg text-ink-300 leading-relaxed">
              <p>
                For too long, retail traders have been treated differently from
                institutional clients — wider spreads, slower execution, and pricing
                models designed to benefit the broker rather than the client. ZYRO INC
                was built to change that.
              </p>
              <p>
                We operate a straight-through pricing model, aggregating liquidity
                from tier-1 banks and top ECN venues. Orders are routed transparently,
                execution statistics are available on request, and we never profit from
                client losses. Our revenue comes from commissions and spreads — nothing
                more, nothing hidden.
              </p>
              <p>
                The result is a brokerage experience that behaves the way traders
                expect professional infrastructure to behave — reliable, fast, fair,
                and without friction.
              </p>
            </div>
          </motion.div>

          {/* Right: stats panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gold-500/10 rounded-3xl blur-3xl" />
              <div className="relative rounded-2xl border border-gold-500/25 bg-gradient-to-br from-ink-900 to-ink-950 p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Target className="w-5 h-5 text-gold-400" />
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
                    By the Numbers
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  {MILESTONES.map((m) => (
                    <div key={m.label}>
                      <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                        {m.value}
                      </div>
                      <div className="mt-1 text-xs text-ink-400">{m.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-gold-500/10">
                  <p className="text-sm text-ink-300 italic leading-relaxed">
                    "Trading infrastructure should disappear into the background —
                    leaving only the decisions that actually matter."
                  </p>
                  <p className="mt-3 text-xs text-gold-400 font-medium">
                    — ZYRO INC Operating Philosophy
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* CORE VALUES */}
      <Section size="lg" className="bg-ink-900/20 border-y border-gold-500/5">
        <SectionHeading
          eyebrow="Core Values"
          title="The principles behind every decision"
          description="These are not marketing slogans. They are the operating rules we apply every day — to execution quality, client handling, product development, and partnerships."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUES.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-2xl border border-gold-500/25 bg-ink-950/50 p-6 hover:border-gold-500/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/15 to-gold-700/5 border border-gold-500/25 flex items-center justify-center mb-5">
                <Icon className="w-5 h-5 text-gold-400" strokeWidth={2} />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
              <p className="text-sm text-ink-300 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* HOW WE OPERATE */}
      <Section size="lg">
        <SectionHeading
          eyebrow="How We Operate"
          title="Built like an institution. Accessible like a product."
          description="We take the discipline of institutional finance — and pair it with the accessibility traders expect from modern software."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
          {PRINCIPLES.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl border border-gold-500/20 bg-ink-900/40 p-7 hover:border-gold-500/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-gold-500/10 border border-gold-500/25 flex items-center justify-center mb-5">
                <Icon className="w-5 h-5 text-gold-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
              <p className="text-sm text-ink-300 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* COMMITMENT STATEMENT */}
      <Section size="lg" className="bg-ink-900/30 border-y border-gold-500/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-gold-400 mb-4">
            Our Commitment
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15]">
            When you trade with ZYRO INC, you're trading with a firm whose incentives
            are aligned with yours.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-ink-300 leading-relaxed">
            We succeed when our clients continue to trade with us — year after year. That
            simple truth shapes every policy, every technology choice, and every
            interaction we have with the people who trust us with their capital.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              href={SITE_CONFIG.crm.register}
              external
              variant="gold"
              size="lg"
            >
              Open Live Account
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Get in Touch
            </Button>
          </div>
        </motion.div>
      </Section>
    </>
  );
}