"use client";

import {useState} from "react";
import Link from "next/link";

const menuItems = [
  {name: "Home", to: "#top"},
  {name: "About me", to: "#about"},
  {name: "Experience", to: "#experience"},
  {name: "Portfolio", to: "#portfolio"},
  {name: "Contact", to: "#contact"},
];

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <button
        className="md:hidden p-2 relative z-50"
        onClick={() => setIsOpen(true)}
      >
        <div className="w-8 h-0.5 bg-black mb-1.5" />
        <div className="w-8 h-0.5 bg-black mb-1.5" />
        <div className="w-8 h-0.5 bg-black" />
      </button>

      <ul className="hidden md:flex gap-4 text-lg">
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

      {isOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm md:hidden">
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>

          <ul className="flex flex-col items-center gap-6 text-2xl bg-white p-10 rounded-xl">
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
        </div>
      )}
    </nav>
  );
};

export default NavMenu;
