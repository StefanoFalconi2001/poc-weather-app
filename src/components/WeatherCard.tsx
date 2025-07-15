import { WeatherData } from "@/services/weatherService";

interface WeatherCardProps {
  data: WeatherData;
}

export default function WeatherCard({ data }: WeatherCardProps) {
  if (
    !data.city ||
    !data.country ||
    !data.temperature ||
    !data.humidity ||
    !data.description
  ) {
    return (
      <div className="weather-card error">
        <p>⚠️ Incomplete data for this location.</p>
      </div>
    );
  }

  return (
    <div className="weather-card">
      <h2>
        {data.city}, <span className="country">{data.country}</span>
      </h2>
      <p>🌡️ Temperature: {data.temperature}°C</p>
      <p>💧 Humidity: {data.humidity}%</p>
      <p>📋 Condition: {data.description}</p>
    </div>
  );
}
