"use client";

import SectionLogo from "@/app/components/SectionLogo/SectionLogo";
import AboutContent from "./components/AboutContent/AboutContent";
import {useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import {aboutText} from "@/app/data";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionContentRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      gsap.from(section, {
        opacity: 0,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "top 30%",
          scrub: true,
        },
      });

      ScrollTrigger.create({
        trigger: sectionContentRef.current,
        start: "top top",
        end: `+=${aboutText.length * 120}%`,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      });
    },
    {scope: sectionContentRef}
  );

  return (
    <section id="about" ref={sectionRef} className="relative w-full">
      <div className="about-logo w-full max-w-[1920px] px-12 mx-auto">
        <SectionLogo name="About Me" />
      </div>

      <div
        ref={sectionContentRef}
        className="about-container relative h-screen w-full overflow-hidden mt-12"
      >
        <AboutContent blockCount={aboutText.length} />
      </div>
    </section>
  );
}
