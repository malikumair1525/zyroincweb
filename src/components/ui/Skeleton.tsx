import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  variant?: "default" | "circle" | "text";
};

const variants = {
  default: "rounded-lg",
  circle: "rounded-full",
  text: "rounded h-4",
};

export default function Skeleton({ className, variant = "default" }: Props) {
  return (
    <div
      aria-hidden
      className={cn(
        "animate-shimmer bg-gradient-to-r from-ink-900 via-ink-800 to-ink-900 bg-[length:200%_100%]",
        variants[variant],
        className
      )}
    />
  );
}