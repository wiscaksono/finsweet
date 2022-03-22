import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Features = ({ img, title }) => {
  return (
    <div>
      <div className="w-[48px] h-[48px] mb-[28px]">
        <img src={img} alt="" className="w-full h-full" />
      </div>
      <div className="w-[339px] ">
        <h4 className="mb-[16px]">{title}</h4>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy.
        </p>
      </div>
    </div>
  );
};

const Team = ({ img, name, position }) => {
  return (
    <div className="flex flex-col items-center bg-light-violet rounded-[12px] w-[264px]">
      <div className="w-[264px] h-[224px]">
        <img src={img} alt="" />
      </div>
      <div className=" text-center py-[24px]">
        <h4>{name}</h4>
        <p>{position}</p>
      </div>
    </div>
  );
};

export default function aboutUs() {
  return (
    <>
      <Navbar></Navbar>
      <section className="wrapper mb-[128px]">
        <div className="mt-[96px]">
          <h1 className="text-center mb-[24px]">
            We are proud of our products
          </h1>
          <p className="text-center w-[768px] mx-auto large">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
          <div className="flex gap-[24px] justify-center mt-[64px] mb-[128px]">
            <div>
              <img src="person-macbook.png" alt="" />
            </div>
            <div>
              <img src="man-wfh.png" alt="" />
            </div>
            <div>
              <img src="people-working.png" alt="" />
            </div>
          </div>
          <div className="">
            <div className="flex items-center justify-center flex-col w-[768px] mx-auto text-center gap-[24px]">
              <p className="label ">About Us</p>
              <h2>We’re a team of data analysts</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F0F2FE] mb-[128px]">
        <div className="flex wrapper justify-between gap-[64px] py-[96px]">
          <div className="w-1/2 flex gap-[24px] flex-col">
            <p className="label ">Our Goals</p>
            <h2>To upscale your business to the next level</h2>
            <p className="w-[607px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
          </div>
          <div className="w-1/2 flex gap-[24px] flex-col">
            <p className="label ">Our Vision</p>
            <h2>To provide solutions for growing companies</h2>
            <p className="w-[607px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
          </div>
        </div>
      </section>

      <section className="wrapper mb-[128px]">
        <div className="flex items-center justify-center gap-[16px] flex-col mb-[48px]">
          <h2>Our corporate values</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy.
          </p>
        </div>
        <div className="flex flex-wrap gap-[64px] p-[64px] bg-[#F9F0FB] rounded-[24px] items-center justify-center">
          <Features img="premium.svg" title="Best in Class" />
          <Features img="authenticity.svg" title="Authenticity" />
          <Features img="email-about.svg" title="Email Support" />
          <Features img="discount.svg" title="Discounts Available " />
          <Features img="powerful.svg" title="Powerful Marketing" />
          <Features
            img="inventory.svg"
            title="Inventory management
"
          />
        </div>
      </section>

      <section className="wrapper mb-[128px] flex gap-[32px]">
        <div className="w-1/3">
          <h2 className="mb-[24px]">Our talented Team</h2>
          <p className="large">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore.
          </p>
        </div>
        <div className="w-2/3">
          <div className="grid grid-cols-3 gap-[24px]">
            <Team
              img="blake.png"
              name="Blake Matthews"
              position="CEO & Co-Founder"
            />

            <Team img="jack.png" name="Jack Newman" position="CTO" />
            <Team
              img="sarinia.png"
              name="Sarinia Martins"
              position="Marketing"
            />
            <Team
              img="spencer.png"
              name="Spencer Wright"
              position="Project management"
            />
            <Team img="caroline.png" name="Caroline Ming" position="Sales" />
            <Team img="anna.png" name="Anna Mils" position="Design lead" />
          </div>
        </div>
      </section>
      <CTA></CTA>
      <Footer></Footer>
    </>
  );
}
