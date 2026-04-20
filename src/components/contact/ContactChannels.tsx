"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Handshake, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/constants/site";

const CHANNELS = [
  {
    icon: Mail,
    title: "Email Support",
    description:
      "For account, trading, or general enquiries — our support team typically responds within 2 business hours.",
    action: {
      label: SITE_CONFIG.contact.email,
      href: `mailto:${SITE_CONFIG.contact.email}`,
    },
    tag: "Response < 2 hours",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description:
      "Fastest way to reach us. Live chat is available inside your client portal, 24 hours a day, 5 days a week.",
    action: {
      label: "Open Client Portal",
      href: SITE_CONFIG.crm.login,
    },
    tag: "24/5 availability",
  },
  {
    icon: Handshake,
    title: "Partnership Inquiries",
    description:
      "For IBs, affiliate networks, and institutional partnerships — connect directly with our partnerships team.",
    action: {
      label: "partners@zyroinc.com",
      href: "mailto:partners@zyroinc.com",
    },
    tag: "Business development",
  },
];

export default function ContactChannels() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {CHANNELS.map(({ icon: Icon, title, description, action, tag }, i) => (
        <motion.a
          key={title}
          href={action.href}
          target={action.href.startsWith("http") ? "_blank" : undefined}
          rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="group rounded-2xl border border-gold-500/25 bg-ink-900/50 p-7 hover:border-gold-500/55 transition-all duration-300 flex flex-col"
        >
          <div className="flex items-start justify-between mb-5">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/15 to-gold-700/5 border border-gold-500/30 flex items-center justify-center">
              <Icon className="w-5 h-5 text-gold-400" strokeWidth={2} />
            </div>
            <span className="text-[10px] text-gold-400 uppercase tracking-wider font-semibold bg-gold-500/10 border border-gold-500/25 px-2.5 py-1 rounded-full">
              {tag}
            </span>
          </div>

          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          <p className="text-sm text-ink-300 leading-relaxed flex-1">
            {description}
          </p>

          <div className="mt-5 pt-5 border-t border-gold-500/10 flex items-center justify-between">
            <span className="text-sm font-semibold text-gold-400 group-hover:text-gold-300 transition-colors truncate">
              {action.label}
            </span>
            <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform flex-shrink-0 ml-2" />
          </div>
        </motion.a>
      ))}
    </div>
  );
}