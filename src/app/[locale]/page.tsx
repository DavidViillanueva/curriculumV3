"use client";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Experience from "@/components/sections/experience";
import Contact from "@/components/sections/contact";
import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <SiteHeader />
      <div style={{ scrollBehavior: "smooth", display: "block" }}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </div>
      <SiteFooter />
    </div>
  );
}
