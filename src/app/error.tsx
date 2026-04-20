"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Button from "@/components/ui/Button";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: Props) {
  useEffect(() => {
    // Log the error (in production, send to monitoring service like Sentry)
    console.error("Application error:", error);
  }, [error]);

  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28 min-h-[calc(100vh-5rem)] flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold-500/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        {/* Icon */}
        <div className="inline-flex w-20 h-20 rounded-2xl bg-gradient-to-br from-gold-500/15 to-gold-700/5 border border-gold-500/30 items-center justify-center mb-8">
          <AlertTriangle className="w-9 h-9 text-gold-400" strokeWidth={2} />
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
          Something went <span className="text-gold-gradient">wrong.</span>
        </h1>

        {/* Description */}
        <p className="mt-5 text-base sm:text-lg text-ink-300 leading-relaxed">
          We've encountered an unexpected issue while loading this page. This is
          likely a temporary problem — please try again, or return to the
          homepage.
        </p>

        {/* Error reference (for support tickets) */}
        {error.digest && (
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gold-500/20 bg-ink-900/50">
            <span className="text-[10px] text-ink-400 uppercase tracking-wider">
              Reference
            </span>
            <code className="text-xs font-mono text-gold-400">
              {error.digest}
            </code>
          </div>
        )}

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={reset}
            className="btn-gold px-7 py-3.5 rounded-lg text-sm font-semibold inline-flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          <Button href="/" variant="outline" size="lg" className="w-full sm:w-auto">
            <Home className="w-4 h-4" />
            Return Home
          </Button>
        </div>

        {/* Support note */}
        <div className="mt-12 pt-8 border-t border-gold-500/10">
          <p className="text-xs text-ink-400 leading-relaxed">
            If the problem persists, please{" "}
            <Link
              href="/contact"
              className="text-gold-400 hover:text-gold-300 underline underline-offset-2"
            >
              contact our support team
            </Link>{" "}
            and quote the reference number above.
          </p>
        </div>
      </div>
    </section>
  );
}