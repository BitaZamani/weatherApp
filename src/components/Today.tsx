import { Data } from "../types/dataType";
const Today = ({ data }: { data: Data }) => {
  return (
    <div className="grid grid-cols-8 grid-rows-2 md:flex md:justify-evenly p-5 h-full w-full bg-black/20 backdrop-brightness-75 text-white rounded-md whitespace-nowrap gap-x-5">
      <div className="col-span-4 row-span-1 -row-start-2 flex flex-col md:justify-center">
        <span className="font-bold text-3xl">{data.current.temp_c}°C</span>
        <span>Feels like: {data.current.feelslike_c}°C</span>
        <div className="border-b my-3 max-w-44 border-b-slate-300" />
        <div className="space-x-1.5 flex">
          <span className="flex space-x-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-yellow-300"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 17h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 0 1 8 0" />
              <path d="M3 21l18 0" />
              <path d="M12 9v-6l3 3m-6 0l3 -3" />
            </svg>
            Sunrise:
          </span>
          <span>{data.forecast.forecastday[0].astro.sunrise}</span>
        </div>
        <div className="space-x-1.5 flex">
          <span className="flex space-x-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-800"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 17h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 0 1 8 0" />
              <path d="M3 21l18 0" />
              <path d="M12 3v6l3 -3m-6 0l3 3" />
            </svg>
            Sunset:
          </span>
          <span>{data.forecast.forecastday[0].astro.sunset}</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center col-span-4">
        <img src={`https:${data.current.condition.icon}`} className="size-32" />
        <span>{data.current.condition.text}</span>
      </div>

      <div className="space-y-2 col-span-4 row-span-2 flex flex-col justify-center">
       
        <div className="space-x-1.5">
          <span>Humidity:</span>
          <span>{data.current.humidity}%</span>
        </div>
        <div className="space-x-1.5">
          <span>Dew Point:</span>
          <span>{data.current.dewpoint_c}°C</span>
        </div>
        <div className="border-b my-3 max-w-44 border-b-slate-300" />
        <div className="space-x-1.5">
          <span>Wind:</span>
          <span>{data.current.wind_kph} k/h</span>
        </div>
        <div className="space-x-1.5">
          <span>Gusts:</span>
          <span>{data.current.gust_kph} k/h</span>
        </div>
        <div className="space-x-1.5">
          <span>Direction:</span>
          <span>
            {data.current.wind_degree}° {data.current.wind_dir}
          </span>
        </div>
        <div className="border-b my-3 max-w-44 border-b-slate-300" />
        <div className="space-x-1.5">
          <span>Precipitation:</span>
          <span>{data.current.precip_mm} mm</span>
        </div>
        <div className="space-x-1.5">
          <span>UV:</span>
          <span>{data.current.uv}</span>
        </div>
        <div className="space-x-1.5">
          <span>Visibility:</span>
          <span>{data.current.vis_km} km</span>
        </div>
      </div>
    </div>
  );
};

export default Today;
