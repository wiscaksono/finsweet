export default function Navbar() {
  return (
    <nav className="wrapper mt-[8px] roboto mb-7px">
      <div className="flex justify-between items-center">
        <img src="logo.svg" alt="" />
        <div className="flex items-center gap-[32px]">
          <ul className="flex gap-[32px] text-primary">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
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
