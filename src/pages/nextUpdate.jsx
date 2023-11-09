import { useEffect, useState } from "react";
import Magnitudo from "../components/Magnitudo";
// import Skeleton from "../components/Skeleton";
import Time from "../components/Time";

const NextUpdate = () => {
  const [loading, setLoading] = useState(false);
  const [isAnimation, setAnimation] = useState(false);
  const [dGT, setdGT] = useState([]);
  const getGempaTerbaru = async () => {
    const ResponseGempa = await fetch(import.meta.env.VITE_GEMPA_TERBARU);
    const dataResponse = await ResponseGempa.json();
    setLoading(true);
    setdGT(dataResponse.data);
  };
  setTimeout(function () {
    setAnimation(true);
  }, 1000);

  useEffect(() => {
    getGempaTerbaru();
  }, []);

  return (
    <div className="selection:bg-violet-200 selection:text-black">
      {/* Navbar Start  */}
      <div className="border-b sticky bg-white top-0 z-50">
        <div className="container h-[60px] mx-auto flex items-center justify-between px-3">
          <img src="public/favicon.svg" className="w-9" alt="" />

          <div className="p-1 border-b flex flex-col items-center border-slate-300 w-[70px]">
            <p className="font-medium">
              <Time showTime={true} />
            </p>
            <p className="text-xs -mt-[6px]">
              <Time showDate={true} />
            </p>
          </div>
        </div>
      </div>
      {/* Navbar End  */}

      <div className="container mx-auto mt-3 mb-10 ">
        <div className="grid px-3 grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-3 ">
          <div className="p-1 rounded-lg border overflow-hidden flex justify-center">
            <a
              href={"https://data.bmkg.go.id/DataMKG/TEWS/" + dGT.shakemap}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              {loading ? (
                <div className="">
                  <img
                    src={"https://data.bmkg.go.id/DataMKG/TEWS/" + dGT.shakemap}
                    alt=""
                    width="100%"
                    height="100%"
                    className="object-contain h-[400px]"
                  />
                </div>
              ) : (
                <div>
                  <img
                    src="https://data.bmkg.go.id/DataMKG/TEWS/20230821095548.mmi.jpg"
                    alt=""
                    width="100%"
                    height="100%"
                    className="object-contain blur-[3px]"
                  />
                </div>
              )}
              <span className="absolute bottom-0 right-0 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                🗺 Open Image in new Tab
              </span>
            </a>
          </div>
          <div className=" lg:col-span-2">
            <div className="rounded-lg border p-3 flex flex-wrap items-center gap-[6px]">
              <div className="w-[32%] md:w-[16%] flex items-center flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-calendar2-event"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                  <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
                </svg>
                <p className="mt-2 text-sm font-semibold">Tanggal</p>
                <p className="text-xs">{dGT.tanggal}</p>
              </div>
              <div className="w-[32%] md:w-[16%] flex items-center flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-calendar2-event"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.634 1.135A7 7 0 0 1 15 8a.5.5 0 0 1-1 0 6 6 0 1 0-6.5 5.98v-1.005A5 5 0 1 1 13 8a.5.5 0 0 1-1 0 4 4 0 1 0-4.5 3.969v-1.011A2.999 2.999 0 1 1 11 8a.5.5 0 0 1-1 0 2 2 0 1 0-2.5 1.936v-1.07a1 1 0 1 1 1 0V15.5a.5.5 0 0 1-1 0v-.518a7 7 0 0 1-.866-13.847Z" />
                </svg>
                <p className="mt-2 text-sm font-semibold">Koordinat</p>
                <p className="text-xs">{dGT.coordinates}</p>
              </div>
              <div className="w-[32%] md:w-[16%] flex items-center flex-col ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-calendar2-event"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                  <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
                </svg>
                <p className="mt-2 text-sm font-semibold">Lintang, Bujur</p>
                <p className="text-xs">
                  {dGT.lintang} {dGT.bujur}
                </p>
              </div>
              <div className="w-full my-2 md:hidden"></div>
              <div className="w-[32%] md:w-[16%] flex items-center flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-calendar2-event"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z" />
                </svg>
                <p className="mt-2 text-sm font-semibold">Magnitudo</p>
                <p className="text-xs flex">
                  {dGT.magnitude}{" "}
                  <span className="animate-pulse">
                    <Magnitudo mgFill={dGT.magnitude} />
                  </span>
                </p>
              </div>
              <div className="w-[32%] md:w-[16%] flex items-center flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-calendar2-event"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-2zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a28.458 28.458 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a28.458 28.458 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001L7 1.5zm0 0-.364-.343L7 1.5zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267z" />
                </svg>
                <p className="mt-2 text-sm font-semibold">Kedalaman</p>
                <p className="text-xs">{dGT.kedalaman}</p>
              </div>
              <div className="w-[32%] md:w-[16%] flex items-center flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  // className={isAnimation ? "bi bi-calendar2-event" : "hidden"}
                  className={isAnimation || "animate-spin"}
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                </svg>
                <p className="mt-2 text-sm font-semibold">Waktu</p>
                <p className="text-xs">{dGT.jam}</p>
              </div>
              <div className="w-full my-2">
                <hr />
              </div>

              <ul className="text-sm list-disc pl-5">
                <li>Dirasakan : {dGT.dirasakan}</li>
                <li>Wilayah : {dGT.wilayah}</li>
                <li>Potensi : {dGT.potensi}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextUpdate;
