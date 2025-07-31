import { WeatherData } from "@/services/weatherService";

interface WeatherCardProps {
  data: WeatherData;
  checked: boolean;
  onToggle: () => void;
}

export default function WeatherCard({
  data,
  checked,
  onToggle,
}: WeatherCardProps) {
  if (
    !data.city ||
    !data.country ||
    data.temperature === undefined ||
    data.humidity === undefined ||
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
      <input
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        aria-label={`Select weather for ${data.city}`}
        className="weather-checkbox"
      />
      <div className="weather-info">
        <h2>
          {data.city}, <span className="country">{data.country}</span>
        </h2>
        <p>🌡️ Temperature: {data.temperature}°C</p>
        <p>💧 Humidity: {data.humidity}%</p>
        <p>📋 Condition: {data.description}</p>
      </div>
    </div>
  );
}
