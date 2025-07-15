import { WeatherData } from "@/services/weatherService";

interface WeatherCardProps {
  data: WeatherData;
}

export default function WeatherCard({ data }: WeatherCardProps) {
  return (
    <div className="weather-card">
      <h2>{data.city}</h2>
      <p>🌡️ Temperature: {data.temperature}°C</p>
      <p>💧 Humidity: {data.humidity}%</p>
      <p>📋 Condition: {data.description}</p>
    </div>
  );
}
