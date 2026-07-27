import { Fragment } from "react";

export function Marquee({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  const list = [...items, ...items];
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />
      <div className="flex marquee whitespace-nowrap gap-16 will-change-transform">
        {list.map((it, i) => (
          <Fragment key={i}>
            <span className="text-display text-6xl md:text-8xl text-muted-foreground/40 hover:text-accent transition-colors duration-500">
              {it}
            </span>
            <span className="text-display text-6xl md:text-8xl text-accent">✳</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
