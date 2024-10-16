import axios from 'axios';
import { useEffect, useState } from 'react';

const Weather = () => {
  const [data, setData] = useState();
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [error, setError] = useState(null); 

  const getCurrentWeather = async () => {
    const cachedData = localStorage.getItem('weatherData');
    const cacheExpiration = localStorage.getItem('weatherDataExpiration');

    if (cachedData && cacheExpiration && new Date().getTime() < cacheExpiration) {
      setData(JSON.parse(cachedData));
    } else if (lat && lon) { 
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_WEATHER_VENDOR}&units=metric&lang=id`
      );
      const get = res.data;
      setData(get);

      localStorage.setItem('weatherData', JSON.stringify(get));
      localStorage.setItem('weatherDataExpiration', new Date().getTime() + 1700000);
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
          setError("Gagal mendapatkan lokasi. Silakan periksa pengaturan izin lokasi."); 
        }
      );
    } else {
      setError("Geolocation tidak didukung oleh browser ini."); 
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    getCurrentWeather();
  }, [lat, lon]);

  return (
    <div className=''>
      {error ? ( 
        <p className="text-red-500 text-xs">{error}</p>
      ) : (
        <div className="w-max rounded-md flex items-center gap-2">
          <img src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@4x.png`} alt="icon cloud" className='w-[50px]' />
          <div className="">
            <p className='font-semibold'>{data?.main?.temp}°C</p>
            <p className='text-xs -mt-1'>
              {data?.name}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
