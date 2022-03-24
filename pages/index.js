import Head from "next/head";
// import Image from "next/image";
import { Navbar, Footer, } from "components/advanced";
import {
  Homepage,
  Logoipsum,
  CTA,
  Testimonial,
  Service,
  ServiceContent
} from "components/partials";
import { Title } from "components/basics/Title";

export default function Home() {

  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <div>
        <Navbar />
        <Homepage />
        <Service
          subTitle={"High-quality"}
          title={"We have the Best Solution for your Business"}
          classNameParent="gap-8 p-16 bg-light-violet"
          serviceData={serviceData.dataOne}
        />
        {/* Why Us */}
        <section className="wrapper grid grid-cols-2 gap-8 mb-[128px]">
          <Title
            subTitle={"Why should you work with us?"}
            title={"To upscale your business to the next level"}
          >
            <p className="mt-8">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua invidunt ut labore.
            </p>
          </Title>
          <div className="flex flex-col gap-[32px] mr-[40px]">
            <WhyUs
              icon={"arrow.svg"}
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod."
            />
            <WhyUs
              icon={"arrow.svg"}
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod."
            />
            <WhyUs
              icon={"arrow.svg"}
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod."
            />
          </div>
        </section>

        <section className=" bg-gradient-to-r from-[#CCE7DD] via-[#C6DEEB] to-[#D9DEEA]">
          <div className="py-[64px] grid grid-cols-2 gap-8 wrapper">
            <Title
              title={"More impressions, more conversions"}
              position={false}
            >
              <p className="my-8">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua invidunt ut labore.
              </p>
              <button
                type="button"
                className="flex-shrink-0 border-transparent border-4 text-white  py-[16px] px-[40px] bg-primary rounded-[12px] right-[8px]"
              >
                <h6 className="text-white">Get Free trial</h6>
              </button>
            </Title>
            <div className="flex flex-col gap-[32px] mr-[40px]">
              <div className="w-[563px] h-[437.39px] relative">
                <img
                  src="animate1.svg"
                  alt=""
                  className="absolute left-0 bottom-[136px] animate-bounce "
                />
                <img
                  src="animate2.svg"
                  alt=""
                  className="absolute top-0 left-[83px] animate-bounce z-10 shadow-md"
                />
                <img
                  src="animate3.svg"
                  alt=""
                  className="absolute bottom-0 left-[148px] animate-bounce "
                />
                <img
                  src="animate4.svg"
                  alt=""
                  className="absolute right-0 top-[194px] animate-bounce"
                />
              </div>
            </div>
          </div>
        </section>
        <Logoipsum />

        {/* Discover */}
        <section className="wrapper grid grid-cols-2 gap-8 mb-[128px]">
          <Title
            subTitle={"Discover More"}
            title={"Analyze your sales and marketing leads"}
          >
            <p className="mt-8">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua invidunt ut labore.
            </p>
          </Title>
          <div className="flex flex-col gap-[32px] mr-[40px]">
            <Discover
              icon={"sales-icon.svg"}
              title={"Sales Tracking"}
              desc={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr."}
            />
            <Discover
              icon={"project-management.svg"}
              title={"Project Management"}
              desc={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr."}
            />
            <Discover
              icon={"activity-report.svg"}
              title={"Activity Report"}
              desc={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr."}
            />
          </div>
        </section>

        <Service
          title={"Features"}
          classNameParent="bg-[#D798E1] bg-opacity-[15%]  divide-x-2 divide-gray-300 px-8 py-16"
          serviceData={serviceData.dataTwo}
          classNameChild="px-8"
        />

        <Testimonial />
        <CTA />
        <Footer />
      </div>
    </>
  );
}

const WhyUs = ({ icon, desc }) => {
  return (
    <div className="flex gap-[24px] items-center">
      <div className="w-[48px] h-[48px] flex-none">
        <img src={icon} alt="" className="w-full h-full" />
      </div>
      <p className="text-[20px] roboto font-medium">{desc}</p>
    </div>
  );
};

const Discover = ({ icon, title, desc }) => {
  return (
    <div className="flex gap-[24px] items-center">
      <div className="w-[72px] h-[72px] flex-none">
        <img src={icon} alt="" className="w-full h-full" />
      </div>
      <div>
        <h4 className="mb-[8px]">{title}</h4>
        <p className="w-[504px] text-[20px] large">{desc}</p>
      </div>
    </div>
  );
};


const serviceData = {
  dataOne: [
    {
      icon: "security.svg",
      title: "High security to protect from piracy"
    },
    {
      icon: "premium.svg",
      title: "Premium quality performance"
    },
    {
      icon: "support.svg",
      title: "Full time customer support - 24/7"
    },
  ],
  dataTwo: [
    {
      icon: "encryption.svg",
      title: "Advanced 256-bit encryption"
    },
    {
      icon: "collaboration.svg",
      title: "Simple collaboration tools"
    },
    {
      icon: "ai.svg",
      title: "Customizable AI features"
    },
  ]
}