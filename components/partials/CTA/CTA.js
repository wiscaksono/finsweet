import gsap from "gsap";
import { useEffect } from "react";
import SplitText from "../../../utils/Split3.min.js"
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function CTA() {
  useEffect(() => {
    const split = new SplitText("#cta-text", {
      type: "lines",
      linesClass: "lineChildren",
    });

    const splitParent = new SplitText("#cta-text", {
      type: "lines",
      linesClass: "lineParent",
    });

    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
      scrollTrigger: "#cta-section"
    });
  }, []);
  return (
    <section className="wrapper mb-[128px]" id="cta-section">
      <div className="text-center">
        <h1 className="w-[846px] mx-auto mb-[24px]" id="cta-text">
          Are you ready to grow your business with us?
        </h1>
        <p className="mb-[32px]" id="cta-text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy.
        </p>
      </div>
      <div className="flex items-center justify-center" id="cta-text">
        <button
          type="button"
          className="flex-shrink-0 border-transparent border-4 text-white  py-[16px] px-[40px] bg-primary rounded-[12px] right-[8px]"
        >
          <h6 className="text-white">View Pricing</h6>
        </button>
      </div>
    </section>
  );
}
