export const ServiceContent = ({ icon, title, className }) => {
    return (
      <div className={`flex flex-col ${className}`}>
        <div className="w-[48px] h-[48px] mb-[24px]">
          <img src={icon} alt="" />
        </div>
        <h2 className="roboto font-bold text-[32px] leading-[120%] mb-[20px]">
          {title}
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy.
        </p>
      </div>
    );
  };