"use client";

import HTMLElement from 'react';

import SectionLogo from "@/app/components/SectionLogo/SectionLogo";
import ProjectCard from "./components/ProjectCard";

import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";

import {ScrollTrigger} from "gsap/ScrollTrigger";


import {projects} from "@/app/data";

export default function ProjectsSection() {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef<HTMLElement>(null);

useGSAP(() => {
  const section = sectionRef.current;
  if (!section) return;

  
  const elements = Array.from(section.children) as HTMLElement[];

  gsap.from(elements, {
    y: 80,          
    opacity: 0,      
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,    
    scrollTrigger: {
      trigger: section,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  });
}, []);
  return (
    <section ref={sectionRef} id="portfolio" className="py-20">
      <div className="mb-12">
        <SectionLogo name="Портфолио" />
      </div>

      <div className="flex flex-col justify-between md:flex-row md:items-end">
        <h2
          className="
          text-4xl mb-6 text-left max-w-70
            md:text-6xl md:max-w-120 lg:max-w-150
          "
        >
          Мои проекты
        </h2>

        <p
          className="
            flex text-gray-500 ml-auto text-right mb-6 max-w-70
            md:max-w-110 md:text-xl
          "
        >
          Проекты с акцентом на интерактивность, анимации и чистый интерфейс.
        </p>
      </div>

      <ul
        className="
          grid gap-6
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
        "
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </section>
  );
}
