import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (city) => {
    try {
      const API_KEY = "dfe68af0e33d438c46cb2a1fb5860c4a";
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();

      if (data.cod !== 200) return alert("City not found");

      setWeather({
        city: data.name,
        temp: Math.round(data.main.temp),
        tempF: Math.round((data.main.temp * 9) / 5 + 32),
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind: Math.round(data.wind.speed * 3.6), // km/h
        precipitation: data.rain?.["1h"] || 0,
        day: new Date().toLocaleDateString("fr-FR", { weekday: "long" }),
        time: new Date().toLocaleTimeString("fr-FR", {
          hour: "2-digit",
          minute: "2-digit",
        }),

        hourly: [
          { time: "15:00", temp: Math.round(data.main.temp) },
          { time: "18:00", temp: Math.round(data.main.temp - 1) },
          { time: "21:00", temp: Math.round(data.main.temp - 2) },
          { time: "00:00", temp: Math.round(data.main.temp - 3) },
        ],

        daily: [
          {
            day: "Aujourd’hui",
            condition: data.weather[0].main,
            max: Math.round(data.main.temp_max),
            min: Math.round(data.main.temp_min),
          },
        ],
      });
    } catch {
      alert("Error fetching weather");
    }
  };

  return (
    <>
      <Navbar />
      <Hero />

      <section className="weather-section" id="weather">
        <h1 className="section-title">Weather Dashboard</h1>
        <p className="section-subtitle">Check real-time weather anywhere</p>

        <SearchBar onSearch={fetchWeather} />

        {weather && <WeatherCard weather={weather} />}
      </section>

      <Footer />
    </>
  );
}

export default App;
