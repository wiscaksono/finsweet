export const Testimonial = () => {
  return (
    <section className="wrapper mb-[128px]">
      <h2 className="text-center mb-[48px] w-[628px] mx-auto ">
        The stunning results our customers have experienced
      </h2>
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
    <div className="border-2 border-[#6199ED]/25 rounded-[24px]">
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
