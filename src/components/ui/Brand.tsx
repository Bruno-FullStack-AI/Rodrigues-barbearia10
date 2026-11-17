import { business } from "../../data/site";
import { cn } from "../../utils/cn";

interface BrandProps {
  className?: string;
  size?: "sm" | "md";
  asLink?: boolean;
  tone?: "light" | "dark";
}

export function Brand({
  className,
  size = "md",
  asLink = true,
  tone = "light",
}: BrandProps) {
  const inner = (
    <>
      <span
        className={cn(
          "relative grid shrink-0 place-items-center overflow-hidden rounded-full border border-brass-400/40 bg-ink-900 shadow-[0_0_0_4px_rgba(211,160,92,0.06)]",
          size === "sm" ? "h-9 w-9" : "h-11 w-11",
        )}
      >
        <img
          src="/img/logo-256.webp"
          alt=""
          width={44}
          height={44}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </span>
      <span className="leading-none">
        <span
          className={cn(
            "block font-display tracking-tight",
            size === "sm" ? "text-[1rem]" : "text-[1.12rem]",
            tone === "dark" ? "text-ink-950" : "text-ivory",
          )}
        >
          Alison Rodrigues
        </span>
        <span
          className={cn(
            "mt-1.5 block text-[0.53rem] font-bold uppercase tracking-[0.36em]",
            tone === "dark" ? "text-brass-700" : "text-brass-300",
          )}
        >
          Barbearia
        </span>
      </span>
    </>
  );

  if (!asLink) {
    return (
      <span className={cn("group flex items-center gap-3", className)}>
        {inner}
      </span>
    );
  }

  return (
    <a
      href="#inicio"
      aria-label={`${business.fullName} — ir para o início`}
      className={cn("group flex items-center gap-3", className)}
    >
      {inner}
    </a>
  );
}
