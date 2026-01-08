import SectionLogo from "@/app/components/SectionLogo/SectionLogo";
import AboutContent from "./components/AboutContent/AboutContent";

const AboutSection = () => {
  return (
    <section className="mb-12">
      <div className="w-full max-w-[1920px] px-12 pb-6 mx-auto">
        <SectionLogo name="About Me" />
      </div>
      <AboutContent />
    </section>
  );
};

export default AboutSection;
