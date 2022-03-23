import { Navbar, Footer } from "../components/advanced";
import { CTA, Logoipsum } from "../components/partials";
import Btn from "../components/Button";
import BtnWhite from "../components/ButtonWhite";
import Features from "../components/Features";

const Service = ({ icon, title }) => {
  return (
    <div>
      <div className="w-[56px] h-[56px] mb-[16px]">
        <img src={icon} alt="" />
      </div>
      <div className="w-[378px]">
        <h4 className="mb-[16px]">{title}</h4>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor.
        </p>
      </div>
    </div>
  );
};

export default function product() {
  return (
    <>
      <Navbar />
      <div>
        <div className="absolute -z-50 -top-[300px] -right-[200px]">
          <img src="that-convert.png" alt="" />
        </div>
      </div>

      <section className="wrapper mt-[97px] mb-[96px]">
        <div className="flex items-center justify-between">
          <div className="w-[576px]">
            <h1 className="mb-[24px]">Grow your Sales and Services</h1>
            <p className="mb-[32px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex gap-[16px]">
              <Btn text="Get Started" />
              <BtnWhite text="Contact Us" />
            </div>
          </div>
          <div className="w-[616px] h-[401px]">
            <img src="dashboard.png" alt="" className="w-full h-full" />
          </div>
        </div>
      </section>
      <Logoipsum></Logoipsum>
      <section className="mt-[145px]  bg-gradient-to-r from-[#CCE7DD] via-[#C6DEEB] to-[#D9DEEA]">
        <div classsName="wrapper">
          <h2 className="text-center w-[768px] mx-auto pt-[128px] pb-[48px]">
            Get the best out of your company with our service
          </h2>
        </div>
        <div className="relative h-[596px]">
          <div className="bg-white bg-opacity-70 rounded-tr-[67px] w-[90%] h-full" />
          <div className="max-w-[1280px] inset-0 absolute z-10 mx-auto grid grid-cols-3 w-full py-20 gap-x-[24px] gap-y-[64px]">
            <Service icon="shield.svg" title="Security and privacy" />
            <Service icon="built-in-ai.svg" title="Built-in AI features" />
            <Service icon="collaborate.svg" title="Collaborate with others" />
            <Service icon="sync.svg" title="Real time sync" />
            <Service icon="nlp.svg" title="Built-in AI features" />
            <Service icon="note.svg" title="Easy notes organization" />
          </div>
        </div>
      </section>

      <section className="wrapper flex gap-[88px] my-[128px] items-center">
        <div>
          <p className="label mb-[24px]">Marketing insights</p>
          <div className="w-[576px]">
            <h2 className="mb-[32px]">Data-driven client feedback</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren.
            </p>
          </div>
        </div>
        <div className="w-[466px] h-[449px] relative">
          <img
            src="animate21.svg"
            alt=""
            className="absolute left-0 bottom-[167px] animate-bounce"
          />
          <img
            src="animate22.svg"
            alt=""
            className="absolute left-[132px] bottom-0 "
          />

          <img
            src="animate23.svg"
            alt=""
            className="absolute  right-0 top-[64px] animate-bounce"
          />
          <img
            src="animate24.svg"
            alt=""
            className="  -z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
          />
        </div>
      </section>

      <section className="wrapper flex  my-[128px] gap-[88px] items-center">
        <div className="w-[576px] h-[445.18px]">
          <img src="project-performance.png" alt="" className="w-full h-full" />
        </div>
        <div>
          <p className="label mb-[24px]">Marketing insights</p>
          <div className="w-[576px]">
            <h2 className="mb-[32px]">Data-driven client feedback</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren.
            </p>
          </div>
        </div>
      </section>

      <section className="wrapper flex gap-[88px] my-[128px] items-center">
        <div className="absolute -z-10 right-0">
          <img src="/that-convert.png" alt="" className="w-full h-full" />
        </div>
        <div>
          <p className="label mb-[24px]">Lead Generation</p>
          <div className="w-[576px]">
            <h2 className="mb-[32px]">More leads that convert</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren.
            </p>
          </div>
        </div>
        <div className="w-[576px] h-[434.75px]">
          <img src="lead-generation.png" alt="" className="w-full h-full" />
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

      <CTA />
      <Footer />
    </>
  );
}
