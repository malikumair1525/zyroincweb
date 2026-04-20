import { cn } from "@/lib/utils";

type Props = {
  variant?: "default" | "gold" | "gradient";
  className?: string;
};

export default function Divider({ variant = "default", className }: Props) {
  const base = "w-full h-px";
  const variants = {
    default: "bg-gold-500/10",
    gold: "bg-gold-500/30",
    gradient:
      "bg-gradient-to-r from-transparent via-gold-500/35 to-transparent",
  };

  return <div role="separator" className={cn(base, variants[variant], className)} />;
}