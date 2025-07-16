import { fetchWeatherList } from "@/services/weatherService";
import { WeatherAction } from "@/reducers/weatherReducer";

export const handleSearch = async (
  city: string,
  dispatch: React.Dispatch<WeatherAction>
) => {
  dispatch({ type: "FETCH_START" });

  try {
    const data = await fetchWeatherList(city);
    dispatch({ type: "FETCH_SUCCESS", payload: data });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("ERROR:", error);
      dispatch({ type: "FETCH_FAILURE", payload: error.message });
    } else {
      dispatch({ type: "FETCH_FAILURE", payload: "Unknown error" });
    }
  }
};
