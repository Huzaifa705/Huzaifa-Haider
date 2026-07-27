import { motion } from "framer-motion";

const groups = [
  { title: "Tech", items: ["HTML", "CSS", "JavaScript", "C#", "React", "Next.js", "Tailwind", "Framer Motion", "PHP", "MySQL"] },
  { title: "Tools", items: ["GitHub", "VS Code", "Canva", "Vercel", "Linear"] },
  { title: "AI & Automation", items: ["Claude", "ChatGPT", "n8n",  "Prompt Engineering"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32 md:py-48 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-3 text-mono-xs text-muted-foreground mb-6">
          <span className="h-px w-8 bg-muted-foreground" />
          <span>(005) — Toolkit</span>
        </div>
        <h2 className="text-display text-5xl md:text-8xl mb-20">
          The <em className="text-accent">craft</em>.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {groups.map((g, gi) => (
            <div key={g.title}>
              <div className="text-mono-xs text-muted-foreground mb-6">
                0{gi + 1} — {g.title}
              </div>
              <ul className="space-y-1">
                {g.items.map((it, i) => (
                  <motion.li
                    key={it}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03, duration: 0.5 }}
                    className="group flex items-center justify-between border-b border-border py-3 cursor-pointer"
                  >
                    <span className="text-2xl md:text-3xl text-display group-hover:text-accent group-hover:translate-x-2 transition-all duration-500">
                      {it}
                    </span>
                    <span className="text-mono-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                      ↗
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
