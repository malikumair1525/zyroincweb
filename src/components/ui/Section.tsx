import { cn } from "@/lib/utils";
import type { ReactNode, HTMLAttributes } from "react";

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  /** Inner content max width */
  container?: boolean;
  /** Vertical padding size */
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "py-12 sm:py-16",
  md: "py-16 sm:py-20 lg:py-24",
  lg: "py-20 sm:py-28 lg:py-32",
};

export default function Section({
  children,
  className,
  container = true,
  size = "md",
  ...rest
}: SectionProps) {
  return (
    <section className={cn("relative", sizes[size], className)} {...rest}>
      {container ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}