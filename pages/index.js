import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import Logoipsum from "../components/Logoipsum";

const Service = ({ icon, title }) => {
  return (
    <div className="flex flex-col">
      <div className="w-[48px] h-[48px] mb-[24px]">
        <img src={icon} alt="" />
      </div>
      <h2 className="roboto font-bold text-[32px] leading-[120%] mb-[20px] w-[362px]">
        {title}
      </h2>
      <p className="w-[362px]">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy.
      </p>
    </div>
  );
};

const Features = ({ icon, title }) => {
  return (
    <div>
      <img src={icon} alt="" className="mb-[24px]" />
      <div className="w-[339px] h-[183px]">
        <h3 className="mb-[16px]">{title}</h3>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor.
        </p>
      </div>
    </div>
  );
};

const Customers = ({ photo, name, position }) => {
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

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <header className="wrapper mb-[128.43px]">
        <div className="w-[768px]  mx-auto mt-[98px]">
          <h1 className="text-center mb-[32px]">
            The Best Software to Grow your Sales and Services
          </h1>
          <p className="large text-center mb-[48px]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat.
          </p>
          <div className="w-[576px] flex items-center justify-center mx-auto relative mb-[64px]">
            <input
              type="email"
              className="w-full p-[24px] rounded-[20px] border-2 border-light-violet"
              placeholder="Enter your Email"
            />
            <button
              type="button"
              className="absolute flex-shrink-0 border-transparent border-4 text-white  py-[16px] px-[40px] bg-primary rounded-[12px] right-[8px]"
            >
              <h6 className="text-white">Get Free trial</h6>
            </button>
          </div>
        </div>

        <div className="w-[1024px] mx-auto">
          <img src="dashboard.png" alt="" className="w-full h-full" />
        </div>
      </header>

      <section className="wrapper mb-[128px]">
        <div className="text-center mb-[48px]">
          <p className="label mb-[24px]">High-quality</p>
          <h2 className="w-[576px] mx-auto">
            We have the Best Solution for your Business
          </h2>
        </div>
        <div className="bg-light-violet rounded-[24px] flex gap-[32px] justify-center items-center py-[64px]">
          <Service
            icon="security.svg"
            title="High security to protect from piracy"
          />
          <Service icon="premium.svg" title="Premium quality performance" />
          <Service
            icon="support.svg"
            title="Full time customer support - 24/7"
          />
        </div>
      </section>

      <section className="wrapper flex items-center justify-between mb-[128px]">
        <div className="flex items-center  w-[577px]">
          <div className="">
            <p className="label mb-[24px]">Why should you work with us?</p>
            <h2 className="mb-[32px]">
              To upscale your business to the next level
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua invidunt ut labore.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[32px] mr-[40px]">
          <div className="flex gap-[24px] items-center">
            <div className="w-[48px] h-[48px] flex-none">
              <a href="#">
                <img src="arrow.svg" alt="" className="w-full h-full" />
              </a>
            </div>
            <p className="w-[504px] text-[20px] roboto font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </div>
          <div className="flex gap-[24px] items-center">
            <div className="w-[48px] h-[48px] flex-none">
              <a href="#">
                <img src="arrow.svg" alt="" className="w-full h-full" />
              </a>
            </div>
            <p className="w-[504px] text-[20px] roboto font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </div>
          <div className="flex gap-[24px] items-center">
            <div className="w-[48px] h-[48px] flex-none">
              <a href="#">
                <img src="arrow.svg" alt="" className="w-full h-full" />
              </a>
            </div>
            <p className="w-[504px] text-[20px] roboto font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-light-violet">
        <div className="py-[64px] flex items-center justify-between wrapper">
          <div className="flex items-center  w-[577px]">
            <div className="">
              <h2 className="mb-[32px]">More impressions, more conversions</h2>
              <p className="mb-[32px]">
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
            </div>
          </div>
          <div className="flex flex-col gap-[32px] mr-[40px]">
            <img src="impression.png" alt="" />
          </div>
        </div>
      </section>

      <Logoipsum></Logoipsum>

      <section className="wrapper flex items-center justify-between mb-[128px]">
        <div className="flex items-center  w-[577px]">
          <div className="">
            <p className="label mb-[24px]">Discover More</p>
            <h2 className="mb-[32px]">
              Analyze your sales and marketing leads
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua invidunt ut labore.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[32px] mr-[40px]">
          <div className="flex gap-[24px] items-center">
            <div className="w-[72px] h-[72px] flex-none">
              <a href="#">
                <img src="sales-icon.svg" alt="" className="w-full h-full" />
              </a>
            </div>
            <div>
              <h4 className="mb-[8px]">Sales Tracking</h4>
              <p className="w-[504px] text-[20px] large">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </p>
            </div>
          </div>
          <div className="flex gap-[24px] items-center">
            <div className="w-[72px] h-[72px] flex-none">
              <a href="#">
                <img
                  src="project-management.svg"
                  alt=""
                  className="w-full h-full"
                />
              </a>
            </div>
            <div>
              <h4 className="mb-[8px]">Project Management</h4>
              <p className="w-[504px] text-[20px] large">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </p>
            </div>
          </div>
          <div className="flex gap-[24px] items-center">
            <div className="w-[72px] h-[72px] flex-none">
              <a href="#">
                <img
                  src="activity-report.svg"
                  alt=""
                  className="w-full h-full"
                />
              </a>
            </div>
            <div>
              <h4 className="mb-[8px]">Activity Report</h4>
              <p className="w-[504px] text-[20px] large">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper mb-[128px]">
        <h2 className="text-center mb-[48px]">Features</h2>
        <div className="bg-[#D798E1] bg-opacity-[15%] rounded-[24px]">
          <div className="flex gap-[32px] items-center justify-center p-[64px]">
            <Features
              icon="encryption.svg"
              title="Advanced 256-bit encryption"
            />
            <div className="w-[2px] h-[263px] bg-[#CDC7D2]" />
            <Features
              icon="collaboration.svg"
              title="Simple collaboration tools"
            />
            <div className="w-[2px] h-[263px] bg-[#CDC7D2]" />

            <Features icon="ai.svg" title="Customizable AI features" />
          </div>
        </div>
      </section>

      <section className="wrapper mb-[128px]">
        <h2 className="text-center mb-[48px] w-[628px] mx-auto ">
          The stunning results our customers have experienced
        </h2>
        <div className="flex gap-[24px]">
          <Customers photo="ron-wood.png" position="CEO" name="Ron Wood" />
          <Customers
            photo="mark-mason.png"
            position="Marketing Manager"
            name="Mark Mason"
          />
          <Customers
            photo="sam-preston.png"
            position="CTO"
            name="Sam Preston"
          />
        </div>
      </section>
      <CTA></CTA>
      <Footer></Footer>
    </>
  );
}
