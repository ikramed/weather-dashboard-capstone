function WeatherCard({ weather }) {
  if (!weather) return null;

  return (
    <div className="weather-card">
      <h2>{weather.city}</h2>
      <div className="temp">{weather.temp}°C</div>
      <p>Humidity: {weather.humidity}%</p>
      <p>Weather: {weather.main}</p>
      <p>Wind Speed: {weather.wind} m/s</p>
      <p>{weather.description}</p>
    </div>
  );
}

export default WeatherCard;
