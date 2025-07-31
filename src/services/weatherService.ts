export interface WeatherData {
  _id?: string;
  city: string;
  country: string;
  temperature: number;
  humidity: number;
  description: string;
  createdAt?: string;
}

interface OpenWeatherItem {
  name: string;
  sys: {
    country: string;
  };
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

  const items: OpenWeatherItem[] = data.list;

  return items
    .filter(
      (item) =>
        item.name && item.sys?.country && item.main && item.weather?.length
    )
    .map((item) => ({
      city: item.name,
      country: item.sys.country,
      temperature: item.main.temp,
      humidity: item.main.humidity,
      description: item.weather[0].description,
    }));
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function saveWeatherResult(data: WeatherData): Promise<void> {
  const response = await fetch(`${BASE_URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to save weather data.");
  }
}
