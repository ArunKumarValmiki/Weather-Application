# 🌤️ Weather App

A modern weather web application that allows users to get real-time weather data by entering any city name. It fetches live data using the OpenWeatherMap API and displays current temperature, weather condition, and humidity with an intuitive and responsive UI.

---

## 🔗 Live Demo

- **Frontend (GitHub Pages):**  
  👉 [https://arunkumarvalmiki.github.io/Weather-Application/](https://arunkumarvalmiki.github.io/Weather-Application/)

- **Backend (Render):**  
  👉 [https://weather-backend-mf26.onrender.com](https://weather-backend-mf26.onrender.com)

---

## 💻 Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript (Vanilla)
- GitHub Pages for deployment

### Backend
- Node.js
- Express.js
- Axios (for HTTP requests)
- dotenv (for managing API keys)
- CORS (to allow frontend-backend communication)
- Hosted on [Render](https://render.com)

---

## 📦 Features

- 🔍 Search for any city to get current weather
- 🌡️ Temperature toggle between Celsius and Fahrenheit
- ⛅ Real-time weather data with emoji-based condition display
- 💧 Humidity information
- 🔁 Loading spinner while fetching data
- ❌ Error handling for invalid inputs or API issues
- 📱 Fully responsive design

---

## 🛠️ Setup & Installation

### Backend (`/weather-backend` folder)

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ArunKumarValmiki/Weather-Application.git
   cd Weather-Application/weather-backend
2. **Install dependencies(Make sure you are in the weather-backend folder)**:
   ```bash
   npm init -y
   npm install express axios dotenv cors
3. **Create Files**:
   ```bash
   touch index.js .env .gitignore
4. **Add this code in .gitignore**:
   ```bash
   node_modules
   .env
5. **Replace YOUR_API_KEY_HERE with your API Key from openweathermap website in .env file**
   ```bash
   API_KEY=YOUR_API_KEY_HERE
6. **Now start the server(weather-backend/index.js)**
   ```bash
   node index.js
7. **Open index.html in web browser and enter the city name to get the current live weather**   
