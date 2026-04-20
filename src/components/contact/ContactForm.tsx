"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "@/lib/toast";

type FormData = {
  fullName: string;
  email: string;
  department: string;
  subject: string;
  message: string;
  agree: boolean;
};

const DEPARTMENTS = [
  "General Enquiry",
  "Account & Verification",
  "Deposits & Withdrawals",
  "Trading & Platform",
  "Partnerships",
  "Compliance / Legal",
];

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onBlur",
    defaultValues: {
      department: DEPARTMENTS[0],
    },
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      // Simulate submission (swap with real endpoint later)
      await new Promise((res) => setTimeout(res, 1200));
      console.log("Contact form submission:", data);

      toast.success(
        "Message sent successfully",
        "Our team will respond within 2 business hours. Please check your email."
      );
      reset();
    } catch {
      toast.error(
        "Could not send message",
        "Please try again or email us directly at support@zyroinc.com."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const inputBase =
    "w-full px-4 py-3 rounded-lg bg-ink-950/70 border text-sm text-white placeholder:text-ink-500 focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition";
  const inputOk = "border-gold-500/25 focus:border-gold-500/60";
  const inputErr = "border-bear-500/50 focus:border-bear-500/80";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-gold-500/25 bg-ink-900/50 p-6 sm:p-8 lg:p-10"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold text-ink-200 uppercase tracking-wider mb-2">
            Full Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            {...register("fullName", {
              required: "Please enter your full name",
              minLength: { value: 2, message: "Name must be at least 2 characters" },
            })}
            className={cn(inputBase, errors.fullName ? inputErr : inputOk)}
          />
          {errors.fullName && (
            <p className="mt-1.5 text-xs text-bear-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold text-ink-200 uppercase tracking-wider mb-2">
            Email Address
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
            className={cn(inputBase, errors.email ? inputErr : inputOk)}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-bear-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Department */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-ink-200 uppercase tracking-wider mb-2">
            Department
          </label>
          <select
            {...register("department", { required: true })}
            className={cn(inputBase, inputOk, "cursor-pointer")}
          >
            {DEPARTMENTS.map((d) => (
              <option key={d} value={d} className="bg-ink-950">
                {d}
              </option>
            ))}
          </select>
        </div>

        {/* Subject */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-ink-200 uppercase tracking-wider mb-2">
            Subject
          </label>
          <input
            type="text"
            placeholder="Briefly describe your enquiry"
            {...register("subject", {
              required: "Please enter a subject",
              minLength: { value: 4, message: "Subject must be at least 4 characters" },
            })}
            className={cn(inputBase, errors.subject ? inputErr : inputOk)}
          />
          {errors.subject && (
            <p className="mt-1.5 text-xs text-bear-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.subject.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-ink-200 uppercase tracking-wider mb-2">
            Message
          </label>
          <textarea
            rows={5}
            placeholder="Please provide as much detail as possible so we can help you efficiently."
            {...register("message", {
              required: "Please enter your message",
              minLength: { value: 20, message: "Message should be at least 20 characters" },
            })}
            className={cn(inputBase, errors.message ? inputErr : inputOk, "resize-none")}
          />
          {errors.message && (
            <p className="mt-1.5 text-xs text-bear-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Agreement */}
        <div className="sm:col-span-2">
          <label className="flex items-start gap-3 cursor-pointer select-none">
            <input
              type="checkbox"
              {...register("agree", { required: "You must agree to continue" })}
              className="mt-0.5 w-4 h-4 rounded border-gold-500/40 bg-ink-950 text-gold-500 focus:ring-gold-500/50 focus:ring-2 cursor-pointer"
            />
            <span className="text-xs text-ink-300 leading-relaxed">
              I confirm that the information I've provided is accurate, and I consent
              to ZYRO INC contacting me at the email address above regarding my enquiry —
              as described in the{" "}
              
              {" "}
<a
  href="/legal/privacy"
  className="text-gold-400 hover:text-gold-300 underline underline-offset-2"
>
  Privacy Policy
</a>
              .
            </span>
          </label>
          {errors.agree && (
            <p className="mt-1.5 text-xs text-bear-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.agree.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <div className="sm:col-span-2 pt-2">
        <button
            type="submit"
            disabled={submitting}
            className="group btn-gold w-full sm:w-auto px-8 py-3.5 rounded-lg text-sm font-semibold inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
            {submitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="w-4 h-4 icon-slide" />
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}