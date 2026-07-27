import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WORDS = ["Hello", "Salaam", "こんにちは", "Bonjour", "Hola", "Ciao", "Welcome"];

export function Loader({ onDone }: { onDone: () => void }) {
  const [pct, setPct] = useState(0);
  const [gone, setGone] = useState(false);
  const [wi, setWi] = useState(0);

  useEffect(() => {
    let n = 0;
    const id = setInterval(() => {
      n += Math.random() * 9 + 3;
      if (n >= 100) {
        n = 100;
        clearInterval(id);
        setTimeout(() => {
          setGone(true);
          setTimeout(onDone, 1100);
        }, 350);
      }
      setPct(Math.floor(n));
    }, 85);

    const w = setInterval(() => setWi((i) => (i + 1) % WORDS.length), 260);
    return () => {
      clearInterval(id);
      clearInterval(w);
    };
  }, [onDone]);

  return (
    <AnimatePresence>
      {!gone && (
        <motion.div
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[300] flex flex-col justify-between overflow-hidden bg-background p-6 md:p-10"
          style={{ clipPath: "inset(0 0 0 0)" }}
        >
          {/* ambient */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-40 left-1/2 h-[70vh] w-[70vh] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]" />
          </div>

          <div className="flex items-start justify-between text-mono-xs text-muted-foreground">
            <span>Huzaifa © 2026</span>
            <motion.span
              key={wi}
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="inline-block"
            >
              {WORDS[wi]}
            </motion.span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-mono-xs text-muted-foreground mb-6">Portfolio / 2026</span>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-display text-[18vw] md:text-[14vw] leading-none"
              >
                HUZAIFA<span className="text-accent">.</span>
              </motion.h1>
            </div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-mono-xs text-muted-foreground mt-6"
            >
              Frontend Engineer — Karachi, PK
            </motion.span>
          </div>

          <div className="flex items-end justify-between gap-6">
            <div className="flex-1 h-px bg-border relative overflow-hidden">
              <motion.div
                animate={{ width: `${pct}%` }}
                transition={{ ease: "linear" }}
                className="h-full bg-foreground"
              />
              <motion.div
                animate={{ x: `${pct}%` }}
                transition={{ ease: "linear" }}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-accent"
              />
            </div>
            <span className="text-display text-4xl md:text-6xl tabular-nums leading-none">
              {String(pct).padStart(3, "0")}
              <span className="text-accent">%</span>
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
