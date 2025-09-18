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
  const urlApi = process.env.NEXT_PUBLIC_API_URL!;

  useEffect(() => {
    const fetchSavedWeather = async () => {
      setLoading(true);
      try {
        const res = await fetch(urlApi);
        const data = await res.json();
        console.log(data);
        setSavedWeather(data);
      } catch (err) {
        console.error("Error al obtener datos guardados", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSavedWeather();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`${urlApi}/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setSavedWeather((prev) => prev.filter((item) => item._id !== id));
      } else {
        alert("Error deleting the results.");
      }
    } catch (err) {
      console.error("Error deleting", err);
    }
  };

  const goHome = () => {
    window.location.href = "/"; // Redirige a la página principal
  };

  if (loading) return <p>Loading saved data...</p>;

  return (
    <main className="saved-page-container">
      {/* Botón de retorno */}
      <button className="back-button" onClick={goHome}>
        ← Home
      </button>

      <h1 className="saved-title">Saved results</h1>

      <section className="saved-list">
        {savedWeather.map((item) => (
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
              onClick={() => handleDelete(item._id)}
              className="delete-button"
            >
              Delete
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}
