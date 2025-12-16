const API_KEY = "dfe68af0e33d438c46cb2a1fb5860c4a";

export async function getWeather(city) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("City not found");
  }

  const data = await res.json();
  return data;
}
