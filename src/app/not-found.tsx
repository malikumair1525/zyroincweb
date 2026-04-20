import Link from "next/link";
import { Home, ArrowRight, TrendingUp, BookOpen, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/constants/site";

export const metadata = {
  title: "Page Not Found",
  description: "The page you requested could not be found on ZYRO INC.",
};

const HELPFUL_LINKS = [
  {
    icon: TrendingUp,
    title: "Trading",
    description: "500+ instruments across six asset classes.",
    href: "/trading",
  },
  {
    icon: Home,
    title: "Account Types",
    description: "Compare Standard, Pro, and VIP accounts.",
    href: "/account-types",
  },
  {
    icon: BookOpen,
    title: "FAQs",
    description: "Quick answers to the most common questions.",
    href: "/faqs",
  },
  {
    icon: MessageCircle,
    title: "Contact Us",
    description: "Our team responds within 2 business hours.",
    href: "/contact",
  },
];

export default function NotFound() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28 min-h-[calc(100vh-5rem)] flex items-center">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        {/* 404 big number */}
        <div className="text-gold-gradient text-[120px] sm:text-[180px] lg:text-[220px] font-bold leading-none tracking-tighter select-none">
          404
        </div>

        {/* Headline */}
        <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
          The page you're looking for{" "}
          <span className="text-gold-gradient">doesn't exist.</span>
        </h1>

        {/* Description */}
        <p className="mt-5 text-base sm:text-lg text-ink-300 max-w-xl mx-auto leading-relaxed">
          The link may be broken, the page may have been moved, or the address
          may have been mistyped. Here are a few places you might want to go
          instead.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/" variant="gold" size="lg">
            Return to Homepage
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button href={SITE_CONFIG.crm.login} external variant="outline" size="lg">
            Client Login
          </Button>
        </div>

        {/* Helpful links */}
        <div className="mt-16 pt-10 border-t border-gold-500/10">
          <p className="text-xs font-semibold text-gold-400 uppercase tracking-[0.18em] mb-6">
            Or explore these popular sections
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {HELPFUL_LINKS.map(({ icon: Icon, title, description, href }) => (
              <Link
                key={href}
                href={href}
                className="group text-left rounded-xl border border-gold-500/15 bg-ink-900/40 p-5 hover:border-gold-500/50 hover:bg-ink-900/70 transition-all duration-300"
              >
                <Icon className="w-5 h-5 text-gold-400 mb-3" />
                <h3 className="text-sm font-semibold text-white group-hover:text-gold-400 transition-colors mb-1">
                  {title}
                </h3>
                <p className="text-xs text-ink-400 leading-relaxed">
                  {description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}