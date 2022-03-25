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
import { useEffect } from "react";
import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useEffect(() => {
    const tl = gsap.timeline({
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: "#service1",
        start: "top bottom",
      }
    });

    tl.from("#service1", 1, {
      opacity: 0,
      y: 100,
    }).from("#service-content1", 0.7, {
      opacity: 0,
      y: 100,
      stagger: 0.2,
    }, "-=0.8")

    const tl2 = gsap.timeline({
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: "#service2",
        start: "top bottom",
      }
    });

    tl2.from("#service2", 1, {
      opacity: 0,
      y: 100,
    }).from("#service-content2", 0.7, {
      opacity: 0,
      y: 100,
      stagger: 0.2,
    }, "-=0.8")

    const tl3 = gsap.timeline({
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: "#section3",
        start: "top bottom",
      }
    });

    tl3.from("#title-sec3", 1, {
      opacity: 0,
      y: 100,
    }).from("#whyus", 0.7, {
      opacity: 0,
      x: 100,
      stagger: 0.2,
    }, "-=0.8")

    const tl4 = gsap.timeline({
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: "#section4",
        start: "top bottom",
      }
    });

    tl4.from("#title-sec6", 1, {
      opacity: 0,
      y: 100,
    }).from("#discover", 0.7, {
      opacity: 0,
      x: 100,
      stagger: 0.2,
    }, "-=0.8")

  }, [])


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
          className="gap-8 p-16 bg-light-violet"
          id="service1"
        >
          {serviceData.dataOne.map(data => (
            <ServiceContent key={data.title} icon={data.icon} title={data.title} id="service-content1" />
          ))}
        </Service>

        {/* Why Us */}
        <section className="wrapper grid grid-cols-2 gap-8 mb-[128px]" id="section3">
          <div id="title-sec3">
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
          </div>
          <div className="flex flex-col gap-[32px] mr-[40px]">
            <WhyUs
              icon={"arrow.svg"}
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod."
            id="whyus"
            />
            <WhyUs
              icon={"arrow.svg"}
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod."
            id="whyus"

            />
            <WhyUs
              icon={"arrow.svg"}
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod."
            id="whyus"

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
        <section className="wrapper grid grid-cols-2 gap-8 mb-[128px]" id="section6">
        <div id="title-sec6">
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
</div>

          <div className="flex flex-col gap-[32px] mr-[40px]">
            <Discover
              icon={"sales-icon.svg"}
              title={"Sales Tracking"}
              desc={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr."}
              id="discover"
            />
            <Discover
              icon={"project-management.svg"}
              title={"Project Management"}
              desc={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr."}
              id="discover"

            />
            <Discover
              icon={"activity-report.svg"}
              title={"Activity Report"}
              desc={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr."}
              id="discover"

            />
          </div>
        </section>

        <Service
          title={"Features"}
          className="bg-[#D798E1] bg-opacity-[15%] divide-x-2 divide-gray-300 px-8 py-16"
          classNameChild="px-8"
          id="service2"
        >
          {serviceData.dataTwo.map(data => (
            <ServiceContent key={data.title} icon={data.icon} title={data.title} id="service-content2" className="px-8" />
          ))}
        </Service>

        <Testimonial />
        <CTA />
        <Footer />
      </div>
    </>
  );
}

const WhyUs = ({ icon, desc, id }) => {
  return (
    <div className="flex gap-[24px] items-center" id={id}>
      <div className="w-[48px] h-[48px] flex-none">
        <img src={icon} alt="" className="w-full h-full" />
      </div>
      <p className="text-[20px] roboto font-medium">{desc}</p>
    </div>
  );
};

const Discover = ({ icon, title, desc, id }) => {
  return (
    <div className="flex gap-[24px] items-center" id={id}>
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