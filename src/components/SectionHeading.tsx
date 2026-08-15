interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow && (
        <span
          className={`mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] ${light ? "text-amber-300" : "text-amber-600"}`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.5rem] ${light ? "text-white" : "text-slate-900"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? "text-slate-300" : "text-slate-600"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
