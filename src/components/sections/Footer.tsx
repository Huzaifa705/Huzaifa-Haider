import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 py-12 border-t border-border flex flex-wrap justify-between gap-4 text-mono-xs text-muted-foreground">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        © 2026 Huzaifa — All rights reserved
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        Handcrafted with care in Karachi, PK
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        v1.0
      </motion.span>
    </footer>
  );
}
