"use client";

import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useRef} from "react";

import Image from "next/image";

const HeroImage = () => {
  const imgRef = useRef(null);

  useGSAP(() => {
    gsap.from(imgRef.current, {
      x: 50,
      duration: 1,
      opacity: 0,
      ease: "power1.inOut",
      scale: 0.9
    });
  }, []);

  return (
    <div
      ref={imgRef}
      className="rounded-2xl overflow-hidden w-full max-w-80 h-fit"
    >
      <Image
        src={"/main-image.jpg"}
        alt="Image of Dmitry Overkin"
        width={700}
        height={100}
        objectFit="contain"
      />
    </div>
  );
};

export default HeroImage;
