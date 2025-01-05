import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({duration: 1, stagger: .25, opacity: 0});

gsap.from(".projects__subtitle-txt", { ease: "none", y:-50});
gsap.from(".projects-wrapper", {scrollTrigger: ".projects-wrapper",y:200});