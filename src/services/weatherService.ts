export interface WeatherData {
  city: string;
  temperature: number;
  humidity: number;
  description: string;
}

export async function fetchWeather(city: string): Promise<WeatherData> {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(city)}&aqi=yes`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("No se pudo obtener el clima.");
  }

  const data = await res.json();

  return {
    city: data.location.name,
    temperature: data.current.temp_c,
    humidity: data.current.humidity,
    description: data.current.condition.text,
  };
}
