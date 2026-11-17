import { useCallback, useEffect, useState } from 'react';
import { business, gallery } from '../data/business';
import { cn } from '../utils/cn';
import { Icon } from './Icons';

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((current) => (current === null ? null : (current + 1) % gallery.length)),
    []
  );
  const prev = useCallback(
    () =>
      setActive((current) =>
        current === null ? null : (current - 1 + gallery.length) % gallery.length
      ),
    []
  );

  useEffect(() => {
    if (active === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowRight') next();
      if (event.key === 'ArrowLeft') prev();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [active, close, next, prev]);

  return (
    <section id="galeria" className="section-pad relative">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="reveal max-w-xl">
            <p className="eyebrow">Galeria</p>
            <h2 className="display mt-4 text-4xl text-white sm:text-5xl lg:text-6xl">
              O trabalho <span className="text-gold-gradient">na cadeira</span>
            </h2>
            <p className="mt-4 text-dark-300">
              Cortes reais, clientes reais e o ambiente da R. Beta. Toque em uma foto para
              ampliar.
            </p>
          </div>

          <a
            href={business.maps.place}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal btn btn-outline btn-sm"
          >
            <Icon name="google" className="h-4 w-4 text-gold-400" />
            Ver fotos no Google
          </a>
        </div>

        <div className="mt-10 grid auto-rows-[11rem] grid-cols-2 gap-3 sm:auto-rows-[13rem] sm:gap-4 lg:auto-rows-[15rem] lg:grid-cols-4">
          {gallery.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActive(index)}
              className={cn(
                'reveal group relative h-full w-full overflow-hidden rounded-xl border border-white/10 bg-dark-900 text-left img-zoom',
                index === 0 && 'col-span-2 row-span-2',
                index === 5 && 'col-span-2 lg:col-span-4'
              )}
              aria-label={`Ampliar foto: ${item.caption}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/10 to-transparent" />

              <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-dark-950/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-200 backdrop-blur">
                {item.tag}
              </span>

              <span className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-2">
                <span className="text-sm font-medium text-white drop-shadow">{item.caption}</span>
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                  <Icon name="sparkle" className="h-3.5 w-3.5" />
                </span>
              </span>
            </button>
          ))}
        </div>

        <p className="mt-5 text-center text-xs text-dark-400">
          Registros reais da barbearia e imagens ilustrativas de cortes e ambiente.
        </p>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Galeria de fotos"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-gold-400 hover:text-gold-300"
            aria-label="Fechar galeria"
          >
            <Icon name="close" className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              prev();
            }}
            className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 text-white transition-colors hover:border-gold-400 hover:text-gold-300 sm:left-6"
            aria-label="Foto anterior"
          >
            <Icon name="arrowLeft" className="h-5 w-5" />
          </button>

          <figure
            className="max-h-[85vh] max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={gallery[active].src}
              alt={gallery[active].alt}
              className="max-h-[75vh] w-auto rounded-lg object-contain"
            />
            <figcaption className="mt-4 text-center">
              <p className="text-sm font-medium text-white">{gallery[active].caption}</p>
              <p className="mt-1 text-xs text-dark-400">
                {active + 1} / {gallery.length} · Barbearia Alison Rodrigues
              </p>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              next();
            }}
            className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 text-white transition-colors hover:border-gold-400 hover:text-gold-300 sm:right-6"
            aria-label="Próxima foto"
          >
            <Icon name="arrowRight" className="h-5 w-5" />
          </button>
        </div>
      )}
    </section>
  );
}
