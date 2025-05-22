import { useEffect, useState } from "react";

import { Data, Hours } from "../types/dataType";
const Hourly = ({ data }: { data: Data }) => {
  const [hours, setHours] = useState<Hours[]>([]);
  const [now, setNow] = useState<string | null>(null);
  useEffect(() => {
    const futureHours = data.forecast.forecastday[0].hour.filter(
      (hour) =>
        hour.time.split(" ")[1].split(":")[0] >=
        data.current.last_updated.split(" ")[1].split(":")[0]
    );

    const time = data.current.last_updated.split(" ")[1].split(":")[0];
    setNow(time);
    setHours(futureHours);
    console.log("1", futureHours);
  }, [data]);
  return (
    <div className="flex justify-center items-center p-5 h-full w-full rounded-md bg-black/20 backdrop-brightness-75 text-white">
      <div className="flex justify-between overflow-x-auto">
        {hours.map((hour) => (
          <div className="flex flex-col w-full items-center px-2">
            <span>
              {hour.time.split(" ")[1].split(":")[0] === now
                ? "Now"
                : hour.time.split(" ")[1].split(":")[0]}
            </span>
            <img src={hour.condition.icon} className="size-20 mx-12" />

            <span>{hour.temp_c}°C</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hourly;
