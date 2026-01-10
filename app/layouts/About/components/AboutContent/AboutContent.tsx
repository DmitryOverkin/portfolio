"use client";

import {useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import {aboutText} from "@/app/data";

gsap.registerPlugin(ScrollTrigger);

export default function AboutContent({blockCount}: {blockCount: number}) {
  const container = useRef<HTMLDivElement>(null);
  const blocks = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    const els = blocks.current;

    gsap.set(els, {autoAlpha: 0, y: 80});
    gsap.set(els[0], {autoAlpha: 1, y: 0});

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: `+=${(blockCount - 1) * 120}%`,
        scrub: true,
      },
    });

    let pos = 0;

    for (let i = 0; i < blockCount - 1; i++) {
      tl.to(
        els[i],
        {y: -150, autoAlpha: 0, duration: 0.8, ease: "power2.inOut"},
        pos
      );

      pos += 0.6;

      tl.fromTo(
        els[i + 1],
        {y: 150, autoAlpha: 0},
        {y: 0, autoAlpha: 1, duration: 0.6, ease: "power2.inOut"},
        pos
      );

      pos += 0.6;
    }
  });

  return (
    <div ref={container} className="relative w-full h-full">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/about/about-bg-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="relative z-20 w-full h-full">
        {aboutText.map((item, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) blocks.current[i] = el;
            }}
            className="absolute inset-0 flex flex-col justify-between px-12 py-16 text-white text-4xl lg:text-6xl"
          >
            <div
              className={`max-w-[400px] md:max-w-[600px] ${
                i % 2 === 0 ? "self-start" : "self-end text-right"
              }`}
            >
              {item.blockText[0]}
            </div>

            <div
              className={`max-w-[400px] md:max-w-[600px] ${
                i % 2 === 0 ? "self-end text-right" : "self-start"
              }`}
            >
              {item.blockText[1]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
