"use client";
import Image from "next/image";
import WeatherForm from "@/components/WeatherForm";
import { weatherReducer, WeatherState } from "@/reducers/weatherReducer";
import { useReducer } from "react";
import { fetchWeather } from "../lib/weatherApi";
import WeatherCard from "@/components/WeatherCard";

export default function Home() {
  const initialState: WeatherState = {
    weather: null,
    loading: false,
    error: "",
  };

  const [state, dispatch] = useReducer(weatherReducer, initialState);

  const handleSearch = async (city: string) => {
    dispatch({ type: "FETCH_START" });
    try {
      const data = await fetchWeather(city);
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch({
          type: "FETCH_FAILURE",
          payload: error.message,
        });
      } else {
        dispatch({
          type: "FETCH_FAILURE",
          payload: "Unknown error",
        });
      }
    }
  };

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

      <WeatherForm onSearch={handleSearch} />
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
