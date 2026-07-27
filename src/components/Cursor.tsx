import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { damping: 28, stiffness: 380, mass: 0.4 });
  const sy = useSpring(y, { damping: 28, stiffness: 380, mass: 0.4 });
  const rx = useSpring(x, { damping: 40, stiffness: 200, mass: 0.7 });
  const ry = useSpring(y, { damping: 40, stiffness: 200, mass: 0.7 });
  const [mode, setMode] = useState<"idle" | "hover" | "text" | "drag">("idle");
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement;
      const link = t.closest("a, button, [data-magnetic]") as HTMLElement | null;
      const drag = t.closest("[data-cursor='drag']") as HTMLElement | null;
      const txt = t.closest("input, textarea, [contenteditable]") as HTMLElement | null;
      if (drag) {
        setMode("drag");
        setLabel(drag.getAttribute("data-cursor-label") ?? "drag");
      } else if (link) {
        setMode("hover");
        setLabel(link.getAttribute("data-cursor-label"));
      } else if (txt) {
        setMode("text");
        setLabel(null);
      } else {
        setMode("idle");
        setLabel(null);
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  const scale = mode === "hover" ? 2.6 : mode === "drag" ? 3.4 : mode === "text" ? 0.4 : 1;
  const ringScale = mode === "hover" ? 0 : mode === "drag" ? 2.4 : mode === "text" ? 1.6 : 1;

  const dotOpacity = useTransform(useMotionValue(mode === "hover" ? 0.35 : 1), (v) => v);

  return (
    <>
      <motion.div
        style={{ x: sx, y: sy }}
        className="pointer-events-none fixed left-0 top-0 z-[200] hidden md:block mix-blend-difference"
      >
        <motion.div
          animate={{ scale, opacity: mode === "hover" ? 0.5 : 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="-translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-white"
          style={{ opacity: dotOpacity }}
        />
      </motion.div>
      <motion.div
        style={{ x: rx, y: ry }}
        className="pointer-events-none fixed left-0 top-0 z-[199] hidden md:block"
      >
        <motion.div
          animate={{ scale: ringScale, rotate: mode === "drag" ? 360 : 0 }}
          transition={{ scale: { type: "spring", stiffness: 200, damping: 20 }, rotate: { duration: 8, repeat: Infinity, ease: "linear" } }}
          className="-translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-foreground/40 flex items-center justify-center"
        >
          {label && (
            <span className="text-[10px] tracking-widest uppercase text-foreground/70">
              {label}
            </span>
          )}
        </motion.div>
      </motion.div>
    </>
  );
}
