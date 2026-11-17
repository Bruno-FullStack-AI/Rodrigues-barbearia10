import { Icon } from './Icons';

type StarsProps = {
  value?: number;
  className?: string;
  starClassName?: string;
};

export default function Stars({ value = 5, className = '', starClassName = 'h-3.5 w-3.5' }: StarsProps) {
  return (
    <span className={`inline-flex items-center gap-0.5 text-gold-400 ${className}`} aria-label={`${value} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Icon
          key={index}
          name="star"
          className={`${starClassName} ${index < Math.round(value) ? '' : 'text-dark-600'}`}
        />
      ))}
    </span>
  );
}
