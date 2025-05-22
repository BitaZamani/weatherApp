export interface Data {
  location: {
    name: string;
    region: string;
    country: string;
    localtime: string;
  };
  current: {
    condition: {
      code: number;
      text: string;
      icon: string;
    };
    last_updated: string;
    feelslike_c: number;
    temp_c: number;
    humidity: number;
    dewpoint_c: number;
    wind_kph: number;
    gust_kph: number;
    wind_degree: number;
    wind_dir: string;
    precip_mm: number;
    uv: number;
    vis_km: number;
  };
  forecast: {
    forecastday: {
        date_epoch: string;
        date: string;
        day: {
            maxtemp_c: number;
            mintemp_c: number;
            condition: {
              icon: string;
            };
          };
        hour: {
            time: string;
            temp_c: number;
            condition: {
              icon: string;
            };
          }[];
      astro: {
        sunset: string;
        sunrise: string;
      };
    }[];
  };
}
export interface Hours {
    time: string;
    temp_c: number;
    condition: {
      icon: string;
    };
  }
 export interface ForecastDays {
   
      date_epoch: string;
      date: string;
      day: {
        maxtemp_c: number;
        mintemp_c: number;
        condition: {
          icon: string;
        };
      };
   
  }