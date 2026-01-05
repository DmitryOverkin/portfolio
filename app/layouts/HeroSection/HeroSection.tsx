import HeroGreeting from "./components/HeroGreetig/HeroGreeting";
import HeroImage from "./components/HeroImage/HeroImage";
import HeroTitle from "./components/HeroTitle/HeroTitle";

const HeroSection = () => {
  return (
    <div
      className="flex flex-col justify-between items-center gap-8 h-full max-h-screen 
    md:items-stretch md:flex-row"
    >
      <HeroTitle />
      <div className="flex flex-col gap-8 justify-between md:gap-24">
        <HeroImage />
        <HeroGreeting />
      </div>
    </div>
  );
};

export default HeroSection;
