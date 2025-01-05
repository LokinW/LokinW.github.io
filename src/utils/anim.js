import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease: "none", duration: 1, y:50, stagger: .25, opacity: 0});

let hasAnimationBeenShown = localStorage.getItem('hasAnimationBeenShown');
if (!hasAnimationBeenShown) {
    // Play the animation
    gsap.from(".header__menu", {scrollTrigger: "main", y:-50, delay:2})
    gsap.from("#threejs-container", {scrollTrigger: "main", y:0, duration:2});
    gsap.from(".hero__title, .hero__description, .hero__btn", {scrollTrigger: "main", delay: 4});
    // Set a flag to indicate that the animation has been shown
    localStorage.setItem('hasAnimationBeenShown', 'true');
}