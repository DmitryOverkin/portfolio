"use client";

import SectionLogo from "@/app/components/SectionLogo/SectionLogo";
import ProjectCard from "./components/ProjectCard";

import {projects} from "@/app/data";

export default function ProjectsSection() {
  return (
    <section id="portfolio" className="py-20">
      <div className="mb-12">
        <SectionLogo name="Portfolio" />
      </div>

      <div className="flex flex-col justify-between md:flex-row md:items-end">
        <h2
          className="
          text-4xl mb-6 text-left max-w-70
            md:text-6xl md:max-w-120 lg:max-w-150
          "
        >
          Explore my portfolio of creative solutions
        </h2>

        <p
          className="
            flex text-gray-500 ml-auto text-right mb-6 max-w-70
            md:max-w-110 md:text-xl
          "
        >
          Selected projects focused on interaction, animation and clean UI
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
