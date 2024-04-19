import { Link, NavLink, useLocation } from "react-router-dom";
import Time from "./Time";
import { useContext } from "react";
import ThemeContext from "../lib/ThemeContext";

const Navbar = () => {
  const root = window.document.documentElement;
  const online = navigator.onLine;

  const currentRoute = useLocation();
  const mainMenu = [
    { id: 1, title: "Gempa Dirasakan", url: "/gempa-dirasakan" },
    { id: 2, title: "Gempa Terkini", url: "/gempa-terkini" },
  ];

  const [theme, setTheme] = useContext(ThemeContext);

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      root.classList.remove("light");
      root.classList.add("dark");
    } else if (theme === "dark") {
      setTheme("light");
      root.classList.remove("dark");
      root.classList.add("light");
    }
  };

  return (
    <>
      {/* Start - Navbar  */}

      <div className="border-b sticky dark:bg-neutral-950/50 dark:text-white bg-white top-0 z-50">
        <div className="container h-[60px] mx-auto flex items-center justify-between px-3">
          <Link to={"/"}>
            <img
              src="https://raw.githubusercontent.com/fajriyan/info-gempa/90f658ab8dcb69f7cc2ebd628ab8fb13d05b6a32/public/favicon.svg"
              // className="w-9 hover:scale-110"
              className={
                currentRoute.pathname === "/"
                  ? "w-9 hover:scale-110 border-b pb-1 border-purple-500"
                  : "w-9 hover:scale-110"
              }
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
                    : "text-slate-800 dark:text-white border-b-2 border-transparent hover:border-b-2 md:py-[18px] hover:border-slate-600"
                }
              >
                {m.title}
              </NavLink>
            ))}
          </div>

          <div className="flex gap-2 items-center">
            {theme === "dark" ? (
              <button onClick={handleTheme}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25px"
                  height="25px"
                  className="dark:fill-white fill-black"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
                  <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
                </svg>
              </button>
            ) : (
              <button onClick={handleTheme}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25px"
                  height="25px"
                  className="dark:fill-white fill-black"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                </svg>
              </button>
            )}

            <div
              className="p-1 flex flex-col items-center w-[70px]"
              id="time-is"
            >
              <p className="font-medium">
                <Time showTime={true} />
              </p>
              <p className="text-xs -mt-[6px]">
                <Time showDate={true} />
              </p>
            </div>
            <div className="flex grow ">
              {online ? (
                <span className="w-[10px] h-[10px] bg-green-600 rounded-full animate-pulse"></span>
              ) : (
                <span className="w-[10px] h-[10px] bg-red-600 rounded-full"></span>
              )}
            </div>
          </div>
        </div>
      </div>
      {/*  End - Navbar  */}
    </>
  );
};

export default Navbar;
