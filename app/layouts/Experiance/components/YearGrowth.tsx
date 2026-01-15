import {IExperience} from "@/app/data";

import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

type Tprops = {
  experiance: IExperience;
};

const YearGrowth = ({experiance}: Tprops) => {
  const itemRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(max-width: 767px)", () => {
        gsap.fromTo(
          itemRef.current,
          {
            yPercent: 100,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: itemRef.current,
              start: "top 80%",
              end: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      mm.add("(min-width: 768px)", () => {
        gsap.from(itemRef.current, {
          xPercent: -30,
          opacity: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: itemRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      });

      return () => mm.revert();
    },
    {scope: itemRef}
  );

  return (
    <div
      ref={itemRef}
      className="
        flex flex-col bg-white gap-3 border-3 border-gray-400 rounded-xl p-4
        mb-6
        md:flex-row md:items-center md:justify-between 
        lg:px-16 lg:py-5 lg:rounded-full
      "
    >
      <div className="flex flex-col gap-3 md:gap-0 md:max-w-110 lg:max-w-200">
        <h4 className="text-xl font-medium md:text-3xl lg:text-4xl">
          {experiance.title}
        </h4>
        <p className="text-lg text-gray-500 font-medium lg:text-2xl">
          {experiance.company}
        </p>
        <p className="text-gray-900 lg:text-xl">{experiance.description}</p>
      </div>
      <div className="text-2xl font-medium ml-auto md:min-w-[200px] md:text-3xl ">
        {experiance.period}
      </div>
    </div>
  );
};

export default YearGrowth;
