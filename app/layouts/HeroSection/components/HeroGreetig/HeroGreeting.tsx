"use client";

import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";

const HeroGreeting = () => {
  const textRef = useRef(null);

  useGSAP(() => {
    gsap.from(textRef.current, {
      x: 50,
      opacity: 0,
      duration: 1.2,
      scale: 0.9,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <p
      ref={textRef}
      className="w-full text-xl max-w-80 text-right 
    md:flex md:items-end 
    lg:block  lg:text-base
    xl:text-xl
    "
    >
      Hi, I&apos;m Dmitry, A software developer. <br /> I specialize in building
      modern,
      <br /> user-friendly web applications.
    </p>
  );
};

export default HeroGreeting;
