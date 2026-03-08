import SectionLogo from "@/app/components/SectionLogo/SectionLogo";

import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";

import {ScrollTrigger} from "gsap/ScrollTrigger";

const Contact = () => {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.from(section, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div ref={sectionRef} id="contact">
      <SectionLogo name="Связаться" />

      <div className="flex flex-col justify-between my-12 md:flex-row md:items-end">
        <h2
          className="text-4xl mb-6 text-left max-w-70
            md:text-6xl md:max-w-120 lg:max-w-150"
        >
          Хотите поработать вместе?
        </h2>

        <p
          className="flex text-gray-500 ml-auto text-right mb-6 max-w-70
            md:max-w-110 md:text-xl"
        >
          Напишите мне, и мы обсудим детали вашего проекта.
        </p>
      </div>

      <div className="flex justify-center align-center text-center text-xl  text-white  ">
        <ul className="flex gap-4 flex-col">
          <li>
            <a
              href="https://t.me/knowName_21"
              className="px-20 block py-6 bg-black rounded-full border border-black cursor-pointer 
                            duration-300 ease-in-out 
                            hover:bg-white hover:text-black hover:border hover:border-black"
            >
              Telegram
            </a>
          </li>
          <li>
            <a
              href="https://vk.com/know_name21"
              className="px-20 block py-6 bg-black rounded-full border border-black cursor-pointer 
                            duration-300 ease-in-out 
                            hover:bg-white hover:text-black hover:border hover:border-black"
            >
              Vk
            </a>
          </li>
          <li>
            <a
              href="https://max.ru/u/f9LHodD0cOKKIPxiTGPEFRLPVb5mPF32Co5pxJMK0gniGScPDjLfWG6Auys"
              className="px-20 block py-6 bg-black rounded-full border border-black cursor-pointer 
                            duration-300 ease-in-out 
                            hover:bg-white hover:text-black hover:border hover:border-black"
            >
              Max
            </a>
          </li>
        </ul>
      </div>

      <div className="text-center text-2xl block mt-8">
        Буду рад посотрудничать!
      </div>
    </div>
  );
};

export default Contact;
