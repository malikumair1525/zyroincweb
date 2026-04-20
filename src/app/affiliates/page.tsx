"use client";

import { motion } from "framer-motion";
import { ArrowRight, DollarSign, TrendingUp, Globe2, Star, Quote } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CommissionPlans from "@/components/affiliates/CommissionPlans";
import PartnerTypes from "@/components/affiliates/PartnerTypes";
import PartnerTools from "@/components/affiliates/PartnerTools";
import PartnerSteps from "@/components/affiliates/PartnerSteps";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { SITE_CONFIG } from "@/constants/site";

const STATS = [
  { value: "$5K+", label: "Top Partner Monthly Earnings" },
  { value: "40%", label: "Max Revenue Share" },
  { value: "120+", label: "Countries Supported" },
  { value: "24 hr", label: "Avg. Application Review" },
];

const PARTNER_TESTIMONIALS = [
  {
    name: "Arjun Mehta",
    role: "Trading Community Lead",
    location: "Dubai, UAE",
    quote:
      "The ZYRO INC revshare model has meaningfully changed the economics of my trading community. Reporting is transparent, payouts arrive on schedule, and my partner manager actually understands my business.",
    initials: "AM",
  },
  {
    name: "Sofia Lindqvist",
    role: "Finance Content Creator",
    location: "Stockholm, Sweden",
    quote:
      "I've worked with a dozen broker affiliate programs. ZYRO's conversion rates are genuinely higher — and the creative assets are the first set I haven't had to replace with my own.",
    initials: "SL",
  },
  {
    name: "Daniel Okafor",
    role: "IB & Trading Educator",
    location: "Lagos, Nigeria",
    quote:
      "Hybrid plan on ZYRO INC lets me monetize both the up-front signup and the long-term client activity. The CPA rates alone justify the switch — the revshare is the gift that keeps on giving.",
    initials: "DO",
  },
];

const AFFILIATE_FAQS = [
  {
    question: "Is there a minimum traffic or audience size required?",
    answer:
      "There is no hard minimum. We evaluate applications based on the quality and alignment of your traffic, not just volume. Smaller content creators with engaged audiences are just as valuable to us as large affiliate networks.",
  },
  {
    question: "When and how are commissions paid out?",
    answer:
      "Commissions are paid on a monthly cycle — typically within the first five business days of each month for the previous month's qualified activity. High-volume partners may request weekly payouts after three months of consistent performance.",
  },
  {
    question: "What counts as a 'qualified' referred client?",
    answer:
      "A qualified referral is a client who completes identity verification and makes a minimum funding deposit. The specific qualifying deposit varies by plan and geography — your partner manager will provide a detailed breakdown upon onboarding.",
  },
  {
    question: "Can I combine CPA and Revshare?",
    answer:
      "Yes — our Hybrid plan combines an up-front CPA payment with an ongoing revenue share. Hybrid structures are typically offered to established IBs and affiliate networks with consistent monthly traffic.",
  },
  {
    question: "Do you support sub-affiliate / master partner structures?",
    answer:
      "Yes. Master partners can onboard and manage their own sub-affiliate networks through our partner dashboard, with automated commission splitting and full transparency across the hierarchy.",
  },
  {
    question: "Are there any restricted countries or traffic types?",
    answer:
      "We operate under standard jurisdictional restrictions and do not accept traffic from sanctioned regions or from incentivized / bot-driven sources. A full list of eligible countries and accepted traffic types is provided during onboarding.",
  },
];

export default function AffiliatesPage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        eyebrow="Partner Program"
        title={
          <>
            Turn your audience into{" "}
            <span className="text-gold-gradient">recurring revenue.</span>
          </>
        }
        description="Partner with ZYRO INC and monetize your trading community, content, or traffic with industry-leading commission tiers — backed by transparent reporting, dedicated managers, and a brand worth representing."
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href={SITE_CONFIG.crm.register} external variant="gold" size="lg">
            Become a Partner
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button href="#plans" variant="outline" size="lg">
            View Commission Plans
          </Button>
        </div>

        {/* Trust row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-ink-300">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-gold-400" />
            Up to 40% revenue share
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-gold-400" />
            Real-time tracking dashboard
          </div>
          <div className="flex items-center gap-2">
            <Globe2 className="w-4 h-4 text-gold-400" />
            Global payout support
          </div>
        </div>
      </PageHero>

      {/* STATS STRIP */}
      <section className="border-y border-gold-500/10 bg-ink-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center lg:border-r lg:border-gold-500/10 lg:last:border-r-0 lg:px-4"
              >
                <div className="text-3xl lg:text-4xl font-bold text-gold-gradient tracking-tight">
                  {s.value}
                </div>
                <div className="mt-2 text-xs sm:text-sm text-ink-300">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMISSION PLANS */}
      <Section size="lg" id="plans">
        <SectionHeading
          eyebrow="Commission Structure"
          title="Three plans. Choose what fits your traffic."
          description="Whether you're running a fast-conversion funnel or building long-term client relationships, one of our commission models will work for you — including a custom hybrid for established partners."
        />
        <div className="mt-16">
          <CommissionPlans />
        </div>
      </Section>

      {/* WHO SHOULD JOIN */}
      <Section size="lg" className="bg-ink-900/20 border-y border-gold-500/5">
        <SectionHeading
          eyebrow="Who Should Join"
          title="Built for partners who take this seriously."
          description="Our program rewards partners who bring real engagement — from small creators with loyal audiences to networks handling seven-figure traffic volumes."
        />
        <div className="mt-14 max-w-5xl mx-auto">
          <PartnerTypes />
        </div>
      </Section>

      {/* PARTNER TOOLS */}
      <Section size="lg">
        <SectionHeading
          eyebrow="What You Get"
          title="Everything you need to scale."
          description="A professional partner program is only as good as its tooling. We've built ours the way a serious affiliate would want theirs built — because we have to compete with the networks you already know."
        />
        <div className="mt-14">
          <PartnerTools />
        </div>
      </Section>

      {/* HOW TO JOIN */}
      <Section size="lg" className="bg-ink-900/20 border-y border-gold-500/5">
        <SectionHeading
          eyebrow="Onboarding Process"
          title="From application to payout — in under a week."
          description="We've streamlined partner onboarding to move fast while maintaining quality standards that protect both you and our clients."
        />
        <div className="mt-16">
          <PartnerSteps />
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section size="lg">
        <SectionHeading
          eyebrow="Partner Voices"
          title="Built by partners, for partners."
          description="Real feedback from the IBs, creators, and networks who have made ZYRO INC their preferred broker partnership."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PARTNER_TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl border border-gold-500/20 bg-ink-900/50 p-7 hover:border-gold-500/45 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-gold-500/15" />

              <div className="flex items-center gap-0.5 mb-5">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 text-gold-400 fill-gold-400" />
                ))}
              </div>

              <p className="text-sm sm:text-base text-ink-200 leading-relaxed mb-7">
                “{t.quote}”
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-gold-500/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-700 flex items-center justify-center text-xs font-bold text-ink-950">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-ink-400">
                    {t.role} · {t.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQs */}
      <Section size="lg" className="bg-ink-900/20 border-y border-gold-500/5">
        <SectionHeading
          eyebrow="Partner FAQs"
          title="Questions partners ask us."
          description="Everything you need to know before applying. Still have questions? Our partnerships team is a message away."
        />
        <div className="mt-12 max-w-3xl mx-auto">
          <FAQAccordion items={AFFILIATE_FAQS} />
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section size="lg" className="relative overflow-hidden">
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
            Ready to partner with a{" "}
            <span className="text-gold-gradient">broker built for you?</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-ink-300 leading-relaxed">
            Apply in under 10 minutes. Get approved in 1–2 business days. Start earning as
            soon as your first referral qualifies.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button href={SITE_CONFIG.crm.register} external variant="gold" size="lg">
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Speak with Partnerships
            </Button>
          </div>
        </motion.div>
      </Section>
    </>
  );
}