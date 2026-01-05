"use client";

import {useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";

import Skill from "./components/Skill";
import {skills} from "@/app/data";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const section = skillsRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    gsap.from(section, {
      opacity: 0,
      duration: 0.8,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
      },
    });

    const totalWidth = track.scrollWidth / 2;

    gsap.to(track, {
      x: -totalWidth,
      duration: 30,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <section ref={skillsRef} className="my-10">
      <div className="w-full overflow-hidden">
        <div ref={trackRef} className="flex gap-4 w-max will-change-transform">
          {[...skills, ...skills].map((skill, index) => (
            <Skill
              key={`${skill.name}-${index}`}
              name={skill.name}
              skillIcon={skill.skillIcon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
