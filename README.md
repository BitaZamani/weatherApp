# 🌤️ Weather Forecast App

A modern and responsive weather forecast web app built with **React**, **TypeScript**, and **TailwindCSS**. This application fetches real-time weather data using the [WeatherAPI](https://www.weatherapi.com/) and provides users with:

- Current weather conditions  
- Hourly forecast  
- 3-day forecast  
- Location-based weather info  
- Dynamic backgrounds based on time of day and weather conditions  

## 🚀 Demo

> Add a live demo link here if deployed (e.g., Vercel, Netlify)


## 📦 Features

- 🌎 Search by city or airport  
- ☀️ Real-time current weather details  
- 📅 3-day weather forecast with temperature and conditions  
- 🕒 Hourly temperature and condition timeline  
- 🎨 Dynamic background images for day and night  
- 🌫️ Weather icons and condition codes  
- 🔄 Loading indicator and error message display  

## 🛠️ Tech Stack

- ⚛️ React  
- ⛓️ TypeScript  
- 🎨 TailwindCSS  
- 📦 Axios  
- 🧠 WeatherAPI   

## 📁 Folder Structure

.
├── public/  
├── src/  
│   ├── components/        # Reusable components (Today, Hourly, Info, Forecast)  
│   ├── UI/                # Loader and shared UI elements  
│   ├── utils/             # Helper functions (backgroundSet.ts)  
│   ├── types/             # TypeScript types  
│   ├── App.tsx            # Main component logic  
│   └── index.tsx          # App entry point  

## 🔧 Getting Started

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app

2. **Install dependencies:**

```bash 
npm install

3. **Set your WeatherAPI key:**

In App.tsx, replace YOUR_API_KEY with your actual API key from weatherapi.com:
const res = await axios.get(
  `http://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&q=${searchQuery}&days=3&aqi=yes&alerts=no`
);

## 🙌 Acknowledgements

[WeatherAPI](https://www.weatherapi.com/)


[Tabler Icons](https://tabler.io/)