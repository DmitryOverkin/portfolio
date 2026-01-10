import {ScrollSmoother} from "gsap/ScrollSmoother";

declare global {
  interface Window {
    smoother?: ScrollSmoother;
  }
}

export {};
