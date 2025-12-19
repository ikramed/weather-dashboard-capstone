import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

// -------- Dummy Weather Data --------
const dummyWeather = {
  city: "Salé",
  temp: 14,
  tempF: 58,
  description: "moderate rain",
  day: "Friday",
  time: "20:25",
  precipitation: 0.54,
  humidity: 100,
  wind: 13,
  hourly: [
    { time: "08:00", temp: 14 },
    { time: "09:00", temp: 14 },
    { time: "10:00", temp: 14 },
    { time: "11:00", temp: 14 },
    { time: "12:00", temp: 14 },
    { time: "13:00", temp: 14 },
    { time: "14:00", temp: 14 },
    { time: "15:00", temp: 14 },
    { time: "16:00", temp: 14 },
    { time: "17:00", temp: 14 },
    { time: "18:00", temp: 13 },
    { time: "19:00", temp: 13 },
    { time: "20:00", temp: 13 },
    { time: "21:00", temp: 12 },
    { time: "22:00", temp: 12 },
    { time: "23:00", temp: 11 },
    { time: "00:00", temp: 11 },
  ],
  daily: [
    { day: "Today", condition: "Rain", max: 14, min: 11 },
    { day: "Tomorrow", condition: "Clouds", max: 15, min: 12 },
  ],
};

function App() {
  const [weather, setWeather] = useState(null);

  const handleSearch = (city) => {
    console.log("Searching for:", city);

    // اجبر اليوم بالإنجليزية
    const englishDay = new Date().toLocaleDateString("en-US", {
      weekday: "long",
    });

    setWeather({ ...dummyWeather, city, day: englishDay });
  };

  return (
    <div className="app">
      <Header />
      <SearchBar onSearch={handleSearch} />
      {weather ? (
        <WeatherCard weather={weather} />
      ) : (
        <div className="placeholder">Search for a city to see weather</div>
      )}
    </div>
  );
}

export default App;
