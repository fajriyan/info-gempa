import { Link, NavLink, useLocation } from "react-router-dom";
import Time from "./Time";

const Navbar = () => {
  const currentRoute = useLocation();
  const mainMenu = [
    { id: 1, title: "Gempa Dirasakan", url: "/gempa-dirasakan" },
    { id: 2, title: "Gempa Terkini", url: "/gempa-terkini" },
  ];

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

          <div className="flex gap-5 items-center">
            {mainMenu.map((m) => (
              <NavLink
                key={Math.random(9)}
                to={m.url}
                className={
                  currentRoute.pathname === m.url
                    ? "md:border-b-2 md:py-[18px] border-slate-600"
                    : "text-slate-800 border-b-2 border-transparent hover:border-b-2 md:py-[18px] hover:border-slate-600"
                }
              >
                {m.title}
              </NavLink>
            ))}
          </div>

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
