import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { projects } from "@/lib/projects";

export function Work() {
  return (
    <section id="work" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-20 flex-wrap gap-6">
          <div>
            <div className="flex items-center gap-3 text-mono-xs text-muted-foreground mb-6">
              <span className="h-px w-8 bg-muted-foreground" />
              <span>(004) — Selected Work</span>
            </div>
            <h2 className="text-display text-5xl md:text-8xl leading-none">
              Case<br />
              <em className="text-accent">studies.</em>
            </h2>
          </div>
          <div className="text-mono-xs text-muted-foreground">
            {projects.length} projects — 2024→2026
          </div>
        </div>

        <div className="flex flex-col gap-32">
          {projects.map((p, i) => (
            <motion.article
              key={p.n}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                i % 2 ? "lg:[direction:rtl]" : ""
              }`}
            >
              <Link
                to="/work/$slug"
                params={{ slug: p.slug }}
                className="lg:col-span-8 group relative block overflow-hidden rounded-2xl [direction:ltr]"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${p.color} z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                />
                <motion.img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1600}
                  height={1000}
                  className="w-full aspect-[16/10] object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="absolute top-4 left-4 z-20 text-mono-xs bg-background/60 backdrop-blur px-3 py-1 rounded-full">
                  {p.n} / {String(projects.length).padStart(2, "0")}
                </div>
                <div className="absolute bottom-4 right-4 z-20 text-mono-xs bg-background/60 backdrop-blur px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  View case study →
                </div>
              </Link>
              <div className="lg:col-span-4 [direction:ltr]">
                <div className="text-mono-xs text-muted-foreground mb-4">{p.subtitle}</div>
                <h3 className="text-display text-4xl md:text-5xl mb-6">{p.title}</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs border border-border rounded-full px-3 py-1 text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-sm">
                  <Link
                    to="/work/$slug"
                    params={{ slug: p.slug }}
                    data-magnetic
                    className="underline underline-offset-4 hover:text-accent"
                  >
                    Case study ↗
                  </Link>
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      data-magnetic
                      className="underline underline-offset-4 hover:text-accent"
                    >
                      Live ↗
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
