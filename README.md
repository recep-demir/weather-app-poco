<img width="734" height="647" alt="image" src="https://github.com/user-attachments/assets/54a43b3e-0baf-49ef-af8f-069a2ccc8526" />

# Weather App (Simple OpenWeatherMap Demo)

A minimal client-side weather app that fetches current weather for a searched location using the OpenWeatherMap API. Type a city name, press Enter or click Search, and see the temperature, description, and a background that switches between warm and cold images.

## Files
- [index.html](index.html) — main HTML file with the UI and SweetAlert2 CDN.
- [style.css](style.css) — styles and background rules using `img/cold-bg.jpg` and `img/warm-bg.jpg`.
- [app.js](app.js) — main JavaScript logic (functions: [`getWeather`](app.js), [`getLocation`](app.js), [`buildDate`](app.js); DOM variables: [`searchBox`](app.js), [`searchButton`](app.js), [`mainBg`](app.js), [`temp`](app.js)).
- img/cold-bg.jpg — cold background image ([img/cold-bg.jpg](img/cold-bg.jpg))
- img/warm-bg.jpg — warm background image ([img/warm-bg.jpg](img/warm-bg.jpg))

## Features
- Search by city name (press Enter or click Search).
- Displays city, country, current date, temperature (°C) and weather description.
- Background switches to warm image when temperature >= 16°C.
- User-friendly alerts via SweetAlert2 (included in [index.html](index.html)).

## Quick start
1. Open [index.html](index.html) in a browser (no build step required).
2. Enter a city in the search field (uses [`searchBox`](app.js)) and press Enter or click the Search button (wired to [`searchButton`](app.js)).
3. App fetches data via [`getWeather`](app.js) and updates UI via [`getLocation`](app.js).

## Configuration
- The app uses an API key defined in [`app.js`](app.js) (`api.key`). Replace the value with your OpenWeatherMap key if needed.
- Network access is required (OpenWeatherMap API). No server required — this is a static client app.

## Troubleshooting
- If nothing appears, open the browser console to inspect logs (the app logs API responses).
- For fetch errors, the app shows a SweetAlert2 modal with the error message.
