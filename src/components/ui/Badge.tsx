import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Variant = "gold" | "neutral" | "success" | "warning" | "danger";
type Size = "sm" | "md";

type Props = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
};

const variants: Record<Variant, string> = {
  gold: "bg-gold-500/10 border-gold-500/30 text-gold-400",
  neutral: "bg-ink-900/60 border-gold-500/15 text-ink-200",
  success: "bg-bull-500/10 border-bull-500/35 text-bull-400",
  warning: "bg-gold-500/12 border-gold-500/40 text-gold-300",
  danger: "bg-bear-500/10 border-bear-500/35 text-bear-400",
};

const sizes: Record<Size, string> = {
  sm: "text-[10px] px-2 py-0.5",
  md: "text-xs px-2.5 py-1",
};

export default function Badge({
  variant = "gold",
  size = "sm",
  children,
  className,
  icon,
}: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-semibold uppercase tracking-wider",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </span>
  );
}