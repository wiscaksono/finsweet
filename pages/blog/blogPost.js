import Navbar from "../../components/Navbar";
import CTA from "../../components/CTA";
import Footer from "../../components/Footer";
import Link from "next/dist/client/link";

const Posts = ({ img, title, paragraph }) => {
  return (
    <div className="flex gap-[32px] flex-col">
      <Link href="/blog/blogPost">
        <img src={img} alt="" className="cursor-pointer" />
      </Link>
      <div className="flex-col gap-[16px] flex">
        <Link href="/blog/blogPost">
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
export default function blogPost() {
  return (
    <>
      <Navbar></Navbar>
      <section className="wrapper mb-[128px]">
        <div className="mt-[96px] mb-[48px]">
          <h1 className="text-center mb-[24px] w-[768px] mx-auto">
            New invoicing features to help you get paid faster
          </h1>
          <p className="font-medium text-[16px] roboto text-center">
            Luke Matthews l November 8, 2021
          </p>
        </div>
        <div className="mb-[64px]">
          <img src="../blog-image.png" alt="" />
        </div>

        <div className="w-[768px] mx-auto">
          <h2 className="mb-[20px]">This is a blog post headline</h2>
          <p className="mb-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui
            auctor dictum eget a elit. Pellentesque varius diam risus, ut
            condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar
            cursus nec quis tellus. Quisque feugiat tortor lectus, pretium
            interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi.
            Phasellus consectetur sapien accumsan lectus tincidunt placerat.
            Etiam ornare nibh vel dui egestas, eu posuere metus convallis.
          </p>
          <p className="mb-[28px]">
            Ut non urna a odio condimentum dictum. Proin egestas erat a orci
            ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
            justo. Vestibulum congue dictum libero finibus vehicula. Aliquam
            nisi velit, ultricies eget enim vel, venenatis mollis ante. Maecenas
            sodales tristique quam. Suspendisse fringilla massa vel dolor ornare
            rhoncus. Nullam ut orci mattis leo varius laoreet sed mollis dui.
            Aenean placerat nec enim ut finibus. Maecenas suscipit nibh eu neque
            egestas, non condimentum mi bibendum. Sed est eros, molestie
            consectetur auctor non, lobortis quis tortor. Nam cursus imperdiet
            massa volutpat hendrerit. Sed suscipit ligula iaculis lorem sagittis
            tincidunt. Etiam pellentesque metus vel enim iaculis aliquam. Mauris
            at nisi sed elit gravida malesuada.
          </p>
          <h3 classsName="mb-[20px]">This is a small blog post headline</h3>
          <p className="mb-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui
            auctor dictum eget a elit. Pellentesque varius diam risus, ut
            condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar
            cursus nec quis tellus. Quisque feugiat tortor lectus, pretium
            interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi.
            Phasellus consectetur sapien accumsan lectus tincidunt placerat.
            Etiam ornare nibh vel dui egestas, eu posuere metus convallis.
          </p>
          <blockquote className="pl-[20px] border-l border-light-violet mb-[24px]">
            <p>
              Ut non urna a odio condimentum dictum. Proin egestas erat a orci
              ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
              justo. Vestibulum congue dictum libero finibus vehicula. Aliquam
              nisi velit, ultricies eget enim vel, venenatis mollis ante.
            </p>
          </blockquote>
          <p>
            Ut non urna a odio condimentum dictum. Proin egestas erat a orci
            ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
            justo. Vestibulum congue dictum libero finibus vehicula. Aliquam
            nisi velit, ultricies eget enim vel, venenatis mollis ante. Maecenas
            sodales tristique quam. Suspendisse fringilla massa vel dolor ornare
            rhoncus. Nullam ut orci mattis leo varius laoreet sed mollis dui.
            Aenean placerat nec enim ut finibus. Maecenas suscipit nibh eu neque
            egestas, non condimentum mi bibendum. Sed est eros, molestie
            consectetur auctor non, lobortis quis tortor. Nam cursus imperdiet
            massa volutpat hendrerit. Sed suscipit ligula iaculis lorem sagittis
            tincidunt. Etiam pellentesque metus vel enim iaculis aliquam. Mauris
            at nisi sed elit gravida malesuada.
          </p>
        </div>
      </section>

      <section className="wrapper mb-[128px]">
        <h1 className="text-center mb-[64px]">Read more posts</h1>
        <div className="grid grid-cols-3 gap-x-[24px] gap-y-[64px]">
          <Posts
            img="../close-up-photography-of-woman-sitting-beside-table-while-using-macbook-3178818.png"
            title="How to Make Recurring Invoicing More Efficient"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
          />
          <Posts
            img="../woman-writing-on-her-notebook-while-holding-a-cup-7616800.png"
            title="How to Reduce Checkout Abandonment for more Conversions"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
          />
          <Posts
            img="../photo-of-female-engineer-working-on-her-workspace-3862632.png"
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
