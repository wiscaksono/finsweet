export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="wrapper pt-[64px] flex justify-between test">
        <div className="flex gap-[58px]">
          <div className="w-[230px]">
            <p className="text-white roboto font-semibold text-[18px] mb-[8px]">
              Company
            </p>
            <ul className="flex flex-col gap-[8px] faded-white">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Why Choose us</a>
              </li>

              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Testimonial</a>
              </li>
            </ul>
          </div>

          <div className="w-[230px]">
            <p className="text-white roboto font-semibold text-[18px] mb-[8px]">
              Resources
            </p>
            <ul className="flex flex-col gap-[8px] faded-white">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>

              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="w-[230px]">
            <p className="text-white roboto font-semibold text-[18px] mb-[8px]">
              Product
            </p>
            <ul className="flex flex-col gap-[8px] faded-white">
              <li>
                <a href="#">Project management</a>
              </li>
              <li>
                <a href="#">Time tracker</a>
              </li>

              <li>
                <a href="#">Time schedule</a>
              </li>
              <li>
                <a href="#">Lead generate</a>
              </li>
              <li>
                <a href="#">Remote Collaboration</a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="mb-[32px]">
            <img src="logo-white.svg" alt="" />
          </div>
          <p className="text-white roboto font-semibold text-[18px] tracking-[150%] mb-[16px]">
            Subscribe to our Newsletter
          </p>
          <div className="w-[410px] flex items-center justify-center mx-auto relative mb-[64px]">
            <input
              type="email"
              className="w-full py-[16px] px-[22px] rounded-[20px] bg-[#2B2E3C] placeholder-text-white/50 text-white border-none outline-none"
              placeholder="Enter your Email"
            />
            <button
              type="button"
              className="absolute flex-shrink-0 py-[16px] px-[40px] bg-white rounded-[12px] right-0"
            >
              <h6 className="text-primary">Subscribe</h6>
            </button>
          </div>
        </div>
      </div>

      <div className="flex wrapper gap-[32px] items-center justify-center pb-[64px]">
        <img src="footer-line.svg" alt="" />
        <div className="flex gap-[32px]">
          <p className="text-[12px] roboto faded-white">
            © Copyright Finsweet 2022
          </p>
          <div className="flex gap-[24px] opacity-60">
            <a href="#">
              <img src="Facebook.svg" alt="" />
            </a>
            <a href="#">
              <img src="Twitter.svg" alt="" />
            </a>
            <a href="#">
              <img src="Instagram.svg" alt="" />
            </a>
            <a href="#">
              <img src="Linkedin.svg" alt="" />
            </a>
          </div>
        </div>
        <img src="footer-line.svg" alt="" />
      </div>
    </footer>
  );
}
