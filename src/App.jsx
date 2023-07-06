import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [dataGempa, setGempa] = useState([]);
  const [dataWaktu, setWaktu] = useState([]);
  const [suN, setSun] = useState(true);

  const getDataGempa = async () => {
    const ResponseI = await fetch(
      "https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json"
    );
    const DGempaI = await ResponseI.json();
    console.log(DGempaI?.Infogempa?.gempa);
    // setLoading(true);
    setGempa(DGempaI?.Infogempa?.gempa);
  };
  useEffect(() => {
    getDataGempa();
    Sekarang();
  });

  function Sekarang() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let dy = date.getUTCDate();
    let mt = date.getMonth();
    let yy = date.getFullYear();
    // let ampm = "AM";

    // if (hh > 12) {
    //   ampm = "PM";
    // }

    hh = hh < 10 ? "0" + hh : hh;
    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss + " | " + dy + "/" + mt + "/" + yy;
    setWaktu(time);
    if (hh > 18) {
      setSun(false);
    } else {
      setSun(true);
    }
  }

  function Magnitudos(props) {
    // eslint-disable-next-line react/prop-types
    if (props.mgFill <= 5.3) {
      return (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="16"
            fill="#f9990d"
            className="bi bi-exclamation-triangle ms-1"
            viewBox="0 0 16 16"
          >
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
        </>
      );
    } else {
      return (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="16"
            fill="#f33f0c"
            className="bi bi-exclamation-triangle ms-1"
            viewBox="0 0 16 16"
          >
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
        </>
      );
    }
  }

  return (
    <div className="container px-3 py-7 lg:px-0 sm:mx-auto ">
      <div className="py-3 flex justify-between">
        <h1>Data Terkini BMKG</h1>
        <span className="inline-flex items-center justify-center rounded-lg bg-sky-100 px-2.5 py-0.5 text-emerald-700">
          {suN ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className="me-1"
              viewBox="0 0 16 16"
            >
              <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="16"
              className="me-1"
              viewBox="0 0 16 16"
            >
              <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
              <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
            </svg>
          )}

          <p className="whitespace-nowrap text-sm">{dataWaktu}</p>
        </span>
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
            {dataGempa.map((dg) => (
              <>
                <tr>
                  {/* <td className="whitespace-nowrap ps-4 py-2 text-gray-800"></td> */}
                  <td className="whitespace-nowrap ps-4 py-2 text-gray-800">
                    <span>{dg.Jam}</span> - {dg.Tanggal}
                  </td>
                  <td className="whitespace-nowrap ps-4 py-2 font-medium text-gray-800 flex">
                    {dg.Magnitude}
                    {<Magnitudos mgFill={dg.Magnitude} />}
                  </td>
                  <td className="whitespace-nowrap ps-4 py-2 text-gray-800">
                    {dg.Lintang} | {dg.Bujur}
                  </td>
                  <td className="whitespace-nowrap ps-4 py-2 text-gray-800 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-down me-1"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                      />
                    </svg>
                    {dg.Kedalaman}
                  </td>
                  <td className="whitespace-nowrap ps-4 py-2 text-gray-800">
                    {dg.Wilayah}
                  </td>
                  <td className="whitespace-nowrap py-2 text-gray-800 flex ">
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
                    {dg.Coordinates}
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm font-sans text-gray-700">
        Sumber : Data Gempa Terkini milik{" "}
        <span className="font-medium text-sky-700">BMKG</span>
      </p>
    </div>
  );
}

export default App;
