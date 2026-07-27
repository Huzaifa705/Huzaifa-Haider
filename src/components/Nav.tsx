import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { Magnetic } from "./Magnetic";

const links = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [time, setTime] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > 200 && y > lastY);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const t = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Karachi",
        }) + " PKT",
      );
    }, 1000);

    // Section observer
    const ids = ["home", "about", "work", "skills", "contact"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(t);
      obs.disconnect();
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-[100] p-4 md:p-6"
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-500 ${
            scrolled
              ? "border-border bg-background/70 backdrop-blur-xl shadow-[0_8px_40px_-20px_rgba(0,0,0,0.25)]"
              : "border-transparent bg-transparent"
          }`}
        >
          <Magnetic strength={0.4}>
            <a href="/#home" className="text-mono-xs inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              HUZAIFA<span className="text-accent">.</span>
            </a>
          </Magnetic>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const id = l.href.split("#")[1];
              const isActive = active === id;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  data-magnetic
                  className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <span className={isActive ? "text-foreground" : ""}>{l.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="absolute inset-0 rounded-full bg-foreground/[0.04] scale-0 group-hover:scale-100 transition-transform duration-300" />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <div className="text-mono-xs text-muted-foreground tabular-nums hidden sm:block">
              {time || "—"}
            </div>
            <ThemeToggle />
            <button
              onClick={() => setOpen((o) => !o)}
              className="md:hidden h-8 w-8 flex flex-col items-center justify-center gap-1.5"
              aria-label="Menu"
            >
              <motion.span
                animate={{ rotate: open ? 45 : 0, y: open ? 3 : 0 }}
                className="block h-px w-5 bg-foreground"
              />
              <motion.span
                animate={{ rotate: open ? -45 : 0, y: open ? -3 : 0 }}
                className="block h-px w-5 bg-foreground"
              />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 90% 5%)" }}
            animate={{ clipPath: "circle(150% at 90% 5%)" }}
            exit={{ clipPath: "circle(0% at 90% 5%)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[95] md:hidden bg-background flex flex-col items-center justify-center gap-6"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.06 }}
                className="text-display text-6xl hover:text-accent transition-colors"
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
