export default function Btn({ text }) {
  return (
    <button className="bg-primary py-[16px] px-[40px] rounded-[12px]">
      <a href="#" className="font-bold text-base text-white">
        {text}
      </a>
    </button>
  );
}
