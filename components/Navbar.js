import { useRouter } from "next/router";
export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="wrapper mt-[8px] roboto mb-7px">
      <div className="flex justify-between items-center">
        <a onClick={() => router.push("/")} href="#">
          <img src="logo.svg" alt="" />
        </a>
        <div className="flex items-center gap-[32px]">
          <ul className="flex gap-[32px] text-primary">
            <li>
              <a href="#" onClick={() => router.push("/")}>
                Home
              </a>
            </li>
            <li>
              <a href="#" onClick={() => router.push("/product")}>
                Product
              </a>
            </li>
            <li>
              <a href="#" onClick={() => router.push("/pricing")}>
                Pricing
              </a>
            </li>
            <li>
              <a href="#" onClick={() => router.push("/aboutUs")}>
                About Us
              </a>
            </li>
            <li>
              <a href="#" onClick={() => router.push("/blog")}>
                Blog
              </a>
            </li>
            <li>
              <a href="#" onClick={() => router.push("/contact")}>
                Contact
              </a>
            </li>
          </ul>
          <button className="bg-primary py-[16px] px-[40px] rounded-[12px]">
            <a href="#" className="font-bold text-base text-white">
              Free Trial
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
}
