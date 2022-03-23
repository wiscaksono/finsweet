import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return (
    <section className="bg-white">
      <nav className="z-50 py-8 wrapper roboto ">
        <div className="flex items-center justify-between ">
          <a className="cursor-pointer" onClick={() => router.push("/")}>
            <img src="logo.svg" alt="" />
          </a>
          <div className="flex items-center gap-[32px]">
            <ul className="flex gap-[32px] text-primary">
              <li>
                <a className="cursor-pointer" onClick={() => router.push("/")}>
                  Home
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer"
                  onClick={() => router.push("/product")}
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer"
                  onClick={() => router.push("/pricing")}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer"
                  onClick={() => router.push("/aboutUs")}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer"
                  onClick={() => router.push("/blog")}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer"
                  onClick={() => router.push("/contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
            <div>
              <a href="#" className="cursor-pointer text-base font-bold text-white bg-primary py-[16px] px-[40px] rounded-[12px]">
                Free Trial
              </a>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}
