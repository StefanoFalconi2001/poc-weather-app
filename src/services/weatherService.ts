export interface WeatherData {
  city: string;
  temperature: number;
  humidity: number;
  description: string;
}

interface OpenWeatherItem {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
  }[];
}

export async function fetchWeatherList(city: string): Promise<WeatherData[]> {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/find?q=${encodeURIComponent(
    city
  )}&units=metric&appid=${apiKey}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch weather data.");
  }

  const data = await res.json();

  return data.list.map((item: OpenWeatherItem) => ({
    city: item.name,
    temperature: item.main.temp,
    humidity: item.main.humidity,
    description: item.weather[0].description,
  }));
}
