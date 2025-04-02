async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "79cf2c243860135996c2e35dcfba66ca"; // Replace with your OpenWeatherMap API Key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            document.getElementById("weather-result").innerHTML = "City not found! ❌";
        } else {
            document.getElementById("weather-result").innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p> Temperature: ${data.main.temp}°C</p>
                <p> Weather: ${data.weather[0].description}</p>
                <p> Humidity: ${data.main.humidity}%</p>
                <p> Wind Speed: ${data.wind.speed} m/s</p>
            `;
        }
    } catch (error) {
        document.getElementById("weather-result").innerHTML = "Error fetching weather data!";
    }
}
