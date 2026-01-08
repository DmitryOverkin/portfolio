"use client";

import {useState, useRef, useEffect} from "react";
import {createPortal} from "react-dom";
import {useGSAP} from "@gsap/react";
import Link from "next/link";
import gsap from "gsap";
import {ScrollSmoother} from "gsap/ScrollSmoother";
import { menuItems } from "@/app/data";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(
    null
  );

  const burgerRef = useRef<HTMLButtonElement | null>(null);
  const navLinksRef = useRef<HTMLUListElement | null>(null);
  const menuRef = useRef<HTMLUListElement | null>(null);

  useGSAP(() => {
    gsap.from(burgerRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power1.inOut",
    });

    gsap.from(navLinksRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power1.inOut",
    });
  }, []);

  useEffect(() => {
    setPortalContainer(document.body);
  }, []);

  useEffect(() => {
    const tick = () => {
      const smoother = ScrollSmoother.get();
      setScrolled(smoother ? smoother.scrollTop() > 400 : window.scrollY > 400);
    };

    gsap.ticker.add(tick);

    return () => gsap.ticker.remove(tick);
  }, []);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  const burger = (
    <button
      ref={burgerRef}
      onClick={() => setIsOpen(!isOpen)}
      className={`md:hidden flex flex-col gap-1.5 items-center justify-center z-50 ${
        scrolled ? "p-3 bg-black rounded-full" : ""
      }`}
    >
      <div
        className={`w-8 h-0.5 transition-all duration-300 ${
          scrolled ? "bg-white" : "bg-black"
        } ${isOpen ? "rotate-45 translate-y-2" : ""}`}
      />

      <div
        className={`w-8 h-0.5 transition-all duration-300 ${
          scrolled ? "bg-white" : "bg-black"
        } ${isOpen ? "opacity-0" : ""}`}
      />

      <div
        className={`w-8 h-0.5 transition-all duration-300 ${
          scrolled ? "bg-white" : "bg-black"
        } ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
      />
    </button>
  );

  return (
    <nav>
      {scrolled && portalContainer
        ? createPortal(
            <div className="fixed top-4 right-4 z-50">{burger}</div>,
            portalContainer
          )
        : burger}

      <ul ref={navLinksRef} className="hidden md:flex gap-4 text-lg">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.to}
              className="relative p-1 text-black before:absolute before:inset-0 before:bg-[hsl(45_100%_80%)] before:opacity-0 before:transition hover:before:opacity-100 before:z-[-1]"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {isOpen &&
        portalContainer &&
        createPortal(
          <div
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm md:hidden"
            onClick={handleBackdropClick}
          >
            <ul
              ref={menuRef}
              className="flex flex-col items-center gap-6 text-2xl bg-white p-10 rounded-xl"
            >
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.to}
                    className="relative p-2 text-black before:absolute before:inset-0 before:bg-[hsl(45_100%_80%)] before:opacity-0 before:transition hover:before:opacity-100 before:z-[-1]"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>,
          portalContainer
        )}
    </nav>
  );
};

export default NavMenu;
