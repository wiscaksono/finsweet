export const Title = ({ subTitle, title, children, className, position="mx-auto" }) => {
  return (
    <div className={`max-w-[576px] ${position} ${className}`}>
      <h4 className="label mb-[24px]">{subTitle}</h4>
      <h2>{title}</h2>
      {children}
    </div>
  );
};
