import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "white";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
  children: ReactNode;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-amber-500 text-slate-900 hover:bg-amber-400 shadow-lg shadow-amber-500/25",
  secondary: "bg-slate-900 text-white hover:bg-slate-800",
  outline:
    "border-2 border-white/70 text-white hover:bg-white hover:text-slate-900",
  white: "bg-white text-slate-900 hover:bg-slate-100 shadow-lg",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  as = "button",
  href,
  target,
  rel,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 ${variants[variant]} ${sizes[size]} ${className}`;

  if (as === "a" && href) {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
