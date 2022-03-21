import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import Btn from "../components/Button";
import BtnWhite from "../components/ButtonWhite";
import Logoipsum from "../components/Logoipsum";

export default function product() {
  return (
    <>
      <Navbar />
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

      <section className="mt-[145px] bg-gradient-to-r from-[#CCE7DD] via-[#C6DEEB] to-[#D9DEEA]">
        <div classsName="wrapper">
          <h2 className="text-center w-[768px] mx-auto pt-[128px] pb-[48px]">
            Get the best out of your company with our service
          </h2>
        </div>
        <div className=" bg-white bg-opacity-70">
          <div></div>
        </div>
      </section>
      {/* <CTA /> */}
      <Footer />
    </>
  );
}
