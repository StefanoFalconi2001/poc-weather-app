import React from "react";
import { WeatherData } from "@/services/weatherService";

interface Props {
  savedWeather: WeatherData[];
}

const SavedWeatherList: React.FC<Props> = ({ savedWeather }) => {
  return (
    <div className="weather-results-container">
      {savedWeather.map((w, i) => (
        <div key={i} className="weather-card">
          <h3>{w.city}</h3>
          <p>Temperature: {w.temperature}°C</p>
          <p>Description: {w.description}</p>
          <p>
            Saved at:{" "}
            {w.createdAt
              ? new Date(w.createdAt).toLocaleString()
              : "No date available"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SavedWeatherList;
