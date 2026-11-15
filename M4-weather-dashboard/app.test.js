import { formatTemperature, buildForecast } from "./app.js";

test("formatTemperature converts Kelvin to Celsius", () => {
  expect(formatTemperature(273.15)).toBe("0°C");
  expect(formatTemperature(298.15)).toBe("25°C");
});

test("buildForecast composes a readable summary", () => {
  const data = { name: "London", main: { temp: 283 }, weather: [{ description: "cloudy" }] };
  expect(buildForecast(data)).toBe("London: 10°C, cloudy");
});

test("formatTemperature rounds to nearest degree", () => {
  expect(formatTemperature(281.6)).toBe("8°C");
});
