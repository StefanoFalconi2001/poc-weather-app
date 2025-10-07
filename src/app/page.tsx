"use client";

import Image from "next/image";
import { useReducer, useState } from "react";
import WeatherForm from "@/components/WeatherForm";
import WeatherList from "@/components/WeatherList";
import { weatherReducer } from "@/reducers/weatherReducer";
import { WeatherData, saveWeatherResult } from "@/services/weatherService";
import { handleSearch } from "@/utilities/formUtilities";

export interface WeatherState {
  weather: WeatherData[];
  loading: boolean;
  error: string;
  selected: Set<string>;
  savedWeathers: WeatherData[];
}

const initialState: WeatherState = {
  weather: [],
  loading: false,
  error: "",
  selected: new Set<string>(),
  savedWeathers: [],
};

export default function Home() {
  const [state, dispatch] = useReducer(weatherReducer, initialState);
  const [selectedWeather, setSelectedWeather] = useState<WeatherData[]>([]);
  const search = handleSearch(dispatch);

  const saveSelectedWeather = async () => {
    if (selectedWeather.length === 0) return;

    try {
      await Promise.all(selectedWeather.map((w) => saveWeatherResult(w)));
      alert("Selected weather saved successfully!");
      setSelectedWeather([]);
    } catch (error) {
      if (error instanceof Error) {
        alert("Error saving selected weather data: " + error.message);
      } else {
        alert("Error saving selected weather data: unknown error");
      }
    }
  };

  return (
    <main>
      <div className="logo-container">
        <Image
          src="/weatherlyLogo.png"
          alt="Weatherly Logo"
          width={400}
          height={100}
          priority
        />
      </div>

      <WeatherForm
        onSearch={search}
        dispatch={dispatch}
        onSaveSelected={saveSelectedWeather}
        showSavedButton={true}
      />

      {state.loading && (
        <p className="loading-message">Loading weather data...</p>
      )}

      {state.error && (
        <div className="error-message">
          <p>{state.error}</p>
        </div>
      )}

      {!state.loading && !state.error && state.weather.length === 0 && (
        <p className="loading-message">No results found.</p>
      )}

      {state.weather.length > 0 && (
        <WeatherList
          weather={state.weather}
          onSelectionChange={setSelectedWeather}
        />
      )}
    </main>
  );
}
