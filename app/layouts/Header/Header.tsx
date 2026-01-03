import Logo from "@/app/components/Logo/Logo";
import NavMenu from "./components/NavMenu";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between md:mb-10">
      <Logo />
      <NavMenu />
    </header>
  );
};

export default Header;
