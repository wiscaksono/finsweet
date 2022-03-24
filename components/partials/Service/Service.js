import { Title } from "../../basics/Title";

export const Service = ({ subTitle, title, children, classNameParent, classNameChild, serviceData, id }) => {

  return (
    <section className="wrapper mb-[128px]" id={id}>
        <Title
          subTitle={subTitle}
          title={title}
          className="mb-[48px] text-center titleSection opacity-100"
        />
      <div className={`${classNameParent} rounded-[24px]  grid grid-cols-3`}>
        {serviceData ? (
          serviceData.map((data) => (
            <ServiceContent
              key={data.title}
              icon={data.icon}
              title={data.title}
              className={classNameChild}
            />
          ))
        ) : (
          <>{children}</>
        )}
      </div>
    </section>
  );
};

export const ServiceContent = ({ icon, title, className }) => {
  return (
    <div className={`flex flex-col ${className}`} id="serviceContent">
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
