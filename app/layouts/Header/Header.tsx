"use client";

import Logo from "@/app/components/Logo/Logo";
import NavMenu from "./components/NavMenu";

const Header = () => {
  return (
    <div id="top" className="w-full flex items-center justify-between">
      <Logo />
      <NavMenu />
    </div>
  );
};

export default Header;
