import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";

type Variant = "gold" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type ButtonAsLink = BaseProps & {
  href: string;
  external?: boolean;
} & Omit<ComponentProps<"a">, "href" | "className" | "children">;

type ButtonAsButton = BaseProps & {
  href?: undefined;
} & Omit<ComponentProps<"button">, "className" | "children">;

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variants: Record<Variant, string> = {
  gold: "btn-gold shadow-lg shadow-gold-500/20",
  outline:
    "border border-gold-500/40 text-gold-400 hover:bg-gold-500/5 hover:border-gold-500/70 active:bg-gold-500/10",
  ghost: "text-ink-100 hover:text-gold-400 hover:bg-gold-500/5",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function Button({
  variant = "gold",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none";

  const classes = cn(base, variants[variant], sizes[size], className);

  // LINK MODE
  if ("href" in props && props.href) {
    const { href, external, ...rest } = props;

    // External link
    if (external || href.startsWith("http")) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...rest}
        >
          {children}
        </a>
      );
    }

    // Internal link
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  // BUTTON MODE
  const { href: _ignore, ...buttonProps } = props as ButtonAsButton;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}