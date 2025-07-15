import { WeatherData } from "@/services/weatherService";

export interface WeatherState {
  weather: WeatherData[] | null;
  loading: boolean;
  error: string;
}

export type WeatherAction =
  | { type: "FETCH_START" }
  | { type: "FETCH_SUCCESS"; payload: WeatherData[] }
  | { type: "FETCH_FAILURE"; payload: string }
  | { type: "CLEAR_WEATHER" };

export const weatherReducer = (
  state: WeatherState,
  action: WeatherAction
): WeatherState => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: "", weather: null };

    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        weather: action.payload,
        error: "",
      };

    case "FETCH_FAILURE":
      return { ...state, loading: false, error: action.payload };

    case "CLEAR_WEATHER":
      return { ...state, weather: null, error: "" };

    default:
      return state;
  }
};
