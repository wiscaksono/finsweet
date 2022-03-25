import gsap, { Power3 } from "gsap";
import { useEffect } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Title } from "@components/basics/Title";

gsap.registerPlugin(ScrollTrigger)

export const Testimonial = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: ".section-testimonial",
        start: "top bottom",
      }
    });

    tl.from(".title-testi", 1, {
      opacity: 0,
      y: 100,
    })
    tl.from(".testi-card", 1, {
      opacity: 0,
      y: 100,
      stagger: 0.1,
    }, "-=0.5")
  }, [])

  return (
    <section className="wrapper mb-[128px] section-testimonial">
      <div className="title-testi">
        <Title title={"The stunning results our customers have experienced"} className="text-center mb-[48px] " />
      </div>
      <div className="flex gap-[24px]">
        <TestimonialCard photo="ron-wood.png" position="CEO" name="Ron Wood" />
        <TestimonialCard
          photo="mark-mason.png"
          position="Marketing Manager"
          name="Mark Mason"
        />
        <TestimonialCard
          photo="sam-preston.png"
          position="CTO"
          name="Sam Preston"
        />
      </div>
    </section>
  );
};

const TestimonialCard = ({ photo, name, position }) => {
  return (
    <div className="border-2 border-[#6199ED]/25 rounded-[24px] testi-card">
      <div className="flex items-center justify-center flex-col p-[64px]">
        <p className="text-[18px] roboto font-semibold leading-[150%] w-[283px] text-center mb-[25px]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <img src={photo} alt="" className="mb-[12px]" />
        <p className="text-[20px] roboto font-semibold leading-[150%] w-[283px] text-center ">
          {name}
        </p>
        <p className="roboto text-[12px] text-primary">{position}</p>
      </div>
    </div>
  );
};
