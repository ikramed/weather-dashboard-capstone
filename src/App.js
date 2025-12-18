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
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        main: data.weather[0].main,
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
