const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const spinner = document.getElementById("spinner");
const unitToggle = document.getElementById("unitToggle");


const backendUrl = "https://weather-backend-mf26.onrender.com/";

weatherForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const city = cityInput.value.trim();
    const useCelsius = unitToggle.checked;

    clearCard();

    if (city) {
        showSpinner(true);
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData, useCelsius);
        } catch (error) {
            displayError(error.message);
        } finally {
            showSpinner(false);
        }
    } else {
        displayError("Please enter a city");
    }
});

async function getWeatherData(city) {
    const response = await fetch(`${backendUrl}/weather?city=${encodeURIComponent(city)}`);

    if (!response.ok) {
        throw new Error("Could not fetch weather data");
    }

    return await response.json();
}

function displayWeatherInfo(data, useCelsius) {
    const { name: city, main: { temp, humidity }, weather: [{ description, id }] } = data;

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    const tempC = (temp - 273.15).toFixed(1);
    const tempF = ((temp - 273.15) * 9 / 5 + 32).toFixed(1);
    const tempFinal = useCelsius ? `${tempC}°C` : `${tempF}°F`;

    cityDisplay.textContent = city;
    tempDisplay.textContent = tempFinal;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    card.append(cityDisplay, tempDisplay, humidityDisplay, descDisplay, weatherEmoji);
    card.style.display = "flex";
}

function getWeatherEmoji(weatherId) {
    switch (true) {
        case (weatherId >= 200 && weatherId < 300): return "⛈";
        case (weatherId >= 300 && weatherId < 400): return "🌦";
        case (weatherId >= 500 && weatherId < 600): return "🌧";
        case (weatherId >= 600 && weatherId < 700): return "❄";
        case (weatherId >= 700 && weatherId < 800): return "🌫";
        case (weatherId === 800): return "☀";
        case (weatherId >= 801 && weatherId < 810): return "☁";
        default: return "❓";
    }
}

function displayError(message) {
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.appendChild(errorDisplay);
    card.style.display = "flex";
}

function clearCard() {
    card.textContent = "";
    card.style.display = "none";
}

function showSpinner(show) {
    spinner.style.display = show ? "block" : "none";
}