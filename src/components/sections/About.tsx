import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import portrait from "@/assets/portrait.jpg";

const text =
  "I'm a Frontend Developer first — obsessed with motion, interaction and pixel-precise UI. I also ship the backend when a project needs it, so I can carry an idea from concept to production without a hand-off.";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const words = text.split(" ");
  const imgY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section id="about" ref={ref} className="relative py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-3 text-mono-xs text-muted-foreground mb-16">
          <span className="h-px w-8 bg-muted-foreground" />
          <span>(002) — About</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 lg:sticky lg:top-32"
          >
            <div className="relative group">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-accent/30 to-transparent blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
              <motion.div
                style={{ y: imgY }}
                className="relative overflow-hidden rounded-2xl border border-border"
              >
                <motion.img
                  src={portrait}
                  alt="Huzaifa — Frontend Developer"
                  width={768}
                  height={1024}
                  loading="lazy"
                  className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-mono-xs">
                  <span className="rounded-full bg-background/70 backdrop-blur px-3 py-1">
                    Huzaifa / 2026
                  </span>
                  <span className="rounded-full bg-accent px-3 py-1 text-accent-foreground">
                    Frontend Dev
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Copy */}
          <div className="lg:col-span-8">
            <p className="text-display text-3xl md:text-5xl lg:text-6xl leading-[1.05]">
              {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;
                const opacity = useTransform(
                  scrollYProgress,
                  [0.1 + start * 0.4, 0.1 + end * 0.4],
                  [0.15, 1],
                );
                return (
                  <motion.span key={i} style={{ opacity }} className="inline-block mr-3">
                    {word}
                  </motion.span>
                );
              })}
            </p>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-10">
              {[
                { k: "Discipline", v: "Frontend Development" },
                { k: "Also", v: "Full-Stack Engineering" },
                { k: "Based in", v: "Karachi, PK" },
                { k: "Born", v: "08 / 11 / 2008" },
              ].map((c) => (
                <div key={c.k}>
                  <div className="text-mono-xs text-muted-foreground mb-2">{c.k}</div>
                  <div className="text-base md:text-lg">{c.v}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border pt-10">
              {[
                { k: "Approach", v: "Craft-first, detail-obsessed, systematically curious." },
                { k: "Focus", v: "Motion, interaction, spatial interfaces." },
                { k: "Belief", v: "The web should feel — not just function." },
              ].map((c) => (
                <div key={c.k}>
                  <div className="text-mono-xs text-muted-foreground mb-3">{c.k}</div>
                  <div className="text-xl">{c.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
