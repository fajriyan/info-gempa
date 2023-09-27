import { useEffect, useState } from "react";
import Magnitudo from "./Magnitudo";
import Skeleton from "./Skeleton";

function Gempa() {
  const [loading, setLoading] = useState(false);
  const [dGT, setdGT] = useState([]);
  const getGempaTerbaru = async () => {
    const ResponseGempa = await fetch(import.meta.env.VITE_GEMPA_TERBARU);
    const dataResponse = await ResponseGempa.json();
    setLoading(true);
    setdGT(dataResponse.data);
  };
  useEffect(() => {
    getGempaTerbaru();
  });

  return (
    <div className="mt-3">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-3">
        <div className="md:h-[500px] rounded-lg border lg:col-span-2 p-3 flex items-center">
          <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm w-full">
            <dl className="-my-2 divide-y divide-gray-100 text-sm">
              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-6 sm:gap-4">
                <dt className="font-medium text-gray-900">Jam | Tanggal </dt>
                {loading ? (
                  <dd className="text-gray-700 sm:col-span-2">
                    {dGT.jam} | {dGT.tanggal}
                  </dd>
                ) : (
                  <dd className="text-gray-700 sm:col-span-2">
                    <Skeleton />
                  </dd>
                )}
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-6 sm:gap-4">
                <dt className="font-medium text-gray-900">Koordinat </dt>
                {loading ? (
                  <dd className="text-gray-700 sm:col-span-2 group">
                    {dGT.coordinates}
                    <a
                      href={
                        "https://www.google.com/maps/place/" + dGT.coordinates
                      }
                      className="ml-2 rounded bg-gray-800 px-2 py-[3px] text-xs text-white invisible group-hover:visible"
                    >
                      lihat di Maps
                    </a>
                  </dd>
                ) : (
                  <dd className="w-[75%]">
                    <Skeleton />
                  </dd>
                )}
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-6 sm:gap-4">
                <dt className="font-medium text-gray-900"> Litang | Bujur</dt>
                {loading ? (
                  <dd className="text-gray-700 sm:col-span-2">
                    {dGT.lintang} | {dGT.bujur}
                  </dd>
                ) : (
                  <Skeleton />
                )}
              </div>
              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-6 sm:gap-4">
                <dt className="font-medium text-gray-900">Magnitude</dt>
                {loading ? (
                  <dd className="text-gray-700 sm:col-span-2 flex ">
                    {dGT.magnitude}
                    <Magnitudo mgFill={dGT.magnitude} />
                  </dd>
                ) : (
                  <dd className="w-1/2">
                    <Skeleton />
                  </dd>
                )}
              </div>
              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-6 sm:gap-4">
                <dt className="font-medium text-gray-900">Kedalaman</dt>
                {loading ? (
                  <dd className="text-gray-700 sm:col-span-2">
                    {dGT.kedalaman}
                  </dd>
                ) : (
                  <dd className="w-1/3">
                    <Skeleton />
                  </dd>
                )}
              </div>

              <div className="grid grid-cols-1 gap-1 px-3 py-2 sm:grid-cols-6 sm:gap-4">
                <dt className="font-medium text-gray-900">Wilayah</dt>
                {loading ? (
                  <dd className="text-gray-700 sm:col-span-5">{dGT.wilayah}</dd>
                ) : (
                  <dd className="sm:col-span-3">
                    <Skeleton />
                  </dd>
                )}
              </div>
              <div className="grid grid-cols-1 gap-1 px-3 py-2 sm:grid-cols-6 sm:gap-4">
                <dt className="font-medium text-gray-900">Potensi</dt>
                {loading ? (
                  <dd className="text-gray-700 sm:col-span-5">{dGT.potensi}</dd>
                ) : (
                  <dd className="sm:col-span-3 w-[70%]">
                    <Skeleton />
                  </dd>
                )}
              </div>
              <div className="grid grid-cols-1 gap-1 px-3 py-2 sm:grid-cols-6 sm:gap-4">
                <dt className="font-medium text-gray-900">Dirasakan</dt>
                {loading ? (
                  <dd className="text-gray-700 sm:col-span-5">
                    {dGT.dirasakan}
                  </dd>
                ) : (
                  <dd className="sm:col-span-3 w-1/2">
                    <Skeleton />
                  </dd>
                )}
              </div>
            </dl>
          </div>
        </div>
        <div className="h-[500px] rounded-lg border overflow-hidden flex">
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
                  className="object-contain"
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
      </div>
    </div>
  );
}

export default Gempa;
