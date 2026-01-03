"use client";

import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import gsap from "gsap";

import Image from "next/image";

const Logo = () => {
  const logoRef = useRef(null);

  useGSAP(() => {
    gsap.from(logoRef.current, {
      y: -25,
      opacity: 0,
      duration: 0.8,
      ease: "power1.inOut",
    });
  }, []);
  
  return (
    <Image
      ref={logoRef}
      src={"./logo.svg"}
      alt="logo"
      width={120}
      height={70}
    />
  );
};

export default Logo;
