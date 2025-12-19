import "./WeatherCard.css";

export default function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <h2>{weather.city}</h2>

      <h1>
        {weather.temp}°C <span className="f">{weather.tempF}°F</span>
      </h1>

      <p>{weather.description}</p>

      <p className="time">
        Météo {weather.day} {weather.time}
      </p>

      <div className="details">
        <span>🌧️ {weather.precipitation}%</span>
        <span>💧 {weather.humidity}%</span>
        <span>💨 {weather.wind} km/h</span>
      </div>

      <div className="hourly">
        {weather.hourly.map((h, i) => (
          <div key={i} className="hour">
            <span>{h.time}</span>
            <strong>{h.temp}°</strong>
          </div>
        ))}
      </div>

      <div className="daily">
        {weather.daily.map((d, i) => (
          <div key={i} className="day">
            <span>{d.day}</span>
            <span>{d.condition}</span>
            <strong>
              {d.max}° / {d.min}°
            </strong>
          </div>
        ))}
      </div>
    </div>
  );
}
