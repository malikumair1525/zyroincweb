"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Mail, Send, Loader2, CheckCircle2, Sparkles } from "lucide-react";
import { toast } from "@/lib/toast";
import { cn } from "@/lib/utils";

type FormData = {
  email: string;
};

export default function NewsletterSignup() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ mode: "onBlur" });

  const onSubmit = async (data: FormData) => {
    try {
      await new Promise((res) => setTimeout(res, 900));
      console.log("Newsletter signup:", data);

      setSubmitted(true);
      toast.success(
        "Welcome to the list!",
        "You'll receive our weekly market briefing every Monday."
      );
      reset();

      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      toast.error(
        "Could not subscribe",
        "Please try again in a moment or email us directly."
      );
    }
  };

  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
      {/* Left: Content */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-500/30 bg-gold-500/5 text-[10px] font-semibold text-gold-400 uppercase tracking-[0.18em] mb-4">
          <Sparkles className="w-3 h-3" />
          Market Briefing
        </div>

        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.15]">
          Weekly insights, straight from{" "}
          <span className="text-gold-gradient">the trading desk.</span>
        </h3>

        <p className="mt-4 text-sm sm:text-base text-ink-300 leading-relaxed max-w-md">
          Join thousands of traders receiving our concise weekly briefing —
          macro themes, platform updates, and trade ideas delivered every Monday.
        </p>
      </div>

      {/* Right: Form */}
      <div className="lg:justify-self-end w-full lg:max-w-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-400 pointer-events-none" />

            <input
              type="email"
              placeholder="Enter your email"
              disabled={submitted || isSubmitting}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email",
                },
              })}
              className={cn(
                "w-full pl-11 pr-36 py-4 rounded-xl bg-ink-950 border text-sm text-white placeholder:text-ink-500 focus:outline-none focus:ring-2 focus:ring-gold-500/40 transition",
                errors.email
                  ? "border-bear-500/50"
                  : submitted
                  ? "border-bull-500/50"
                  : "border-gold-500/25 focus:border-gold-500/60"
              )}
            />

            <button
              type="submit"
              disabled={submitted || isSubmitting}
              className="absolute right-1.5 top-1/2 -translate-y-1/2 btn-gold px-5 py-2.5 rounded-lg text-sm font-semibold inline-flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="hidden sm:inline">Sending</span>
                </>
              ) : submitted ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Subscribed</span>
                </>
              ) : (
                <>
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>

          {errors.email && (
            <p className="mt-2 text-xs text-bear-400">
              {errors.email.message}
            </p>
          )}

          <p className="mt-3 text-[11px] text-ink-500 leading-relaxed">
            By subscribing, you agree to our{" "}
            <Link
              href="/legal/privacy"
              className="text-gold-400 hover:text-gold-300 underline underline-offset-2"
            >
              Privacy Policy
            </Link>
            . Unsubscribe anytime.
          </p>
        </form>
      </div>
    </div>
  );
}