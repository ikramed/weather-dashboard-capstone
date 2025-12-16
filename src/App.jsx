import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [weather, setWeather] = useState(null);

  
  const dummyData = {
    name: "Casablanca",
    main: { temp: 25, humidity: 60 },
    weather: [{ main: "Clear", description: "clear sky", icon: "01d" }],
    wind: { speed: 5 },
  };

  const handleSearch = (city) => {
    
    console.log("Searching for:", city);
    setWeather(dummyData);
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
