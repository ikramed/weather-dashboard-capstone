import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Header from "./components/Header";
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

      if (data.cod !== 200) {
        alert("City not found");
        return;
      }

      const weatherData = {
        city: data.name,
        temp: Math.round(data.main.temp),
        humidity: data.main.humidity,
        description: data.weather[0].description,
        main: data.weather[0].main,
        wind: data.wind.speed,
      };

      setWeather(weatherData);

      
      document.body.className = weatherData.main.toLowerCase();
    } catch (error) {
      alert("Error fetching weather");
    }
  };

  return (
    <div className="app">
      
     <div className="header-wrapper">
  <div className={`blur-layer ${weather ? "active" : ""}`}></div>
  <div className="header">
    <Header />
  </div>
</div>


     <div className="search-wrapper">
  <div className={`blur-layer ${weather ? "active" : ""}`}></div>
  <div className="search-bar">
    <SearchBar onSearch={fetchWeather} />
  </div>
</div>

     
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;
