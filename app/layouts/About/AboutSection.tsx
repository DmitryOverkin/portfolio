"use client";

import SectionLogo from "@/app/components/SectionLogo/SectionLogo";
import AboutContent from "./components/AboutContent/AboutContent";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {useRef, useLayoutEffect} from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {aboutText} from "@/app/data";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const videoContainer = videoContainerRef.current;
      if (!section) return;

      gsap.set(section, {force3D: true});
      if (videoContainer) {
        gsap.set(videoContainer, {force3D: true});
        gsap.set(videoContainer.querySelector("video"), {force3D: true});
      }

      gsap.fromTo(
        logoRef.current,
        {y: 50, opacity: 0},
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        videoContainer,
        {opacity: 0},
        {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${(aboutText.length - 1) * 80}%`,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        pinType: "transform",
      });
    },
    {scope: sectionRef}
  );

  useLayoutEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <section className="relative w-full will-change-transform">
      <div
        ref={logoRef}
        className="w-full max-w-[1920px] px-12 mx-auto opacity-0 will-change-transform"
      >
        <SectionLogo name="About Me" />
      </div>

      <div
        id="about"
        ref={sectionRef}
        className="relative h-[100svh] w-full overflow-hidden mt-12 will-change-transform"
      >
        <div
          ref={videoContainerRef}
          className="absolute inset-0 opacity-0 will-change-transform"
        >
          <AboutContent blockCount={aboutText.length} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
