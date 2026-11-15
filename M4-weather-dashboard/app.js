export function formatTemperature(kelvin) {
  return `${Math.round(kelvin - 273.15)}°C`;
}

export function buildForecast(data) {
  return `${data.name}: ${formatTemperature(data.main.temp)}, ${data.weather[0].description}`;
}

export async function fetchWeather(city, apiKey) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Weather API ${res.status}`);
  return res.json();
}
