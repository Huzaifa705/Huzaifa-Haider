import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import post1 from "@/assets/linkedin-post-1.png";
import post2 from "@/assets/linkedin-post-2.png";
import post3 from "@/assets/linkedin-post-3.png";
import post4 from "@/assets/linkedin-post-4.png";

const posts = [
  {
    image: post1,
  },
  {
    image: post2,
  },
  {
    image: post3,
  },
  {
    image: post4,
  },
];

export function LinkedInCTA() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-0 h-[50vh] w-[50vh] rounded-full bg-accent/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[40vh] w-[40vh] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-3 text-mono-xs text-accent mb-8">
          <span className="text-lg">✳</span>
          <span>LETS CONNECT!</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-display text-5xl md:text-8xl leading-[0.95] max-w-5xl"
        >
          Would <em className="text-accent not-italic bg-accent/10 px-4 rounded-md">love</em> to
          connect on my <span className="italic">LinkedIn</span>.
        </motion.h2>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {posts.map((p, i) => (
            <motion.a
              href="https://www.linkedin.com/in/huzaifa-haider-9024b6387/"
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className={`group relative aspect-[3/4] overflow-hidden rounded-2xl border border-border bg-card p-5 flex flex-col justify-between`}
            >
              {/* Full-card background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${p.image})` }}
              />
              {/* Dark gradient for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
              {/* Accent tint overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${p.tint} opacity-60 group-hover:opacity-100 transition-opacity duration-700`}
              />
              <div className="relative z-10 flex items-center gap-2 text-mono-xs text-white/80">
                <div className="h-7 w-7 rounded-full bg-white/15 backdrop-blur flex items-center justify-center">
                  <Linkedin className="h-3.5 w-3.5 text-white" />
                </div>
              </div>
              <div className="relative z-10">
                <div className="text-xs text-white/70 mb-2">{p.meta}</div>
                <div className="text-base md:text-lg font-medium leading-snug text-white">{p.title}</div>
              </div>
              <div className="relative z-10 text-mono-xs text-white/70 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                <span>→</span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 flex justify-center md:justify-end"
        >
          <a
            href="https://www.linkedin.com/in/huzaifa-haider-9024b6387/"
            target="_blank"
            rel="noopener noreferrer"
            data-magnetic
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-accent px-8 py-4 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.03]"
          >
            <span className="relative z-10">Connect Now</span>
            <Linkedin className="relative z-10 h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
