import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTelegram,
} from "react-icons/fa6";
import { MAIN_NAV, LEGAL_NAV } from "@/constants/navigation";
import { SITE_CONFIG } from "@/constants/site";
import NewsletterSignup from "@/components/shared/NewsletterSignup";

const SOCIAL_ICONS = [
  { icon: FaXTwitter, href: SITE_CONFIG.social.twitter, label: "Twitter / X" },
  { icon: FaLinkedinIn, href: SITE_CONFIG.social.linkedin, label: "LinkedIn" },
  { icon: FaFacebookF, href: SITE_CONFIG.social.facebook, label: "Facebook" },
  { icon: FaInstagram, href: SITE_CONFIG.social.instagram, label: "Instagram" },
  { icon: FaYoutube, href: SITE_CONFIG.social.youtube, label: "YouTube" },
  { icon: FaTelegram, href: SITE_CONFIG.social.telegram, label: "Telegram" },
];

export default function Footer() {
  return (
    <footer className="bg-ink-950 border-t border-gold-500/10 mt-20">
      {/* Risk Warning */}
      <div className="bg-ink-900 border-b border-gold-500/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-xs text-ink-300 leading-relaxed">
            <span className="font-semibold text-gold-400">Risk Warning: </span>
            Trading foreign exchange and contracts for difference (CFDs) on margin
            carries a high level of risk and may not be suitable for all investors.
            Leverage can work against you as well as for you. Before deciding to
            trade, you should carefully consider your investment objectives, level
            of experience, and risk appetite. You could sustain a loss of some or
            all of your initial investment and therefore should not invest money
            you cannot afford to lose.
          </p>
        </div>
      </div>

      {/* Newsletter Banner */}
      <div className="border-b border-gold-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <NewsletterSignup />
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8">
        {/* Brand */}
        <div className="col-span-2 md:col-span-4 lg:col-span-5">
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/logo.png"
              alt={SITE_CONFIG.name}
              width={180}
              height={56}
              className="h-12 w-auto"
            />
          </Link>

          <p className="mt-5 text-sm text-ink-300 max-w-md leading-relaxed">
            A next-generation online broker providing institutional-grade access
            to the global forex and CFD markets through the TM9 trading platform.
          </p>

          {/* Contact */}
          <div className="mt-5 space-y-2 text-sm text-ink-300">
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="flex items-center gap-2 hover:text-gold-400 transition w-fit"
            >
              <Mail className="w-4 h-4" />
              {SITE_CONFIG.contact.email}
            </a>

            {/* <a
              href={`tel:${SITE_CONFIG.contact.phone}`}
              className="flex items-center gap-2 hover:text-gold-400 transition w-fit"
            >
              <Phone className="w-4 h-4" />
              {SITE_CONFIG.contact.phone}
            </a> */}
          </div>

          {/* Social Icons */}
          <div className="mt-6 flex flex-wrap gap-2">
            {SOCIAL_ICONS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="w-9 h-9 rounded-lg bg-ink-900 border border-gold-500/20 flex items-center justify-center text-ink-300 hover:text-gold-400 hover:border-gold-500/50 hover:bg-ink-800 transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Company */}
        <div className="lg:col-span-2">
          <h4 className="text-sm font-semibold text-gold-400 mb-4 tracking-wide uppercase">
            Company
          </h4>
          <ul className="space-y-2.5 text-sm">
            {MAIN_NAV.slice(0, 5).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-ink-300 hover:text-gold-400 transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div className="lg:col-span-2">
          <h4 className="text-sm font-semibold text-gold-400 mb-4 tracking-wide uppercase">
            Resources
          </h4>
          <ul className="space-y-2.5 text-sm">
            {MAIN_NAV.slice(5).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-ink-300 hover:text-gold-400 transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div className="lg:col-span-3">
          <h4 className="text-sm font-semibold text-gold-400 mb-4 tracking-wide uppercase">
            Legal
          </h4>
          <ul className="space-y-2.5 text-sm">
            {LEGAL_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-ink-300 hover:text-gold-400 transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ink-400">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-xs text-ink-400">
            Trading involves substantial risk of loss. Not suitable for all investors.
          </p>
        </div>
      </div>
    </footer>
  );
}