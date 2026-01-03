"use client";

import {useGSAP} from "@gsap/react";
import gsap from "gsap";

import Logo from "@/app/components/Logo/Logo";
import NavMenu from "./components/NavMenu";
import {useRef} from "react";

const Header = () => {
  const headerRef = useRef(null);

  useGSAP(() => {
    gsap.from(headerRef.current, {
      y: -25,
      opacity: 0,
      duration: 0.8,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <header
      ref={headerRef}
      id="top"
      className="w-full flex items-center justify-between md:mb-10"
    >
      <Logo />
      <NavMenu />
    </header>
  );
};

export default Header;
