"use client";

import Image from "next/image";
import { useReducer } from "react";
import WeatherForm from "@/components/WeatherForm";
import WeatherList from "@/components/WeatherList";
import { weatherReducer, WeatherState } from "@/reducers/weatherReducer";
import { handleSearch } from "@/utilities/searchingUtilities";

const initialState: WeatherState = {
  weather: [],
  loading: false,
  error: "",
};

export default function Home() {
  const [state, dispatch] = useReducer(weatherReducer, initialState);

  return (
    <main>
      <div className="logo-container">
        <Image
          src="/weatherlyLogo.png"
          alt="Weatherly Logo"
          width={200}
          height={60}
          priority
        />
      </div>

      <WeatherForm
        onSearch={(city) => handleSearch(city, dispatch)}
        dispatch={dispatch}
      />

      {state.loading && <p>Loading...</p>}

      {state.error && (
        <div className="error-message">
          <p>{state.error}</p>
        </div>
      )}

      {!state.loading && !state.error && state.weather.length === 0 && (
        <p>No results found.</p>
      )}

      {state.weather.length > 0 && (
        <div className="weather-results-container">
          <WeatherList weather={state.weather} />
        </div>
      )}
    </main>
  );
}
