"use client";

import { motion } from "framer-motion";
import { Users, Video, GraduationCap, Network } from "lucide-react";

const TYPES = [
  {
    icon: Users,
    title: "Introducing Brokers",
    audience: "Financial professionals & trading communities",
    description:
      "IBs who run trading rooms, signal groups, or advisory practices — monetize your client relationships with industry-leading commission tiers.",
  },
  {
    icon: Video,
    title: "Content Creators",
    audience: "YouTubers, streamers, & financial influencers",
    description:
      "Turn your audience into a recurring revenue stream with branded referral links, custom landing pages, and full campaign performance analytics.",
  },
  {
    icon: GraduationCap,
    title: "Educators",
    audience: "Trading coaches & course creators",
    description:
      "Integrate ZYRO INC as the recommended broker in your curriculum. Bundle affiliate earnings with course sales for a compound revenue model.",
  },
  {
    icon: Network,
    title: "Affiliate Networks",
    audience: "Agencies & media-buying teams",
    description:
      "Partner at the network level with access to high-converting creatives, co-branded funnels, and negotiable CPA + revshare hybrid structures.",
  },
];

export default function PartnerTypes() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {TYPES.map(({ icon: Icon, title, audience, description }, i) => (
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="group rounded-2xl border border-gold-500/25 bg-ink-900/50 p-7 hover:border-gold-500/55 transition-colors"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/15 to-gold-700/5 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
              <Icon className="w-5 h-5 text-gold-400" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white mb-1">{title}</h3>
              <p className="text-xs text-gold-400 mb-3 font-medium">{audience}</p>
              <p className="text-sm text-ink-300 leading-relaxed">{description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}