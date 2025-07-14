import { render, screen, fireEvent } from "@testing-library/react";
import WeatherForm from "@/components/WeatherForm";

describe("WeatherForm", () => {
  test("Render inputs and buttons correctly", () => {
    const mockSearch = jest.fn();
    render(<WeatherForm onSearch={mockSearch} />);

    const input = screen.getByPlaceholderText(/enter city/i);
    expect(input).toBeInTheDocument();
  });

  test("Search when the form is submitted", () => {
    const mockSearch = jest.fn();
    render(<WeatherForm onSearch={mockSearch} />);

    const input = screen.getByPlaceholderText(/enter city/i);
    fireEvent.change(input, { target: { value: "Quito" } });

    const form = screen.getByTestId("weather-form");
    fireEvent.submit(form);

    expect(mockSearch).toHaveBeenCalledWith("Quito");
  });

  test("Does not search when input is empty or whitespace", () => {
    const mockSearch = jest.fn();
    render(<WeatherForm onSearch={mockSearch} />);

    const form = screen.getByTestId("weather-form");

    // Submit with empty input
    fireEvent.submit(form);
    expect(mockSearch).not.toHaveBeenCalled();

    // Submit with spaces only
    const input = screen.getByPlaceholderText(/enter city/i);
    fireEvent.change(input, { target: { value: "   " } });
    fireEvent.submit(form);
    expect(mockSearch).not.toHaveBeenCalled();
  });

  test("Clear button appears and works correctly", () => {
    const mockSearch = jest.fn();
    render(<WeatherForm onSearch={mockSearch} />);

    const input = screen.getByPlaceholderText(/enter city/i);

    // Type a city (button should appear)
    fireEvent.change(input, { target: { value: "Quito" } });
    expect(
      screen.getByRole("button", { name: /clear input/i })
    ).toBeInTheDocument();

    // Click clear button clears input and focuses input
    fireEvent.click(screen.getByRole("button", { name: /clear input/i }));
    expect(input).toHaveValue("");
    expect(document.activeElement).toBe(input);
  });

  test("Search button appears only when input is changed and different from last searched city", () => {
    const mockSearch = jest.fn();
    render(<WeatherForm onSearch={mockSearch} />);

    const input = screen.getByPlaceholderText(/enter city/i);

    // Initially no buttons visible
    expect(screen.queryByRole("button", { name: /search/i })).toBeNull();
    expect(screen.queryByRole("button", { name: /clear input/i })).toBeNull();

    // Type city, buttons appear
    fireEvent.change(input, { target: { value: "Quito" } });
    expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /clear input/i })
    ).toBeInTheDocument();

    // Submit form to set lastSearchedCity
    const form = screen.getByTestId("weather-form");
    fireEvent.submit(form);

    // Now buttons disappear (input equals last searched city)
    expect(screen.queryByRole("button", { name: /search/i })).toBeNull();
    expect(screen.queryByRole("button", { name: /clear input/i })).toBeNull();
  });
});
