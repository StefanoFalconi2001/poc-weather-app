# Weatherly - Weather Application with Next.js

Weatherly is a simple web application that allows you to check the current weather of any city using the public WeatherAPI.com API.  
It is built with Next.js and TypeScript, and includes unit tests with Jest and React Testing Library.

---

## Features

- Search weather by city name.
- Displays current temperature, humidity, and weather description.
- Error handling for invalid cities or network issues.
- Clean and simple interface with basic input validation.

---

## Technologies

- Next.js (React framework)
- TypeScript
- WeatherAPI.com (public weather API)
- Jest + React Testing Library (for unit testing)
- Tailwind CSS (styling)

---

## Installation and Running

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/weatherly.git
   cd weatherly
   Install dependencies:
   ```

bash
Copy
Edit
npm install
Create a .env.local file at the root with your WeatherAPI key:

ini
Copy
Edit
NEXT_PUBLIC_WEATHERAPI_KEY=your_api_key_here
Run the development server:

bash
Copy
Edit
npm run dev
Open your browser at http://localhost:3000

Usage
Enter the name of a city in the search field.

Press the search icon or hit Enter.

View the temperature, humidity, and weather description.

If the city doesn't exist or an error occurs, an error message will be shown.

Unit Tests
To run unit tests and check coverage:

bash
Copy
Edit
npm test
npm run coverage
The project is configured to have at least 80% coverage. Currently, the main component WeatherForm has full coverage.

Project Structure
/src/lib/weatherApi.ts — Function to call the weather API.

/src/components/WeatherForm.tsx — Search form with validations.

/src/components/WeatherCard.tsx — Card to display weather results.

/src/reducers/weatherReducer.ts — Reducer to manage states (loading, error, success).

/src/tests — Unit tests with Jest and React Testing Library.

Useful Links
WeatherAPI.com

Next.js

React Testing Library

Jest
