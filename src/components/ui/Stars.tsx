import { Star } from "./Icons";
import { cn } from "../../utils/cn";

export function Stars({
  count = 5,
  className,
}: {
  count?: number;
  className?: string;
}) {
  return (
    <span
      className={cn("inline-flex items-center gap-0.5 text-brass-300", className)}
      aria-label={`${count} de 5 estrelas`}
    >
      {Array.from({ length: count }).map((_, index) => (
        <Star key={index} />
      ))}
    </span>
  );
}
