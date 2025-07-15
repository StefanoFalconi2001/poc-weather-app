"use client";
import Image from "next/image";
import WeatherForm from "@/components/WeatherForm";
import { weatherReducer, WeatherState } from "@/reducers/weatherReducer";
import { useReducer } from "react";
import WeatherCard from "@/components/WeatherCard";
import { handleSearch } from "@/utilities/searchingUtilities";

export default function Home() {
  const initialState: WeatherState = {
    weather: null,
    loading: false,
    error: "",
  };

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

      <WeatherForm onSearch={(city) => handleSearch(city, dispatch)} />
      {state.loading && <p>Loading...</p>}
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}

      {state.weather && (
        <div>
          <WeatherCard data={state.weather}></WeatherCard>
        </div>
      )}
    </main>
  );
}
