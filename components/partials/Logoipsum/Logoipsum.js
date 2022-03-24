import gsap, {Power4} from "gsap";
import { useEffect } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function Logoipsum() {
  useEffect(() => {
    gsap.from("#logoipsum", 1, {
      opacity: 0,
      x: 100,
      ease: Power4.easeOut,
      stagger: {
        amount: .3
      },
      scrollTrigger: {
        trigger: "#sectionLogoIpsum",
        start: "top bottom",
      }
    })
  }, [])

  return (
    <div className="wrapper flex justify-between mt-[64px] mb-[128px]" id="sectionLogoIpsum">
      <img src="logoipsum1.svg" id="logoipsum" alt="" />
      <img src="logoipsum2.svg" id="logoipsum" alt="" />
      <img src="logoipsum3.svg" id="logoipsum" alt="" />
      <img src="logoipsum4.svg" id="logoipsum" alt="" />
      <img src="logoipsum5.svg" id="logoipsum" alt="" />
    </div>
  );
}
