import Header from "./layouts/Header/Header";
import HeroSection from "./layouts/HeroSection/HeroSection";

export default function Home() {
  return (
    <div className="w-full px-12 mx-auto">
      <Header />
      <main>
        <HeroSection/>
      </main>
    </div>
  );
}
