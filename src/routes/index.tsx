import { Footer } from "@/components/sections/Footer";

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Cursor } from "@/components/Cursor";
import { Loader } from "@/components/Loader";
import { Nav } from "@/components/Nav";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Journey } from "@/components/sections/Journey";
import { Work } from "@/components/sections/Work";
import { Skills } from "@/components/sections/Skills";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { LinkedInCTA } from "@/components/sections/LinkedInCTA";
import { ContactForm } from "@/components/sections/ContactForm";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Loader onDone={() => setLoaded(true)} />
      {loaded && <SmoothScroll />}
      <Cursor />
      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <Journey />
        <Work />
        <Skills />
        <Services />
        <LinkedInCTA />
<ContactForm />
<Contact />
<Footer />

      </main>
    </>
  );
}
