import { useEffect, useState } from "react";
import Magnitudo from "./Magnitudo";

function Gempa() {
  const [loading, setLoading] = useState(false);
  const [dGT, setdGT] = useState([]);
  const getGempaTerbaru = async () => {
    const ResponseGempa = await fetch(import.meta.env.VITE_GEMPA_TERBARU);
    const dataResponse = await ResponseGempa.json();
    // console.log(dataResponse.data);
    setLoading(true);
    setdGT(dataResponse.data);
  };
  useEffect(() => {
    getGempaTerbaru();
  }, []);

  return (
    <div className="mt-3">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-3">
        <div className="md:h-[500px] rounded-lg border lg:col-span-2 p-3 flex items-center">
          <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm w-full">
            <dl className="-my-2 divide-y divide-gray-100 text-sm">
              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-6 sm:gap-4">
                <dt className="font-medium text-gray-900">Jam | Tanggal </dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {dGT.jam} | {dGT.tanggal}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-6 sm:gap-4">
                <dt className="font-medium text-gray-900">Koordinat </dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {dGT.coordinates}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-6 sm:gap-4">
                <dt className="font-medium text-gray-900"> Litang | Bujur</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {dGT.lintang} | {dGT.bujur}
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-6 sm:gap-4">
                <dt className="font-medium text-gray-900">Magnitude</dt>
                <dd className="text-gray-700 sm:col-span-2 flex ">
                  {dGT.magnitude} <Magnitudo mgFill={dGT.Magnitude} />
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-6 sm:gap-4">
                <dt className="font-medium text-gray-900">Kedalaman</dt>
                <dd className="text-gray-700 sm:col-span-2">{dGT.kedalaman}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 px-3 py-2 sm:grid-cols-6 sm:gap-4">
                <dt className="font-medium text-gray-900">Wilayah</dt>
                <dd className="text-gray-700 sm:col-span-5">{dGT.wilayah}</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 px-3 py-2 sm:grid-cols-6 sm:gap-4">
                <dt className="font-medium text-gray-900">Potensi</dt>
                <dd className="text-gray-700 sm:col-span-5">{dGT.potensi}</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 px-3 py-2 sm:grid-cols-6 sm:gap-4">
                <dt className="font-medium text-gray-900">Dirasakan</dt>
                <dd className="text-gray-700 sm:col-span-5">{dGT.dirasakan}</dd>
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
            <img
              src={"https://data.bmkg.go.id/DataMKG/TEWS/" + dGT.shakemap}
              alt=""
              width="100%"
              height="100%"
              className="object-contain"
            />
            {/* <span className="absolute bottom-0 right-0 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
              🗺 Open Image in new Tab
            </span> */}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Gempa;
