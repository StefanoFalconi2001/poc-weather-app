import WeatherCard from "./WeatherCard";
import { WeatherData } from "@/services/weatherService";
import { useState } from "react";

interface WeatherListProps {
  weather: WeatherData[];
  onSelectionChange: (selectedItems: WeatherData[]) => void;
}

export default function WeatherList({
  weather,
  onSelectionChange,
}: WeatherListProps) {
  const [selectedIndices, setSelectedIndices] = useState<Set<number>>(
    new Set()
  );

  const toggleSelect = (index: number) => {
    const newSelected = new Set(selectedIndices);
    if (newSelected.has(index)) {
      newSelected.delete(index);
    } else {
      newSelected.add(index);
    }
    setSelectedIndices(newSelected);

    const selectedItems = [...newSelected].map((i) => weather[i]);
    onSelectionChange(selectedItems);
  };

  return (
    <div className="weather-list scrollable-weather-list">
      {weather.map((data, index) => (
        <WeatherCard
          key={data.city || index}
          data={data}
          checked={selectedIndices.has(index)}
          onToggle={() => toggleSelect(index)}
        />
      ))}
    </div>
  );
}
