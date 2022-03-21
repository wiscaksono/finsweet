export default function BtnWhite({ text }) {
  return (
    <button className="bg-white py-[14px] px-[38px] rounded-[12px] border-2 border-light-violet shadow-md shadow-black/25">
      <a href="#" className="font-bold text-base text-primary">
        {text}
      </a>
    </button>
  );
}
