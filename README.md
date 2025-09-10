# Weatherly - Weather Application with Next.js

## Description

Weatherly is a web application that allows users to search and view the current weather of one or more cities using the OpenWeatherMap API.  
The app is built with Next.js and TypeScript and includes unit tests using Jest and React Testing Library.  
It features a scrollable weather list, reusable components, and an organized architecture with services and utilities.

---

## Features

- Search weather by city name with instant search on input change.
- Displays:
  - City name and country code
  - Temperature (°C)
  - Humidity
  - Weather condition description
- Shows multiple results if available (e.g., similar city names).
- Clear button to reset input and weather results.
- Handles errors for invalid cities or connection issues.
- Clean user interface with basic validation.
- Scrollable weather list with custom scrollbar styling.

---

## Technologies

- Next.js (React Framework)
- TypeScript
- OpenWeatherMap API (Weather data provider)
- Jest & React Testing Library (Unit testing)
- Tailwind CSS + Custom CSS for styling

---

## Installation & Setup

1. Clone the repository:
   git clone https://github.com/your-username/weatherly.git
   cd weatherly

2. Install dependencies:
   npm install

3. Create a `.env.local` file in the root directory:
   NEXT_PUBLIC_API_KEY=your_openweathermap_NEXT_PUBLIC_API_KEY_here

4. Start the development server:
   npm run dev

5. Visit the app:
   Open your browser and go to: http://localhost:3000

---

## Usage

- Type the name of a city in the search bar.
- Search triggers automatically as you type (no need to press enter).
- View weather data of matching cities in a scrollable list.
- Click "X" to clear the input and also clear the weather results.
- If no cities are found or there's a problem, an error message will appear.

---

## Running Tests

- Run all unit tests:
  npm test

- Run tests with coverage report:
  npm run coverage

  ✅ The app is configured to maintain minimum 80% test coverage.  
  ✅ `WeatherForm` currently has 100% test coverage.

---

## Project Structure

/src  
 ├─ /components  
 │ ├─ WeatherForm.tsx  
 │ ├─ WeatherCard.tsx  
 │ └─ WeatherList.tsx  
 ├─ /reducers  
 │ └─ weatherReducer.ts  
 ├─ /services  
 │ └─ weatherService.ts  
 ├─ /utilities  
 │ ├─ searchingUtilities.ts  
 │ └─ formUtilities.ts  
 └─ /tests  
 └─ weatherForm.test.tsx

---

## Useful Links

- OpenWeatherMap: https://openweathermap.org/api
- Next.js Docs: https://nextjs.org/
- React Testing Library: https://testing-library.com/docs/react-testing-library/intro/
- Jest: https://jestjs.io/

---

Enjoy your weather search experience with **Weatherly** ☀️🌧️❄️🌪️
