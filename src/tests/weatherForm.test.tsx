import { fetchWeatherList } from "@/services/weatherService";

// Mocks global fetch
global.fetch = jest.fn();

describe("fetchWeatherList test suite", () => {
  const mockApiResponse = {
    list: [
      {
        name: "Quito",
        sys: { country: "EC" },
        main: { temp: 22, humidity: 60 },
        weather: [{ description: "clear sky" }],
      },
    ],
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Fetches and formats weather data correctly", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockApiResponse,
    });

    const result = await fetchWeatherList("Quito");
    expect(result).toEqual([
      {
        city: "Quito",
        country: "EC",
        temperature: 22,
        humidity: 60,
        description: "clear sky",
      },
    ]);
  });

  test("Throws error on failed request", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({ ok: false });

    await expect(fetchWeatherList("Quito")).rejects.toThrow(
      "Failed to fetch weather data."
    );
  });

  test("Filters out invalid items", async () => {
    const badApiResponse = {
      list: [
        { name: "", main: {}, weather: [] }, // invalid
        ...mockApiResponse.list,
      ],
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => badApiResponse,
    });

    const result = await fetchWeatherList("Quito");
    expect(result.length).toBe(1);
    expect(result[0].city).toBe("Quito");
  });
});
