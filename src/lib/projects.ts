import madams from "@/assets/project-madams.jpg";
import haider1 from "@/assets/haider1.1.png";
import haider2 from "@/assets/haider1.2.png";
import haider3 from "@/assets/haider1.3.png";



import ai from "@/assets/project-ai.jpg";
import alib from "@/assets/project-alibrahim.jpg";
import alib1 from "@/assets/alibrahim1.1.png";
import alib2 from "@/assets/alibrahim1.2.png";


import cogni from "@/assets/cogni.png";
import cogni1 from "@/assets/cogni1.1.png";
import cogni2 from "@/assets/cogni1.2.png";
import cogni3 from "@/assets/cogni1.3.png";







export type Project = {
  slug: string;
  n: string;
  title: string;
  subtitle: string;
  tags: string[];
  img: string;
  color: string;
  year: string;
  role: string;
  client: string;
  liveUrl?: string;
  githubUrl?: string;
  description: string;
  features: string[];
  tech: string[];
  snippet: { lang: string; code: string };
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "haider-builders",
    n: "01",
    title: "Haider Builders",
    subtitle: "Modern Construction Website",
    tags: ["Next.js", "Tailwind", "Lucide"],
    img: madams,
    color: "from-rose-500/20 to-transparent",
    year: "2026",
    role: "Frontend Engineer",
    client: "Ali Haider",
    liveUrl: "https://www.haiderbuilders.com",
    description:
      "A premium digital presence for a modern construction company. Architectural excellence meets seamless user experience through immersive visuals, refined interactions, and compelling project storytelling.",
    features: [
      "Cinematic homepage with GSAP-powered scroll storytelling",
      "Interactive project portfolio with premium image galleries",
      "Comprehensive service showcase for residential & commercial construction",
      "SEO-optimized architecture with fast performance and responsive design",
      "Fully responsive experience with Core Web Vitals in the green",
    ],
    tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "GSAP", "Vercel", "Framer Motion"],
    snippet: {
      lang: "tsx",
      code: `// Hero reveal animation
useGSAP(() => {
  const tl = gsap.timeline();

  tl.from(".hero-title", {
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
  })
  .from(".hero-subtitle", {
    y: 30,
    opacity: 0,
    duration: 0.8,
  }, "-=0.7")
  .from(".hero-cta", {
    y: 20,
    opacity: 0,
    stagger: 0.15,
  }, "-=0.5");
});`,
    },
    gallery: [haider3, haider1, haider2],
  },
  {
    slug: "al-ibrahim-chemical",
    n: "02",
    title: "Al Ibrahim Group",
    subtitle: "Corporate Business Website",
    tags: ["React", "Framer Motion", "3D"],
    img: alib,
    color: "from-blue-500/20 to-transparent",
    year: "2025",
    role: "Frontend Lead",
    client: "Al Ibrahim Chemical Co.",
    liveUrl: "https://alibrahimgroupofcompanies.com",
    description:
      "A corporate identity site for an industrial chemical manufacturer. Balances heavy-industry credibility with a modern, motion-rich digital presence to attract enterprise clients globally.",
    features: [
      "Global chemical & LED solutions showcase",
      "Industry-focused product portfolio",
      "Request a Quote & contact workflow",
      "Worldwide sourcing & logistics network",
      "SEO-optimized corporate presence for B2B lead generation",
    ],
    tech: ["React", "TypeScript", "Framer Motion", "React Three Fiber", "Tailwind CSS"],
    snippet: {
      lang: "tsx",
      code: `// Animated product categories on scroll
useGSAP(() => {
  gsap.from(".category-card", {
    y: 80,
    opacity: 0,
    stagger: 0.1,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".categories-grid",
      start: "top 80%",
    },
  });
});`,
    },
    gallery: [alib, alib1, alib2],
  },
  {
  slug: "cogni-close",
  n: "03",
  title: "Cogni Close",
  subtitle: "Autonomous AI SDR",
  tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  img: cogni,
  color: "from-purple-500/20 to-transparent",
  year: "2026",
  role: "Frontend Engineer",
  client: "Sienna Walsh",
  liveUrl: "https://cogniclose.com",
  description:
    "A modern AI-powered sales platform helping businesses streamline outreach, automate engagement, and close more deals efficiently.",
  features: [
    "AI-powered sales automation",
    "Smart lead management",
    "Automated email outreach",
    "Real-time analytics dashboard",
    "Seamless CRM integration",
  ],
  tech: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
  ],
  snippet: {
  lang: "tsx",
  code: `// Animated AI dashboard card
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
>
  <SalesAnalytics />
</motion.div>`,
},
  gallery: [cogni1, cogni2, cogni3],
},
  
  
  
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
