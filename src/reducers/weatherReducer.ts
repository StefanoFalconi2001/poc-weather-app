export interface WeatherState {
  weather: null | {
    city: string;
    temperature: number;
    humidity: number;
    description: string;
  };
  loading: boolean;
  error: string;
}

export type WeatherAction =
  | { type: "FETCH_START" }
  | { type: "FETCH_SUCCESS"; payload: WeatherState["weather"] }
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
      return { ...state, loading: false, weather: action.payload };

    case "FETCH_FAILURE":
      return { ...state, loading: false, error: action.payload };

    case "CLEAR_WEATHER":
      return { ...state, weather: null, error: "" };

    default:
      return state;
  }
};
