import { Link } from "react-router-dom";
import Time from "./Time";

const Navbar = () => {
  return (
    <>
      {/* Start - Navbar  */}

      <div className="border-b sticky bg-white top-0 z-50">
        <div className="container h-[60px] mx-auto flex items-center justify-between px-3">
          <Link to={"/"}>
            <img
              src="https://raw.githubusercontent.com/fajriyan/info-gempa/90f658ab8dcb69f7cc2ebd628ab8fb13d05b6a32/public/favicon.svg"
              className="w-9 hover:scale-110"
              alt="Logo"
              width={100}
              height={100}
            />
          </Link>

          <Link to={"/gempa-terkini"} className="flex gap-1 items-center">
            Gempa Dirasakan
          </Link>
          <div className="p-1 flex flex-col items-center w-[70px]" id="time-is">
            <p className="font-medium">
              <Time showTime={true} />
            </p>
            <p className="text-xs -mt-[6px]">
              <Time showDate={true} />
            </p>
          </div>
        </div>
      </div>
      {/*  End - Navbar  */}
    </>
  );
};

export default Navbar;
