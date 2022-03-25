export const Title = ({ subTitle, title, children, className, position="mx-auto" }) => {
  return (
    <div className={`max-w-[628px] ${position} ${className}`} >
      <h4 className="label mb-[24px]">{subTitle}</h4>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

// export const Title = React.forwardRef((props={subTitle, title, children, className, position="mx-auto"}, ref) => (
//   <div className={`max-w-[576px] ${position} ${className}`} ref={ref}>
//       <h4 className="label mb-[24px]">{subTitle}</h4>
//       <h2>{title}</h2>
//       {children}
//     </div>
// ));