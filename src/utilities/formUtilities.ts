import { MutableRefObject } from "react";

export function handleSubmit(
  e: React.FormEvent,
  city: string,
  onSearch: (city: string) => void,
  setLastSearchedCity: (val: string) => void
): void {
  e.preventDefault();
  if (city.trim() === "") return;

  onSearch(city.trim());
  setLastSearchedCity(city.trim());
}

export function handleClear(
  e: React.MouseEvent<HTMLButtonElement>,
  setCity: (val: string) => void,
  inputRef: MutableRefObject<HTMLInputElement | null>
): void {
  e.preventDefault();
  setCity("");
  inputRef.current?.focus();
}
