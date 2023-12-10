async function getWeather() {
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your API key
    const city = document.getElementById('city-input').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      if (data.cod === 200) {
        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = `
          <h3>${data.name}, ${data.sys.country}</h3>
          <p>${data.weather[0].description}</p>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Humidity: ${data.main.humidity}%</p>
        `;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      const weatherInfo = document.getElementById('weather-info');
      weatherInfo.innerHTML = `<p>${error.message}</p>`;
    }
  }
  