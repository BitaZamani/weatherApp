import "./App.css";
import SearchInput from "./components/SearchInput";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./UI/Loader";
import Today from "./components/Today";
import ThreeDaysForecast from "./components/ThreeDaysForecast";
import Info from "./components/Info";
import backgroundSet from "./utils/backgroundSet";
import Hourly from "./components/Hourly";
import { Data } from "./types/dataType";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState<Data | null>(null);
  const [background, setBackground] = useState("/assets/bg_earth.jpg");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    setError(false);

    const getData = async () => {
      if (searchQuery !== "") {
        setLoading(true);
        try {
          const res = await axios.get(
            `http://api.weatherapi.com/v1/forecast.json?key=f29964a01dea4fd8be465927251204&q=${searchQuery}&days=3&aqi=yes&alerts=no`
          );
          const bg = backgroundSet(res.data.current.condition.code);
          const time = parseInt(
            res.data.current.last_updated.split(" ")[1].split(":")[0]
          );

          const sunsetTime =
            parseInt(
              res.data.forecast.forecastday[0].astro.sunset
                .split(" ")[0]
                .split(":")[0]
            ) + 12;
          const sunriseTime = parseInt(
            res.data.forecast.forecastday[0].astro.sunrise
              .split(" ")[0]
              .split(":")[0]
          );
          if (bg) {
            if (time > sunsetTime || time < sunriseTime)
              setBackground(bg.night);
            else setBackground(bg.day);
          }
          setData(res.data);
        } catch (error: unknown) {
          setData(null);
          setBackground("/assets/bg_earth.jpg");
          setError(true);
          setErrorMessage("No matching location found. Please try again.");
        } finally {
          setLoading(false);
        }
      }
    };
    getData();
  }, [searchQuery]);

  return (
    <div
      className={`min-h-screen h-full md:overflow-hidden bg-center bg-cover pb-2 bg-no-repeat px-2 md:px-10 `}
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <SearchInput setSearchQuery={setSearchQuery} />
      {loading ? (
        <Loader />
      ) : error ? (
        <div className="flex justify-center items-center mt-44 text-gray-200">
          {errorMessage}
        </div>
      ) : (
        data !== null && (
          <div className="grid md:grid-cols-12 md:grid-rows-3 text-gray-200 h-full gap-5 mt-1">
            <div className="md:col-span-4 md:row-span-1 ">
              <Info data={data.location} />
            </div>
            <div className="md:col-span-8 md:row-span-2 md:col-start-5">
              <Today data={data} />
            </div>
            <div className="md:col-span-4 md:row-start-3 md:col-start-5  min-w-0">
              <Hourly data={data} />
            </div>
            <div className="md:col-span-4 md:row-start-3 md:-col-start-5 overflow-auto">
              <ThreeDaysForecast data={data.forecast.forecastday} />
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default App;
