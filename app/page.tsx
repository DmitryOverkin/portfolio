"use client";

import Header from "./layouts/Header/Header";
import HeroSection from "./layouts/HeroSection/HeroSection";
import Skills from "./layouts/Skills/Skillls";

import {useLayoutEffect} from "react";

import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollSmoother} from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  useLayoutEffect(() => {
    const smoother = ScrollSmoother.create({
      smooth: 1,
      effects: true,
    });

    ScrollTrigger.refresh();

    return () => {
      smoother.kill();
    };
  }, []);
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div className="w-full max-w-[1920px] px-12 mx-auto">
          <Header />
        </div>
        <main>
          <div className="w-full max-w-[1920px] px-12 mx-auto">
            <HeroSection />
          </div>
          <Skills />
        </main>
      </div>
    </div>
  );
}
