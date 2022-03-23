import Navbar from "../components/advanced/Navbar";
import CTA from "../components/CTA";
import Footer from "../components/advanced/Footer";
import Link from "next/link";

const Posts = ({ img, title, paragraph }) => {
  return (
    <div className="flex gap-[32px] flex-col">
      <Link href="/blog/blogPost" passHref>
        <img src={img} alt="" className="cursor-pointer" />
      </Link>
      <div className="flex-col gap-[16px] flex">
        <Link href="/blog/blogPost" passHref>
          <h4 className="cursor-pointer">{title}</h4>
        </Link>
        <p>{paragraph}</p>
        <p className="roboto font-medium text-[16px]">
          Luke Matthews l November 8, 2021
        </p>
      </div>
    </div>
  );
};
export default function blog() {
  return (
    <>
      <Navbar></Navbar>
      <section className="wrapper mb-[128px]">
        <div className="mt-[96px] mb-[48px]">
          <h1 className="text-center mb-[24px]">Read our latest blogs</h1>
          <p className="text-center w-[795px] mx-auto large">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor.
          </p>
        </div>

        <div className="border border-[#D8D8D8] rounded-[24px] ">
          <div className="flex wrapper gap-[48px]  items-center p-[64px]">
            <div className="w-1/2 flex gap-[24px] flex-col">
              <p className="label ">Trending Post</p>
              <Link href="/blog/blogPost " passHref>
                <h2 className="cursor-pointer">
                  New invoicing features to help you get paid faster
                </h2>
              </Link>
              <p className="w-[552px]">
                Over the past few months, we’ve added several new features to
                SaaS Invoicing to help any business get paid faster and
                streamline their collection workflows.
              </p>
              <p className="roboto font-medium text-[16px]">
                Luke Matthews l November 8, 2021
              </p>
            </div>
            <div className="w-1/2 ">
              <Link href="/blog/blogPost" passHref>
                <img
                  src="wfh-blog.png"
                  alt=""
                  className="w-full h-full cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper mb-[128px]">
        <h1 className="text-center mb-[64px]">All posts</h1>
        <div className="grid grid-cols-3 gap-x-[24px] gap-y-[64px]">
          <Posts
            img="photo-of-boy-using-vr-headset-4145356.png"
            title="7 Automation use cases that foster excellent CX"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
          />

          <Posts
            img="photo-of-woman-writing-on-tablet-computer-while-using-laptop-4348401.png"
            title="Managing Rails application secrets with encrypted credentials"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
          />
          <Posts
            img="photo-of-woman-sitting-by-the-table-while-writing-4348078.png"
            title="Account-based marketing: Data-driven selection for ABM success"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
          />
          <Posts
            img="people-on-a-video-call-4226122.png"
            title="How to Calculate Your SaaS Gross Margin"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
          />
          <Posts
            img="woman-having-video-call-in-home-office-4240610.png"
            title="The Five Main Benefits of Automating your Accounts Receivable Process"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
          />
          <Posts
            img="people-on-a-video-call-4226262.png"
            title="How to Make Data-driven Pricing Decisions"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
          />

          <Posts
            img="close-up-photography-of-woman-sitting-beside-table-while-using-macbook-3178818.png"
            title="How to Make Recurring Invoicing More Efficient"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
          />

          <Posts
            img="woman-writing-on-her-notebook-while-holding-a-cup-7616800.png"
            title="How to Reduce Checkout Abandonment for more Conversions"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
          />
          <Posts
            img="photo-of-female-engineer-working-on-her-workspace-3862632.png"
            title="10 Customer Retention Strategies for better Dwell time"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
          />
        </div>
      </section>
      <CTA></CTA>
      <Footer></Footer>
    </>
  );
}
