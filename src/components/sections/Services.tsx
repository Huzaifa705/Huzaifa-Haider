import { motion } from "framer-motion";

const services = [
  { n: "01", title: "Frontend Development", desc: "Production-grade React, Next.js & TypeScript applications built for scale." },
  { n: "02", title: "UI/UX Implementation", desc: "Pixel-precise interfaces translated faithfully from design to browser." },
  { n: "03", title: "Modern Web Experiences", desc: "Motion, interaction, and narrative — sites that feel like moments." },
  { n: "04", title: "Backend Infrastructure", desc: "Secure APIs, optimized databases, and scalable architecture powering every interaction." },
  { n: "05", title: "Performance Optimization", desc: "Sub-second loads, Core Web Vitals in the green, no compromise on craft." },
];

export function Services() {
  return (
    <section className="relative py-32 md:py-48 bg-muted/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-3 text-mono-xs text-muted-foreground mb-6">
          <span className="h-px w-8 bg-muted-foreground" />
          <span>(006) — Services</span>
        </div>
        <h2 className="text-display text-5xl md:text-8xl mb-16 max-w-4xl">
          What I <em className="text-accent">build</em>.
        </h2>

        <div className="border-t border-border">
          {services.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative border-b border-border py-8 md:py-10 grid grid-cols-12 gap-4 items-center cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-accent/5 -translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]" />
              <span className="col-span-2 md:col-span-1 text-mono-xs text-muted-foreground relative z-10 pl-10">
                {s.n}
              </span>
              <h3 className="col-span-10 md:col-span-5 text-display text-3xl md:text-5xl relative z-10 group-hover:translate-x-2 transition-transform duration-500">
                {s.title}
              </h3>
              <p className="col-span-12 md:col-span-5 text-muted-foreground relative z-10 md:pl-8">
                {s.desc}
              </p>
              <div className="col-span-12 md:col-span-1 text-right text-2xl relative z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
