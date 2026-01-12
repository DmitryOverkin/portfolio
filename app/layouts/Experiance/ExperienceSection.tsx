"use client";

import SectionLogo from "@/app/components/SectionLogo/SectionLogo";
import YearGrowth from "./components/YearGrowth";
import {experience} from "@/app/data";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-15">
      <div className="mb-12">
        <SectionLogo name="Experience" />
      </div>

      <div className="flex flex-col justify-between md:flex-row md:items-end">
        <h2
          className="text-4xl mb-6 text-left max-w-70
          md:text-6xl md:max-w-120 lg:max-w-150"
        >
          A Yearly snapshot of my developing growth
        </h2>

        <p
          className="flex text-gray-500 ml-auto text-right mb-6 max-w-70
          md:max-w-110 md:text-xl"
        >
          A snapshot of my growth from a computer science student to a
          professional front-end engineer.
        </p>
      </div>

      <div className="relative  md:h-auto overflow-visible">
        <div className="relative h-full">
          {experience.map((item) => (
            <YearGrowth key={item.id} experiance={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
