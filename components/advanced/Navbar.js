import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import gsap, { Power3 } from "gsap";

export default function Navbar() {
  const router = useRouter();
  let logo = useRef(null);

  useEffect(() => {
    const tl = new gsap.timeline();

    tl.from(logo, 0.7, { opacity: 0, y: -50 })
    tl.from("#menu-item", 1, {
      opacity: 0,
      y: -50,
      stagger:{
        amount: .3
      },
      ease: Power3.easeOut
    })
    tl.from("#btn-trial", { opacity: 0, y: -50 }, "-=1")

  }, [])

  return (
    <section className="bg-white">
      <nav className="z-50 py-8 wrapper roboto ">
        <div className="flex items-center justify-between ">
          <a className="cursor-pointer" ref={el => logo = el} onClick={() => router.push("/")}>
            <img src="logo.svg" alt="" />
          </a>
          <div className="flex items-center gap-[32px]">
            <ul className="flex gap-[32px] text-primary">
              <li id="menu-item">
                <a className="cursor-pointer" onClick={() => router.push("/")}>
                  Home
                </a>
              </li>
              <li id="menu-item">
                <a
                  className="cursor-pointer"
                  onClick={() => router.push("/product")}
                >
                  Product
                </a>
              </li>
              <li id="menu-item">
                <a
                  className="cursor-pointer"
                  onClick={() => router.push("/pricing")}
                >
                  Pricing
                </a>
              </li>
              <li id="menu-item">
                <a
                  className="cursor-pointer"
                  onClick={() => router.push("/aboutUs")}
                >
                  About Us
                </a>
              </li>
              <li id="menu-item">
                <a
                  className="cursor-pointer"
                  onClick={() => router.push("/blog")}
                >
                  Blog
                </a>
              </li>
              <li id="menu-item">
                <a
                  className="cursor-pointer"
                  onClick={() => router.push("/contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
            <div id="btn-trial">
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
