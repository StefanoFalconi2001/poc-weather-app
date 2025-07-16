"use client";
import { useState, useRef } from "react";
import { handleClear } from "@/utilities/formUtilities";
import { WeatherAction } from "@/reducers/weatherReducer";

interface WeatherFormProps {
  onSearch: (city: string) => void;
  dispatch: React.Dispatch<WeatherAction>;
}

export default function WeatherForm({ onSearch, dispatch }: WeatherFormProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [city, setCity] = useState("");
  const [lastSearchedCity, setLastSearchedCity] = useState("");

  return (
    <form
      data-testid="weather-form"
      className="weather-form"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="form-container">
        <input
          ref={inputRef}
          type="text"
          value={city}
          onChange={(e) => {
            const newCity = e.target.value;
            setCity(newCity);

            if (!dispatch) {
              console.error("dispatch no está definido");
              return;
            }

            if (!newCity.trim()) {
              dispatch({ type: "CLEAR_WEATHER" });
              setLastSearchedCity("");
              return;
            }

            if (
              newCity.trim().toLowerCase() !== lastSearchedCity.toLowerCase()
            ) {
              onSearch(newCity.trim());
              setLastSearchedCity(newCity.trim());
            }
          }}
          placeholder="Enter city"
          required
          className="weather-input"
        />
      </div>

      <div className="button-group">
        {city.length > 0 && (
          <button
            type="button"
            onClick={(e) => handleClear(e, setCity, inputRef, dispatch)}
            aria-label="Clear input"
            className="clear-button"
          >
            X
          </button>
        )}
      </div>
    </form>
  );
}
