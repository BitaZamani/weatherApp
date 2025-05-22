import { ForecastDays } from "../types/dataType";
const ThreeDaysForecast = ({ data }: { data: ForecastDays[] }) => {
  return (
    <div className="flex p-2.5 justify-center h-full w-full bg-black/20 backdrop-brightness-75 text-white rounded-md">
      {data.map((day) => (
        <div
          key={day.date_epoch}
          className=" w-[400px] flex flex-col justify-center items-center text-sm"
        >
          <span className="py-2 font-semibold">
            {new Date(day.date).toLocaleDateString("en-US", {
              weekday: "long",
            }) ===
            new Date().toLocaleDateString("en-US", {
              weekday: "long",
            })
              ? "Today"
              : new Date(day.date).toLocaleDateString("en-US", {
                  weekday: "long",
                })}
          </span>
          <span className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-orange-400 mr-1"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
              <path d="M8 9l4 0" />
              <path d="M16 9l6 0" />
              <path d="M19 6l0 6" />
            </svg>
            {day.day.maxtemp_c}°C
          </span>
          <img src={`${day.day.condition.icon}`} className="size-20" />
          <span className="flex justify-center items-center">
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
              className="text-blue-400 mr-1"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
              <path d="M8 9l4 0" />
              <path d="M16 9l6 0" />
            </svg>
            {day.day.mintemp_c}°C
          </span>
        </div>
      ))}
    </div>
  );
};

export default ThreeDaysForecast;
