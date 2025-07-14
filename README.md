# Weatherly - Aplicación de Clima con Next.js

Weatherly es una aplicación web sencilla que permite consultar el clima actual de cualquier ciudad usando la API pública de WeatherAPI.com.  
Fue desarrollada con Next.js y TypeScript, e incluye pruebas unitarias con Jest y React Testing Library.

---

## Funcionalidades

- Búsqueda de clima por nombre de ciudad.
- Muestra temperatura actual, humedad y descripción del clima.
- Manejo de errores para ciudades no válidas o problemas de red.
- Interfaz limpia y simple, con validación básica del input.

---

## Tecnologías

- Next.js (React framework)
- TypeScript
- WeatherAPI.com (API pública de clima)
- Jest + React Testing Library (para pruebas unitarias)
- Tailwind CSS (estilos)

---

## Instalación y ejecución

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/weatherly.git
   cd weatherly
   Instala dependencias:
   ```

bash
Copy
Edit
npm install
Crea un archivo .env.local en la raíz con tu API key de WeatherAPI:

ini
Copy
Edit
NEXT_PUBLIC_WEATHERAPI_KEY=tu_api_key_aqui
Ejecuta la aplicación en modo desarrollo:

bash
Copy
Edit
npm run dev
Abre tu navegador en http://localhost:3000

Uso
Ingresa el nombre de una ciudad en el campo de búsqueda.

Presiona el ícono de búsqueda o Enter.

Consulta la temperatura, humedad y descripción del clima.

Si la ciudad no existe o hay un error, verás un mensaje de error.

Pruebas Unitarias
Para ejecutar las pruebas unitarias y ver el coverage:

bash
Copy
Edit
npm test
npm run coverage
El proyecto está configurado para tener un coverage mínimo del 80%. Actualmente, el componente principal WeatherForm tiene cobertura completa.

Estructura
/src/lib/weatherApi.ts — Función para llamar a la API de clima.

/src/components/WeatherForm.tsx — Formulario de búsqueda con validaciones.

/src/components/WeatherCard.tsx — Tarjeta para mostrar resultados del clima.

/src/reducers/weatherReducer.ts — Reducer para manejar estados (cargando, error, éxito).

/src/tests — Pruebas unitarias con Jest y React Testing Library.

Enlaces útiles

- https://www.weatherapi.com/

- https://nextjs.org/

- https://testing-library.com/docs/react-testing-library/intro/

- https://jestjs.io/
# Weatherly
