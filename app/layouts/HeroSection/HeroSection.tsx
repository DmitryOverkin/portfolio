import HeroGreeting from "./components/HeroGreetig/HeroGreeting";
import HeroImage from "./components/HeroImage/HeroImage";
import HeroTitle from "./components/HeroTitle/HeroTitle";

const HeroSection = () => {
  return (
    <div className="flex justify-between gap-4 h-full max-h-screen">
      <HeroTitle />
      <div className="flex flex-col justify-between">
        <HeroImage />
        <HeroGreeting />
      </div>
    </div>
  );
};

export default HeroSection;
