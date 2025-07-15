import WeatherCard from "./WeatherCard";
import { WeatherData } from "@/services/weatherService";

interface WeatherListProps {
  weather: WeatherData[];
}

export default function WeatherList({ weather }: WeatherListProps) {
  console.log("Weather data received:", weather);
  return (
    <div className="weather-list scrollable-weather-list">
      {weather.map((data, index) => (
        <WeatherCard key={index} data={data} />
      ))}
    </div>
  );
}
