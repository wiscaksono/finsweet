import Navbar from "../components/advanced/Navbar";
import Footer from "../components/advanced/Footer";
import CTA from "../components/CTA";
import Btn from "../components/Button";

const Pricing = ({
  plan,
  desc,
  first,
  second,
  third,
  fourth,
  fifth,
  price,
  priceDesc,
}) => {
  return (
    <div className="border-4 border-light-violet transition-colors   bg-white hover:bg-gradient-to-br from-[#CCE7DD] via-[#C6DEEB] to-[#D9DEEA] rounded-[24px]  hover:border-blue ">
      <div className="flex items-center gap-[24px] pt-[48px] pl-[48px] pb-[33px] border-b border-[#D8D8D8]">
        <div>
          <img src="regular-plan.svg" alt="" />
        </div>
        <div className="flex flex-col">
          <h3>{plan}</h3>
          <p>{desc}</p>
        </div>
      </div>
      <div className="flex flex-col gap-[24px] pt-[48px] pl-[48px] pb-[33px]">
        <div className="flex gap-[16px] items-center ">
          <img src="check.svg" alt="" />
          <h6>{first}</h6>
        </div>
        <div className="flex gap-[16px] items-center ">
          <img src="check.svg" alt="" />
          <h6>{second}</h6>
        </div>
        <div className="flex gap-[16px] items-center ">
          <img src="check.svg" alt="" />
          <h6>{third}</h6>
        </div>
        <div className="flex gap-[16px] items-center ">
          <img src="check.svg" alt="" />
          <h6>{fourth}</h6>
        </div>
        <div className="flex gap-[16px] items-center ">
          <img src="check.svg" alt="" />
          <h6>{fifth}</h6>
        </div>
      </div>
      <div className="px-[57px] pb-[48px]">
        <p className="roboto text-[14px] text-primary leading-[150%] w-[297px] text-center pb-[48px]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
        </p>
        <div className="flex flex-col gap-[1px] items-center">
          <h3>{price}</h3>
          <p className="roboto font-normal text-[12px] mb-[24px]">
            {priceDesc}
          </p>
          <Btn text="Get started" />
        </div>
      </div>
    </div>
  );
};

const Sumary = ({ title, paragraph }) => {
  return (
    <div className="mb-[16px]">
      <details className="bg-white rounded-[24px]   p-[40px] ">
        <summary className=" text-primary font-bold text-[24px] roboto select-none">
          {title}
        </summary>
        <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
          <p>{paragraph}</p>
        </div>
      </details>
    </div>
  );
};

export default function pricing() {
  return (
    <>
      <Navbar />
      <section className="wrapper mt-[96px] mb-[48px]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="w-[529px] mx-auto text-center mb-[24px]">
            Pricing plans that suit you
          </h1>
          <p className="large w-[392px] mx-auto text-center mb-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <Btn text="Monthly"></Btn>
        </div>
      </section>

      <section className="wrapper  flex justify-between mb-[128px]">
        <Pricing
          plan="Regular"
          desc="Starter Plan"
          first="Limited Projects"
          second="Regular Support Business"
          third="1 month Free Trial"
          fourth="3GB storage"
          fifth="Ads Preview"
          price="Free"
          priceDesc="For Limited Period"
        />
        <Pricing
          plan="Platinum"
          desc="For the best results"
          first="Limited Projects"
          second="Regular Support Business"
          third="1 month Free Trial"
          fourth="20GB storage"
          fifth="Ads Preview"
          price="$342"
          priceDesc="For Limited Period"
        />
        <Pricing
          plan="Standard"
          desc="Most popular"
          first="Limited Projects"
          second="Regular Support Business"
          third="1 month Free Trial"
          fourth="10GB storage"
          fifth="Ads Preview"
          price="$234"
          priceDesc="Billing Monthly"
        />
      </section>

      <section className="wrapper bg-[#F0F2FE] rounded-[24px] p-[64px] mb-[128px]">
        <div className="flex gap-[32px]">
          <div className="w-[448px]">
            <h2 className="mb-[28px]">Frequestly Asked Questions</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt.
            </p>
          </div>
          <div className="flex-1 ">
            <Sumary
              title="How do I grow my business?"
              paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            />
            <Sumary
              title="Can I cancel my subscription?"
              paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            />
            <Sumary
              title="How do I contact the support?"
              paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            />
            <Sumary
              title="Is a credit card required?"
              paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            />
          </div>
        </div>
      </section>
      <CTA></CTA>
      <Footer />
    </>
  );
}
