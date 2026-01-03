"use client";

import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useRef} from "react";

const HeroTitle = () => {
  const h1Ref = useRef(null);

  useGSAP(() => {
    gsap.from(h1Ref.current, {
      x: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power1.inOut",
      scale: 0.9,
    });
  }, []);

  return (
    <h1
      ref={h1Ref}
      className="text-7xl w-full max-w-96 text-center 
                md:text-8xl md:text-left md:max-w-[450px] md:flex md:items-center 
                lg:items-end lg:max-w-[700px] lg:text-9xl
                2xl:text-[180px] 2xl:max-w-220"
    >
      Software Developer
    </h1>
  );
};

export default HeroTitle;
