import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
    
      <div className="logo">
        <img src="/weather-logo.png" alt="Logo" />
        <span>WeatherApp</span>
      </div>

      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#weather">Weather</a></li>
      </ul>
    </nav>
  );
}
