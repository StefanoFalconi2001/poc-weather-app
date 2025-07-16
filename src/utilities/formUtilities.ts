import { MutableRefObject } from "react";
import { WeatherAction } from "@/reducers/weatherReducer";

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
