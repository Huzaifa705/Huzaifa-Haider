import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Cursor } from "@/components/Cursor";
import { getProject, projects, type Project } from "@/lib/projects";

export const Route = createFileRoute("/work/$slug")({
  head: ({ params }) => {
    const p = getProject(params.slug);
    return {
      meta: [
        { title: p ? `${p.title} — Case Study · Huzaifa` : "Case Study · Huzaifa" },
        {
          name: "description",
          content: p?.description ?? "Project case study by Huzaifa.",
        },
        { property: "og:title", content: p?.title ?? "Case Study" },
        { property: "og:description", content: p?.description ?? "" },
        { property: "og:image", content: p?.img ?? "" },
      ],
    };
  },
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  component: ProjectPage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="text-mono-xs text-muted-foreground mb-4">404</div>
        <h1 className="text-display text-4xl mb-6">Project not found</h1>
        <Link to="/" className="underline underline-offset-4">
          ← Back home
        </Link>
      </div>
    </div>
  ),
});

function ProjectPage() {
  const { project } = Route.useLoaderData() as { project: Project };
  const p = project;
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      <Cursor />
      <Nav />
      <main className="relative pt-32 md:pt-40 pb-32">
        {/* Header */}
        <section className="mx-auto max-w-7xl px-6">
          <Link
            to="/"
            hash="work"
            className="inline-flex items-center gap-2 text-mono-xs text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="h-3 w-3" /> Back to work
          </Link>

          <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
            <div>
              <div className="text-mono-xs text-muted-foreground mb-4">
                {p.n} · {p.subtitle}
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-display text-6xl md:text-9xl leading-[0.9]"
              >
                {p.title}
              </motion.h1>
            </div>
            <div className="grid grid-cols-3 gap-8 text-sm">
              <div>
                <div className="text-mono-xs text-muted-foreground mb-2">Year</div>
                {p.year}
              </div>
              <div>
                <div className="text-mono-xs text-muted-foreground mb-2">Role</div>
                {p.role}
              </div>
              <div>
                <div className="text-mono-xs text-muted-foreground mb-2">Client</div>
                {p.client}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-3xl border border-border"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full aspect-[16/9] object-cover"
            />
          </motion.div>
        </section>

        {/* Overview + Tech */}
        <section className="mx-auto max-w-7xl px-6 mt-32 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <div className="text-mono-xs text-muted-foreground mb-6">Overview</div>
            <p className="text-display text-2xl md:text-4xl leading-[1.15]">{p.description}</p>
          </div>
          <div className="lg:col-span-4">
            <div className="text-mono-xs text-muted-foreground mb-6">Tech stack</div>
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs border border-border rounded-full px-3 py-1.5 text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
            {(p.liveUrl || p.githubUrl) && (
              <div className="mt-8 flex flex-col gap-3 text-sm">
                {p.liveUrl && (
                  <a href={p.liveUrl} className="underline underline-offset-4 hover:text-accent">
                    Visit live site ↗
                  </a>
                )}
                {p.githubUrl && (
                  <a href={p.githubUrl} className="underline underline-offset-4 hover:text-accent">
                  </a>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-7xl px-6 mt-32">
          <div className="text-mono-xs text-muted-foreground mb-8">Key features</div>
          <div className="border-t border-border">
            {p.features.map((f, i) => (
              <motion.div
                key={f}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
                className="group grid grid-cols-12 items-center border-b border-border py-6 gap-4"
              >
                <span className="col-span-2 md:col-span-1 text-mono-xs text-muted-foreground">
                  0{i + 1}
                </span>
                <span className="col-span-10 md:col-span-11 text-xl md:text-2xl group-hover:translate-x-2 group-hover:text-accent transition-all duration-500">
                  {f}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section className="mx-auto max-w-7xl px-6 mt-32">
          <div className="text-mono-xs text-muted-foreground mb-8">Previews</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {p.gallery.map((g, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`overflow-hidden rounded-2xl border border-border ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                <img
                  src={g}
                  alt={`${p.title} preview ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Code snippet
        <section className="mx-auto max-w-7xl px-6 mt-32">
          <div className="text-mono-xs text-muted-foreground mb-8">Code excerpt · {p.snippet.lang}</div>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
            <div className="flex items-center gap-2 border-b border-border px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
              <span className="ml-3 text-mono-xs text-muted-foreground">
                {p.slug}.{p.snippet.lang}
              </span>
            </div>
            <pre className="p-6 overflow-x-auto text-sm leading-relaxed font-mono">
              <code>{p.snippet.code}</code>
            </pre>
          </div>
        </section> */}

        {/* Next */}
        <section className="mx-auto max-w-7xl px-6 mt-40">
          <Link
            to="/work/$slug"
            params={{ slug: next.slug }}
            className="group block border-t border-border pt-10"
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="text-mono-xs text-muted-foreground mb-2">Next project</div>
                <h3 className="text-display text-4xl md:text-6xl group-hover:text-accent transition-colors duration-500">
                  {next.title}
                </h3>
              </div>
              <span className="text-2xl transition-transform duration-500 group-hover:translate-x-3">
                →
              </span>
            </div>
          </Link>
        </section>
      </main>
    </>
  );
}
