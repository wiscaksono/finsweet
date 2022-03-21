export default function Features({ icon, title }) {
  return (
    <div>
      <img src={icon} alt="" className="mb-[24px]" />
      <div className="w-[339px] h-[183px]">
        <h3 className="mb-[16px]">{title}</h3>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor.
        </p>
      </div>
    </div>
  );
}
