import Navbar from "../components/advanced/Navbar";
import Footer from "../components/advanced/Footer";
import { CTA } from "../components/partials";
import Button from "../components/Button";

const Contact = ({ img, title, paragraph }) => {
  return (
    <div className="flex gap-[24px] items-center">
      <div className="w-[48px] h-[48px] flex-none">
        <img src={img} alt="" className="w-full h-full" />
      </div>
      <div>
        <h4 className="mb-[4px]">{title}</h4>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default function contact() {
  return (
    <>
      <Navbar></Navbar>
      <section className="wrapper mt-[96px] mb-[128px]">
        <h1 className="text-center mb-[64px]">Get in touch with us</h1>
        <div className="bg-[#F0F2FE] rounded-[24px]  p-[64px]">
          <h3 className="mb-[16px]">Drop us a message</h3>
          <p className="mb-[48px]">
            We will get back to you as soon as possible.
          </p>
          <div className="flex justify-between">
            <div className="w-1/2">
              <div className="flex flex-col">
                <div className="flex gap-[16px]">
                  <div className="flex-1 w-full">
                    <input
                      className="appearance-none block w-full  text-primary rounded-[8px] py-[20px] pl-[24px] mb-3 leading-tight focus:outline-none placeholder:text-primary/50 placeholder:roboto placeholder:text-[16px] roboto"
                      id="grid-first-name"
                      type="text"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="flex-1 w-full">
                    <input
                      className="appearance-none block w-full  text-primary rounded-[8px] py-[20px] pl-[24px] mb-3 leading-tight focus:outline-none placeholder:text-primary/50 placeholder:roboto placeholder:text-[16px] roboto"
                      id="grid-first-name"
                      type="text"
                      placeholder="Company Name"
                    />
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <input
                    className="appearance-none block w-full  text-primary rounded-[8px] py-[20px] pl-[24px] mb-3 leading-tight focus:outline-none placeholder:text-primary/50 placeholder:roboto placeholder:text-[16px] roboto"
                    id="grid-first-name"
                    type="text"
                    placeholder="Work Email"
                  />
                </div>
                <div className="flex-1 w-full">
                  <input
                    className="appearance-none block w-full  text-primary rounded-[8px] py-[20px] pl-[24px] mb-3 leading-tight focus:outline-none placeholder:text-primary/50 placeholder:roboto placeholder:text-[16px] roboto"
                    id="grid-first-name"
                    type="text"
                    placeholder="Subject"
                  />
                </div>
                <div className="flex-1 w-full">
                  <textarea
                    className=" form-control block w-full px-3 py-1.5 text-base font-normal text-primary bg-white bg-clip-padding  rounded-[8px] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder:text-primary/50 placeholder:roboto placeholder:text-[16px] pl-[20px] resize-none  roboto"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className=" w-1/2 px-[146px] flex gap-[36px] flex-col">
              <Contact
                img="call.svg"
                title="+ 1800 145 276"
                paragraph="Free support"
              />
              <Contact
                img="email-support.svg"
                title="finsweet@gmail.com"
                paragraph="finsweet@gmail.com"
              />
              <Contact
                img="email.svg"
                title="sales@finsweet.com"
                paragraph="Sales Enquiry"
              />
            </div>
          </div>
        </div>
      </section>

      <CTA></CTA>
      <Footer></Footer>
    </>
  );
}
