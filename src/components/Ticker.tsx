import { Sparkle } from "./ui/Icons";

const items = [
  "Corte na tesoura",
  "Degradê",
  "Barba na navalha",
  "Acabamento",
  "Sobrancelha",
  "Corte infantil",
  "Hora marcada",
  "Preço honesto",
];

export default function Ticker() {
  return (
    <div className="relative border-y border-white/[0.07] bg-ink-900/50">
      <div className="marquee py-4" aria-hidden="true">
        <div className="marquee__track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {items.map((item) => (
                <span
                  key={`${copy}-${item}`}
                  className="flex items-center gap-7 px-7 text-[0.7rem] font-bold uppercase tracking-[0.26em] text-ivory-dim/75 sm:text-[0.75rem]"
                >
                  {item}
                  <Sparkle className="h-2.5 w-2.5 text-brass-500" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <span className="sr-only">
        Serviços: {items.join(", ")}.
      </span>
    </div>
  );
}
