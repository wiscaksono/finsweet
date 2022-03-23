import Head from "next/head";
// import Image from "next/image";
import { Navbar, Footer, ServiceContent } from "../components/advanced";
import {
  Homepage,
  Logoipsum,
  CTA,
  Testimonial,
  Service,
  HomeContent,
} from "../components/partials";
import { Title } from "../components/basics/Title";

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
          className="bg-light-violet p-16 gap-8"
        >
          <ServiceContent
            icon="security.svg"
            title="High security to protect from piracy"
          />
          <ServiceContent
            icon="premium.svg"
            title="Premium quality performance"
          />
          <ServiceContent
            icon="support.svg"
            title="Full time customer support - 24/7"
          />
        </Service>

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

        <HomeContent />
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
          className="bg-[#D798E1] bg-opacity-[15%] px-8 py-16"
        >
          <ServiceContent
            icon="encryption.svg"
            title="Advanced 256-bit encryption"
            className="px-8 border-r-[1px] border-gray-300"
          />
          <ServiceContent
            icon="collaboration.svg"
            title="Simple collaboration tools"
            className="px-8 border-x-[1px]  border-gray-300"
          />
          <ServiceContent
            icon="ai.svg"
            title="Customizable AI features"
            className="px-8 border-l-[1px] border-gray-300"
          />
        </Service>
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
