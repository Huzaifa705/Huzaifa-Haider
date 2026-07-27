import { motion } from "framer-motion";
import { useState } from "react";

// Formspree: replace YOUR_FORM_ID with your actual Formspree form ID.
// Docs: https://formspree.io/f/YOUR_FORM_ID
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwvgrdon";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        const body = await res.json().catch(() => ({}));
        setError(body?.errors?.[0]?.message ?? "Something went wrong. Try again.");
        setStatus("error");
      }
    } catch {
      setError("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section id="contact-form" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex items-center gap-3 text-mono-xs text-muted-foreground mb-6">
          <span className="h-px w-8 bg-muted-foreground" />
          <span>(008) — Say Hi</span>
        </div>
        <h2 className="text-display text-5xl md:text-7xl leading-none mb-4">
          Start a <em className="text-accent">conversation</em>.
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mb-16">
          Have a project, an idea, or just want to talk shop? Drop a note and I'll get back to you within 24 hours.
        </p>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Field label="Your name" name="name" required placeholder="Jane Doe" />
            <Field label="Email" name="email" type="email" required placeholder="jane@studio.com" />
          </div>
          <Field label="Subject" name="subject" placeholder="Let's build something" />
          <div>
            <label className="block text-mono-xs text-muted-foreground mb-3">Message</label>
            <textarea
              name="message"
              required
              rows={6}
              placeholder="Tell me about your project…"
              className="w-full bg-transparent border-b border-border py-3 text-lg focus:outline-none focus:border-accent transition-colors resize-none"
            />
          </div>

          {/* honeypot */}
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />

          <div className="flex flex-wrap items-center gap-6 pt-4">
            <button
              type="submit"
              disabled={status === "sending"}
              data-magnetic
              className="group relative overflow-hidden rounded-full bg-foreground px-8 py-4 text-sm text-background disabled:opacity-60"
            >
              <span className="relative z-10 flex items-center gap-2">
                {status === "sending" ? "Sending…" : status === "sent" ? "Sent ✓" : "Send message"}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </button>
            {status === "sent" && (
              <span className="text-sm text-accent">Thanks — I'll reply soon.</span>
            )}
            {status === "error" && <span className="text-sm text-red-500">{error}</span>}
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-mono-xs text-muted-foreground mb-3">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-border py-3 text-lg focus:outline-none focus:border-accent transition-colors"
      />
    </div>
  );
}
