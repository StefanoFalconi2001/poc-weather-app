"use client";
import { useState, useRef } from "react";
import { handleSubmit, handleClear } from "@/utilities/formUtilities";

interface WeatherFormProps {
  onSearch: (city: string) => void;
}

export default function WeatherForm({ onSearch }: WeatherFormProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [city, setCity] = useState("");

  const [lastSearchedCity, setLastSearchedCity] = useState("");

  return (
    <form
      onSubmit={(e) => handleSubmit(e, city, onSearch, setLastSearchedCity)}
      data-testid="weather-form"
      className="weather-form"
    >
      <div className="form-container">
        <input
          ref={inputRef}
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          required
          className="weather-input"
        />
      </div>
      <div className="button-group">
        {city.length > 0 && city.trim() !== lastSearchedCity && (
          <button
            type="button"
            onClick={(e) => handleClear(e, setCity, inputRef)}
            aria-label="Clear input"
            className="clear-button"
          >
            X
          </button>
        )}
        {city.length > 0 && city.trim() !== lastSearchedCity && (
          <button type="submit" aria-label="Search" className="search-button">
            🔍
          </button>
        )}
      </div>
    </form>
  );
}
