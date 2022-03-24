import Link from "next/link";
import Navbar from "components/advanced/Navbar";
export default function FourOhFour() {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex items-center justify-center w-full h-full my-auto">
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <h1 className="text-center">
            404 <br /> Page Not Found
          </h1>
        </div>
      </div>
    </>
  );
}
