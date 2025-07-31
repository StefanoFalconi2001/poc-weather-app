import { WeatherData } from "@/services/weatherService";

export interface WeatherState {
  weather: WeatherData[];
  loading: boolean;
  error: string;
  selected: Set<string>;
  savedWeathers: WeatherData[]; // ← agregado
}

export type WeatherAction =
  | { type: "FETCH_START" }
  | { type: "FETCH_SUCCESS"; payload: WeatherData[] }
  | { type: "FETCH_FAILURE"; payload: string }
  | { type: "CLEAR_WEATHER" }
  | { type: "TOGGLE_SELECT"; payload: string }
  | { type: "CLEAR_SELECTION" }
  | { type: "SET_SAVED_WEATHERS"; payload: WeatherData[] }
  | { type: "DELETE_SAVED_WEATHER"; payload: string };

export const weatherReducer = (
  state: WeatherState,
  action: WeatherAction
): WeatherState => {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        loading: true,
        error: "",
        weather: [],
        selected: new Set(),
      };

    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        weather: action.payload,
        error: "",
        selected: new Set(),
      };

    case "FETCH_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "CLEAR_WEATHER":
      return {
        ...state,
        weather: [],
        error: "",
        selected: new Set(),
      };

    case "TOGGLE_SELECT":
      const newSelected = new Set(state.selected);
      if (newSelected.has(action.payload)) {
        newSelected.delete(action.payload);
      } else {
        newSelected.add(action.payload);
      }
      return {
        ...state,
        selected: newSelected,
      };

    case "CLEAR_SELECTION":
      return {
        ...state,
        selected: new Set(),
      };

    case "SET_SAVED_WEATHERS":
      return {
        ...state,
        savedWeathers: action.payload,
      };

    case "DELETE_SAVED_WEATHER":
      return {
        ...state,
        savedWeathers: state.savedWeathers.filter(
          (w) => w._id !== action.payload
        ),
      };

    default:
      return state;
  }
};
