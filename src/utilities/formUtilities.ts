import { MutableRefObject } from "react";
import { WeatherAction } from "@/reducers/weatherReducer";
import { fetchWeatherList } from "@/services/weatherService";

export function handleClear(
  e: React.MouseEvent<HTMLButtonElement>,
  setCity: (val: string) => void,
  inputRef: MutableRefObject<HTMLInputElement | null>,
  dispatch: React.Dispatch<WeatherAction>
): void {
  e.preventDefault();
  setCity("");
  inputRef.current?.focus();
  dispatch({ type: "CLEAR_WEATHER" });
}

export const handleSearch =
  (dispatch: React.Dispatch<WeatherAction>) => async (city: string) => {
    dispatch({ type: "FETCH_START" });
    try {
      const data = await fetchWeatherList(city);
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({ type: "FETCH_FAILURE", payload: error.message });
      } else {
        dispatch({ type: "FETCH_FAILURE", payload: "Unknown error" });
      }
    }
  };
