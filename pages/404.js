import Link from "next/link";
import Navbar from "../components/Navbar";
export default function FourOhFour() {
  return (
    <>
      <Navbar></Navbar>
      <div className="my-auto w-full h-full flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-center">
            404 <br /> Page Not Found
          </h1>
        </div>
      </div>
    </>
  );
}
