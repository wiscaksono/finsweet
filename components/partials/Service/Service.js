import { Title } from "../../basics/Title";

export const Service = ({subTitle, title, children, className}) => {
    return (
      <section className="wrapper mb-[128px]">
        <Title
          subTitle={subTitle}
          title={title}
          className="mb-[48px] text-center"
        />
        <div className={`${className} rounded-[24px]  grid grid-cols-3`}>
          {children}
        </div>
      </section>
    );
  };