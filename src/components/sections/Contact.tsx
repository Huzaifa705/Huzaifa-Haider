import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 md:py-56 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 text-center">
        <div className="flex items-center justify-center gap-3 text-mono-xs text-muted-foreground mb-10">
          <span className="h-px w-8 bg-muted-foreground" />
          <span>(007) — Contact</span>
          <span className="h-px w-8 bg-muted-foreground" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-display text-[14vw] md:text-[10vw] leading-[0.9]"
        >
          Let's build<br />something<br /><em className="text-accent">unforgettable.</em>
        </motion.h2>

        <motion.a
          href="mailto:tcs252372@gmail.com"
          data-magnetic
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 inline-block rounded-full border border-border px-10 py-6 text-xl hover:bg-foreground hover:text-background transition-colors duration-500"
        >
          tcs252372@gmail.com 
        </motion.a>

        <div className="mt-24 flex flex-wrap justify-center gap-8 text-mono-xs text-muted-foreground">
          {[
            { l: "LinkedIn", h: "https://www.linkedin.com/in/huzaifa-haider-9024b6387/" },
            { l: "Read.Resume", h: "/resume.pdf" },
          ].map((s) => (
            <a key={s.l} href={s.h} data-magnetic className="hover:text-foreground transition-colors">
              {s.l} ↗
            </a>
          ))}
        </div>
      </div>

      
    </section>
  );
}
