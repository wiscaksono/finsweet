
export const Homepage = () => {
  return (
    <header className="wrapper mb-[128.43px]">
        <div className="w-[768px]  mx-auto mt-[98px]">
          <h1 className="text-center mb-[32px]">
            The Best Software to Grow your Sales and Services
          </h1>
          <p className="large text-center mb-[48px]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat.
          </p>
          <div className="w-[576px] flex items-center justify-center mx-auto relative mb-[64px]">
            <input
              type="email"
              className="w-full p-[24px] rounded-[20px] border-2 border-light-violet"
              placeholder="Enter your Email"
            />
            <button
              type="button"
              className="absolute flex-shrink-0 border-transparent border-4 text-white  py-[16px] px-[40px] bg-primary rounded-[12px] right-[8px]"
            >
              <h6 className="text-white">Get Free trial</h6>
            </button>
          </div>
        </div>

        <div className="w-[1024px] mx-auto">
          <img src="dashboard.png" alt="" className="w-full h-full" />
        </div>
      </header>
  )
}
