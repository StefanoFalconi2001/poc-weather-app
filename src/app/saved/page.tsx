"use client";

import { useEffect, useState } from "react";

type WeatherData = {
  _id: string;
  city: string;
  temperature: number;
  description: string;
  createdAt: string;
};

export default function SavedPage() {
  const [savedWeather, setSavedWeather] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const urlApi = process.env.NEXT_PUBLIC_API_URL!;

  useEffect(() => {
    const fetchSavedWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(urlApi);
        if (!res.ok) throw new Error("Failed to fetch saved weather data");
        const data = await res.json();
        setSavedWeather(data);
      } catch (err) {
        console.error("Error al obtener datos guardados", err);
        setError("Error loading saved data. Try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchSavedWeather();
  }, [urlApi]);

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`${urlApi}/${id}`, { method: "DELETE" });
      if (res.ok) {
        setSavedWeather((prev) => prev.filter((item) => item._id !== id));
      } else {
        alert("Error deleting the result.");
      }
    } catch (err) {
      console.error("Error deleting", err);
      alert("Error deleting the result.");
    }
  };

  const filteredWeather = savedWeather.filter((item) =>
    item.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const goHome = () => {
    window.location.href = "/";
  };

  return (
    <main className="saved-page-container">
      <input
        type="text"
        placeholder="Search by city ..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <button className="back-button" onClick={goHome}>
        ← Home
      </button>

      <h1 className="saved-title">Saved results</h1>

      {loading && <p className="loading-message">Loading saved data...</p>}
      {error && <p className="error-message">{error}</p>}

      {!loading && !error && savedWeather.length === 0 && (
        <p className="loading-message">No saved results found.</p>
      )}

      <section className="saved-list">
        {filteredWeather.map((item) => (
          <article key={item._id} className="saved-card">
            <div className="saved-details">
              <h2>{item.city}</h2>
              <p>Temperature: {item.temperature}°C</p>
              <p>Weather: {item.description}</p>
              <p className="saved-timestamp">
                Saved on: {new Date(item.createdAt).toLocaleString()}
              </p>
            </div>

            <button
              className="delete-button"
              onClick={() => handleDelete(item._id)}
            >
              Delete
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}
