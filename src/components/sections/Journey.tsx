import { motion } from "framer-motion";

const items = [
  { year: "Present", title: "Frontend Engineer", org: "CogniClose", note: "Built scalable responsive web interfaces using modern frontend technologies." },
  { year: "2025-2026", title: "Full Stack Engineer", org: "Higlax Solutions", note: "Built scalable full-stack applications with modern technologies and APIs." },
  { year: "2024-2025", title: "Frontend Engineer", org: "Taskimation", note: "Developed AI sales platform interfaces with React, Tailwind, and APIs." },
];

export function Journey() {
  return (
    <section className="relative py-32 md:py-48 bg-muted/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-3 text-mono-xs text-muted-foreground mb-6">
              <span className="h-px w-8 bg-muted-foreground" />
              <span>(003) — Trajectory</span>
            </div>
            <h2 className="text-display text-5xl md:text-7xl">The journey<br /><em className="text-accent">so far.</em></h2>
          </div>
          <div className="text-mono-xs text-muted-foreground max-w-xs">
            A non-linear path shaped by curiosity, systems thinking, and a refusal to accept "good enough".
          </div>
        </div>

        <ol className="relative border-l border-border">
          {items.map((it, i) => (
            <motion.li
              key={it.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-8 md:pl-16 py-8 border-b border-border group"
            >
              <span className="absolute -left-[5px] top-12 h-2.5 w-2.5 rounded-full bg-foreground group-hover:bg-accent transition-colors" />
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                <div className="md:col-span-2 text-mono-xs text-muted-foreground">{it.year}</div>
                <div className="md:col-span-4 text-display text-2xl md:text-3xl">{it.title}</div>
                <div className="md:col-span-3 text-muted-foreground">{it.org}</div>
                <div className="md:col-span-3 text-sm text-muted-foreground">{it.note}</div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
