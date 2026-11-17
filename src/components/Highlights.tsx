import { highlights } from '../data/business';
import { Icon } from './Icons';

export default function Highlights() {
  return (
    <section className="relative border-y border-white/5 bg-dark-900/50">
      <div className="container-x grid gap-px py-2 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item, index) => (
          <div
            key={item.title}
            className={`reveal stagger-${index + 1} flex items-start gap-3.5 px-1 py-6 sm:px-5 lg:border-l lg:border-white/5 lg:first:border-l-0`}
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold-500/25 bg-gold-500/5 text-gold-400">
              <Icon name={item.icon} className="h-[18px] w-[18px]" />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-dark-400">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
