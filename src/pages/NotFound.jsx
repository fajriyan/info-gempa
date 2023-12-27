import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center container mx-auto">
      <h1 className="text-2xl font-bold">Halaman Tidak Ditemukan</h1>
      <p>Silhakan kembali ke Beranda atau Hubungi Administrator</p>
      <div className="mt-4 flex gap-2">
        <Link
          to={"/"}
          className="bg-slate-900 border border-slate-800 text-white font-medium py-[7px] rounded-md hover:bg-violet-900 px-3 text-sm"
        >
          {" "}
          Kembali ke Beranda
        </Link>
        <a href="mailto:fajriyan20@gmail.com" className="font-medium py-[7px] rounded-md px-3 text-sm">
          Hubungi
        </a>
      </div>
    </div>
  );
};

export default NotFound;
