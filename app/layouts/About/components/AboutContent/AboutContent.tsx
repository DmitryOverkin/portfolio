"use client";

import {useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import {aboutText} from "@/app/data";

gsap.registerPlugin(ScrollTrigger);

type AboutContentProps = {
  blockCount: number;
};

const AboutContent = ({blockCount}: AboutContentProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const blocksRef = useRef<HTMLDivElement[]>([]);

  useGSAP(
    () => {
      const blocks = blocksRef.current;
      if (blocks.length === 0) return;

      gsap.set(blocks[0], {autoAlpha: 1, y: 0});
      gsap.set(blocks.slice(1), {autoAlpha: 0, y: 80});

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${(blockCount - 1) * 100}%`,
          scrub: 1,
          pin: false,
        },
      });

      for (let i = 0; i < blockCount - 1; i++) {
        const currentBlock = blocks[i];
        const nextBlock = blocks[i + 1];

        tl.to(
          currentBlock,
          {
            y: -80,
            autoAlpha: 0,
            duration: 0.8,
            ease: "power2.inOut",
          },
          i + 0.1
        );

        tl.to(
          nextBlock,
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            ease: "power2.inOut",
          },
          i + 0.1
        );
      }
    },
    {scope: containerRef, dependencies: [blockCount]}
  );

  return (
    <div ref={containerRef} className="relative h-full w-full">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover will-change-transform"
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
