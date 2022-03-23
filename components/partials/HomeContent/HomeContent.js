import { Title } from "../../basics/Title";

export const HomeContent = () => {
    return (
      <section className=" bg-gradient-to-r from-[#CCE7DD] via-[#C6DEEB] to-[#D9DEEA]">
        <div className="py-[64px] grid grid-cols-2 gap-8 wrapper">
          <Title title={"More impressions, more conversions"} position={false}>
            <p className="my-8">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua invidunt ut labore.
            </p>
            <button
              type="button"
              className="flex-shrink-0 border-transparent border-4 text-white  py-[16px] px-[40px] bg-primary rounded-[12px] right-[8px]"
            >
              <h6 className="text-white">Get Free trial</h6>
            </button>
          </Title>
          <div className="flex flex-col gap-[32px] mr-[40px]">
            <img src="impression.png" alt="" />
          </div>
        </div>
      </section>
    );
  };