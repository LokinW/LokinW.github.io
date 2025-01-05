import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({duration: 1, stagger: .25});

gsap.from(".education__wrapper", {scrollTrigger: ".education__wrapper",y:200, opacity: 0})