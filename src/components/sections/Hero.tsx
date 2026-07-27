import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import sphere from "@/assets/hero-sphere.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const words = ["Crafting", "frontend", "worlds", "that", "feel", "alive."];

  return (
    <section
      id="home"
      ref={ref}
      className="grain relative min-h-screen w-full overflow-hidden flex flex-col justify-center pt-28 pb-28 md:pt-32 md:pb-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[70vh] w-[70vh] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[50vh] w-[50vh] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <motion.div style={{ opacity }} className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="flex items-center justify-between text-mono-xs text-muted-foreground mb-6 md:mb-8">
          <span>(001) — Introduction</span>
          <span className="hidden md:inline">Portfolio / 2026</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <h1 className="text-display text-[11vw] lg:text-[7vw]">
              {words.map((w, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.2em] align-bottom">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 1.1,
                      delay: 0.2 + i * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`inline-block ${w === "alive." ? "italic text-accent" : ""}`}
                  >
                    {w}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-border pt-6"
            >
              <div>
                <div className="text-mono-xs text-muted-foreground mb-2">Name</div>
                <div className="text-lg">Huzaifa</div>
              </div>
              <div>
                <div className="text-mono-xs text-muted-foreground mb-2">Role</div>
                <div className="text-lg">
                  Frontend Developer
                  <br />
                  <span className="text-muted-foreground text-sm">& Full-Stack Engineer</span>
                </div>
              </div>
              <div>
                <div className="text-mono-xs text-muted-foreground mb-2">Status</div>
                <div className="text-lg flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                  </span>
                  Available for work
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="mt-8 flex flex-wrap gap-4 pb-10 md:pb-16"
            >
              <a
                href="/#work"
                data-magnetic
                className="group relative overflow-hidden rounded-full bg-foreground px-7 py-4 text-sm text-background transition-transform hover:scale-[1.02]"
              >
                <span className="relative z-10">View Selected Work →</span>
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                data-magnetic
                className="group relative overflow-hidden rounded-full border border-foreground px-7 py-4 text-sm transition-colors"
              >
                <span className="relative z-10 flex items-center gap-2 transition-colors group-hover:text-background">
                  View Resume
                  <span className="inline-block transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                </span>
                <span className="absolute inset-0 -z-0 translate-y-full bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0" />
              </a>
              <a
                href="/#contact"
                data-magnetic
                className="rounded-full border border-border px-7 py-4 text-sm hover:bg-muted transition-colors"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          <motion.div style={{ y, scale }} className="lg:col-span-4 relative aspect-square">
            <motion.img
              src={sphere}
              alt="Chrome sphere"
              className="w-full h-full object-cover rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, ease: "linear", repeat: Infinity }}
            />
            <div className="absolute -bottom-4 -left-4 text-mono-xs text-muted-foreground max-w-[140px]">
              → An artifact from the void.
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-mono-xs text-muted-foreground flex flex-col items-center gap-2">
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-8 w-px bg-foreground/40"
        />
      </div>
    </section>
  );
}
