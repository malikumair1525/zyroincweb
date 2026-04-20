"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu, MemoryStick, Wifi, MonitorSmartphone } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import DownloadCenter from "@/components/platforms/DownloadCenter";
import PlatformFeatures from "@/components/platforms/PlatformFeatures";
import DeviceShowcase from "@/components/platforms/DeviceShowcase";
import { SITE_CONFIG } from "@/constants/site";

const REQUIREMENTS = [
  {
    icon: Cpu,
    title: "Processor",
    value: "Dual-core 2 GHz+",
    note: "Quad-core recommended for algo trading",
  },
  {
    icon: MemoryStick,
    title: "Memory",
    value: "4 GB RAM",
    note: "8 GB RAM recommended",
  },
  {
    icon: Wifi,
    title: "Connection",
    value: "Stable internet",
    note: "10 Mbps+ recommended",
  },
  {
    icon: MonitorSmartphone,
    title: "Compatibility",
    value: "All modern devices",
    note: "Web, iOS 14+, Android 7+",
  },
];

const ADVANTAGES = [
  {
    title: "Proprietary Technology",
    text: "TM9 is built in-house — not a white-labelled platform. Every feature is shaped by our traders' needs, not third-party constraints.",
  },
  {
    title: "Continuous Updates",
    text: "New features, indicators, and improvements ship regularly. Feedback from clients directly informs our development roadmap.",
  },
  {
    title: "Unified Experience",
    text: "Seamless synchronization across web, desktop, and mobile. Start a chart on desktop, finish the trade on your phone.",
  },
  {
    title: "No Hidden Costs",
    text: "All TM9 platform access is free for ZYRO INC clients — no subscription fees, no tier gating, no premium upsells.",
  },
];

export default function PlatformsPage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        eyebrow="The TM9 Platform"
        title={
          <>
            Trading infrastructure,{" "}
            <span className="text-gold-gradient">reimagined.</span>
          </>
        }
        description="TM9 is our proprietary trading platform — a ground-up rebuild of what a modern brokerage terminal should feel like. Powerful on desktop. Effortless on mobile. Unified across every device you own."
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            href={SITE_CONFIG.platform.web}
            external
            variant="gold"
            size="lg"
          >
            Launch Web Terminal
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button href="#download" variant="outline" size="lg">
            View All Downloads
          </Button>
        </div>
      </PageHero>

      {/* DEVICE SHOWCASE */}
      <Section size="lg">
        <SectionHeading
          eyebrow="Built for Every Screen"
          title="One platform. Every device."
          description="Whether you're running multi-screen analysis at your desk or placing a quick trade from your phone — TM9 delivers the same precision, everywhere."
        />
        <div className="mt-16">
          <DeviceShowcase />
        </div>
      </Section>

      {/* DOWNLOAD CENTER */}
      <Section size="lg" id="download" className="bg-ink-900/20 border-y border-gold-500/5">
        <SectionHeading
          eyebrow="Download Center"
          title="Get started in seconds."
          description="Choose your preferred method of access. All TM9 versions share the same unified account — your positions, watchlists, and settings sync automatically."
        />
        <div className="mt-14">
          <DownloadCenter />
        </div>

        {/* Compliance note */}
        <p className="mt-8 text-center text-xs text-ink-400 max-w-2xl mx-auto">
          The Android APK is distributed directly by TM9 and is not available through the Google
          Play Store. After download, you may need to enable installation from unknown sources in
          your device settings.
        </p>
      </Section>

      {/* PLATFORM FEATURES */}
      <Section size="lg">
        <SectionHeading
          eyebrow="Platform Capabilities"
          title="Everything a serious trader needs."
          description="From algorithmic execution to advanced charting — TM9 ships with the tools professional traders expect, without the complexity that usually comes with them."
        />
        <div className="mt-14">
          <PlatformFeatures />
        </div>
      </Section>

      {/* WHY TM9 */}
      <Section size="lg" className="bg-ink-900/20 border-y border-gold-500/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-gold-400 mb-4">
              Why TM9
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
              Not another{" "}
              <span className="text-gold-gradient">clone platform.</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-ink-300 leading-relaxed">
              Most brokers offer the same third-party platforms dressed up with different
              logos. TM9 is different — it's our own technology, shaped entirely by feedback
              from our trading community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 grid sm:grid-cols-2 gap-4"
          >
            {ADVANTAGES.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="rounded-xl border border-gold-500/20 bg-ink-950/40 p-5 hover:border-gold-500/50 transition-colors"
              >
                <h3 className="text-sm font-semibold text-gold-400 mb-2">{a.title}</h3>
                <p className="text-sm text-ink-300 leading-relaxed">{a.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* SYSTEM REQUIREMENTS */}
      <Section size="lg">
        <SectionHeading
          eyebrow="System Requirements"
          title="Runs on what you already have."
          description="TM9 is engineered to perform well on modest hardware while scaling up to take advantage of powerful workstations."
        />
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {REQUIREMENTS.map(({ icon: Icon, title, value, note }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-xl border border-gold-500/20 bg-ink-900/50 p-5"
            >
              <Icon className="w-5 h-5 text-gold-400 mb-3" />
              <div className="text-xs text-ink-400 uppercase tracking-wider mb-1">
                {title}
              </div>
              <div className="text-base font-semibold text-white">{value}</div>
              <div className="text-xs text-ink-400 mt-1">{note}</div>
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
            Ready to trade on{" "}
            <span className="text-gold-gradient">TM9?</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-ink-300 leading-relaxed">
            Open a live ZYRO INC account and get full access to the TM9 platform across
            all your devices — with institutional-grade execution from your very first trade.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button href={SITE_CONFIG.crm.register} external variant="gold" size="lg">
              Open Live Account
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              href={SITE_CONFIG.platform.web}
              external
              variant="outline"
              size="lg"
            >
              Launch Web Terminal
            </Button>
          </div>
        </motion.div>
      </Section>
    </>
  );
}