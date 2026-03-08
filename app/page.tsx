"use client";

import Header from "./layouts/Header/Header";
import HeroSection from "./layouts/HeroSection/HeroSection";
import Skills from "./layouts/Skills/Skillls";
import AboutSection from "./layouts/About/AboutSection";
import ExperienceSection from "./layouts/Experiance/ExperienceSection";
import ProjectsSection from "./layouts/ProjectsSection/ProjectsSection";
import Contact from "./layouts/Contact/Contact";

export default function Home() {
  return (
    <>
      <div
        id="top"
        className="w-full max-w-[1920px] px-12 mx-auto relative z-50"
      >
        <Header />
      </div>

      <main>
        <div className="w-full max-w-[1920px] px-12 mx-auto">
          <HeroSection />
        </div>

        <Skills />

        <AboutSection />

        <div className="w-full max-w-[1920px] px-12 mx-auto">
          <ExperienceSection />
        </div>

        <div className="w-full max-w-[1920px] px-12 mx-auto mb-12">
          <ProjectsSection />
        </div>

        <div className="w-full max-w-[1920px] px-12 mx-auto mb-12">
          <Contact />
        </div>
      </main>
    </>
  );
}
