import { Title } from "../../basics/Title";

export const Service = ({ subTitle, title, children, className, id }) => {

  return (
    <section className="wrapper mb-[128px]" id={id}>
      <Title
        subTitle={subTitle}
        title={title}
        className="mb-[48px] text-center titleSection opacity-100"
      />
      <div className={`${className} rounded-[24px]  grid grid-cols-3`}>
        {children}
      </div>
    </section>
  );
};

export const ServiceContent = ({ icon, title, className, id }) => {
  return (
    <div className={`flex flex-col ${className}`} id={id}>
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
