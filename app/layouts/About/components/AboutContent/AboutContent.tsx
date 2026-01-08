"use client";

import {useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

import {aboutText} from "@/app/data";

gsap.registerPlugin(ScrollTrigger);

const AboutContent = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const blocksRef = useRef<HTMLDivElement[]>([]);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const blocks = blocksRef.current;

      blocks.forEach((block) => {
        gsap.set(block, {
          y: 120,
          autoAlpha: 0,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${blocks.length * 120}%`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      blocks.forEach((block, i) => {
        const tlStep = 1;

        tl.to(
          block,
          {
            keyframes: [
              {y: 0, autoAlpha: 1, duration: 0.6},
              {y: 0, autoAlpha: 1, duration: 0.4},
              {y: -120, autoAlpha: 0, duration: 0.6},
            ],
            ease: "none",
          },
          i * tlStep
        );
      });
    },
    {scope: sectionRef}
  );

  return (
    <div
      id="about"
      ref={sectionRef}
      className="relative h-[100svh] w-full overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/about/about-bg-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="relative z-20 h-full">
        {aboutText.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              ref={(el) => {
                if (el) blocksRef.current[index] = el;
              }}
              className="absolute inset-0 flex flex-col justify-between px-12 py-16 text-white"
            >
              <div
                className={`max-w-[420px] text-4xl lg:text-6xl lg:max-w-[600px] leading-tight ${
                  isEven ? "self-start text-left" : "self-end text-right"
                }`}
              >
                {item.blockText[0]}
              </div>

              <div
                className={`max-w-[420px] text-4xl lg:text-6xl lg:max-w-[600px] leading-tight ${
                  isEven ? "self-end text-right" : "self-start text-left"
                }`}
              >
                {item.blockText[1]}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutContent;
