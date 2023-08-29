import { useEffect, useState } from "react";
import Gempa from "../components/Gempa";
import Magnitudo from "../components/Magnitudo";
import Time from "../components/Time";
import Skeleton from "../components/Skeleton";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [dataGempa, setGempa] = useState([]);
  const skeletonloop = [1, 2, 3, 4, 5];

  const getDataGempa = async () => {
    const ResponseI = await fetch(import.meta.env.VITE_GEMPA_TERKINI);
    const DGempaI = await ResponseI.json();
    setLoading(true);
    setGempa(DGempaI.data);
  };
  useEffect(() => {
    getDataGempa();
  }, []);

  return (
    <div className="container px-3 py-7 lg:px-0 sm:mx-auto ">
      <h1 className="flex justify-between">
        Informasi Data Gempa Bumi Terbaru <Time csun={true} />
      </h1>

      <Gempa />
      <div className="py-3 mt-10 flex gap-5">
        <h2>Data Terkini BMKG</h2>
      </div>
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 bg-white text-sm">
          <thead className="text-left">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Waktu Gempa
              </th>
              <th className="whitespace-nowrap px-3 py-2 font-medium text-gray-900">
                Magnitudo
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Litang | Bujur
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Kedalaman
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Wilayah
              </th>
              <th className="whitespace-nowrap py-2 font-medium text-gray-900">
                Koordinat
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {loading ? (
              dataGempa.map((dg) => (
                <tr className="group" key={dg.DateTime + dg.Bujur + dg.Lintang}>
                  <td className="whitespace-nowrap ps-4 py-2 text-gray-800 group-hover:bg-slate-50">
                    <span>{dg.Tanggal}</span> - {dg.Jam}
                  </td>
                  <td className="whitespace-nowrap ps-4 py-2 font-medium text-gray-800 flex group-hover:bg-slate-50">
                    {dg.Magnitude}
                    <Magnitudo mgFill={dg.Magnitude} />
                  </td>
                  <td className="whitespace-nowrap ps-4 py-2 text-gray-800 group-hover:bg-slate-50">
                    {dg.Lintang} | {dg.Bujur}
                  </td>
                  <td className="whitespace-nowrap ps-4 py-2 text-gray-800 flex group-hover:bg-slate-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-down me-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.039 3.314a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 3.964a.5.5 0 0 1-.278-.65zm0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 6.964a.5.5 0 0 1-.278-.65zm0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 9.964a.5.5 0 0 1-.278-.65zm0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65z" />
                    </svg>
                    {dg.Kedalaman}
                  </td>
                  <td className="whitespace-nowrap ps-4 py-2 text-gray-800 group-hover:bg-slate-50">
                    {dg.Wilayah}
                  </td>
                  <td className="whitespace-nowrap px-5 md:px-1 py-2 text-gray-800 flex group-hover:bg-slate-50 hover:underline  relative">
                    <a
                      href={
                        "https://www.google.com/maps/place/" + dg.Coordinates
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="flex group/coordinate"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="16"
                        fill="currentColor"
                        className="bi bi-geo-alt me-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                      <span className="absolute bottom-9 right-3 scale-y-0 rounded bg-gray-800 px-2 py-1 text-xs text-white md:group-hover/coordinate:scale-y-100 ease-in duration-200 ">
                        Open in Maps
                      </span>
                      {dg.Coordinates}
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <>
                {skeletonloop.map(() => (
                  <tr key={Math.random(20)}>
                    <td className="ps-4 py-2 text-gray-800">
                      <Skeleton />
                    </td>
                    <td className="ps-4 py-2 font-medium text-gray-800">
                      <Skeleton />
                    </td>
                    <td className="ps-4 py-2 text-gray-800">
                      <Skeleton />
                    </td>
                    <td className="ps-4 py-2 text-gray-800">
                      <Skeleton />
                    </td>
                    <td className="ps-4 py-2 text-gray-800">
                      <Skeleton />
                    </td>
                    <td className="py-2 text-gray-800 ">
                      <Skeleton />
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm font-sans text-gray-700">
        Sumber : Data Gempa milik{" "}
        <span className="font-medium text-sky-700">BMKG</span>
      </p>
    </div>
  );
};

export default Home;
