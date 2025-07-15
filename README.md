# Weatherly - Weather Application with Next.js

## Description:

Weatherly is a simple web application that allows users to search and view the current weather of any city using the public WeatherAPI.com service.  
The app is built with Next.js and TypeScript and includes unit tests using Jest and React Testing Library.

## Features:

- Search weather by city name.
- Displays:
  - Current temperature
  - Humidity
  - Weather description (e.g., "Sunny", "Cloudy")
- Handles errors for invalid cities or connection issues.
- Clean user interface with basic validation.

## Technologies:

- Next.js (React Framework)
- TypeScript
- Tailwind CSS (Styling)
- WeatherAPI.com (API Provider)
- Jest & React Testing Library (Testing)

## Installation & Setup:

1. Clone the repository:
   git clone https://github.com/your-username/weatherly.git
   cd weatherly

2. Install dependencies:
   npm install

3. Create a `.env.local` file at the root with your API key:
   NEXT_PUBLIC_WEATHERAPI_KEY=your_api_key_here

4. Start the development server:
   npm run dev

5. Visit http://localhost:3000 in your browser.

## Usage:

- Enter the name of a city in the input field.
- Click the search icon or press Enter.
- Weather data (temperature, humidity, description) will be displayed.
- If the city is invalid or there's a network error, an error message appears.

## Running Tests:

- Run all tests:
  npm test

- View test coverage:
  npm run coverage

  (Minimum 80% coverage is required; WeatherForm currently has 100%)

## Project Structure:

- /src/lib/weatherApi.ts - Weather API fetching logic.
- /src/components/WeatherForm.tsx - Input form with search and validation.
- /src/components/WeatherCard.tsx - Displays weather results.
- /src/reducers/weatherReducer.ts - Manages loading, success, and error states.
- /src/tests - Unit test files.

## Useful Links:

- https://www.weatherapi.com/
- https://nextjs.org/
- https://testing-library.com/docs/react-testing-library/intro/
- https://jestjs.io/
