import "./WeatherCard.css";

export default function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <h2>{weather.city}</h2>
      <h1>{weather.temp}°C</h1>
      <p>{weather.description}</p>
      <div className="details">
        <span>💧 {weather.humidity}%</span>
        <span>💨 {weather.wind} m/s</span>
      </div>
    </div>
  );
}
