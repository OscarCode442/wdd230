
async function getWeather() {
    const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=Lagos&units=metric&appid=9759bf8ad638b8f6a851effbef8116f6'; // Replace with the actual weather API URL
    const weatherFetch = await fetch(weatherURL);
    const weatherJson = await weatherFetch.json();
    console.log(weatherJson);
    
    const windSpeedjson = weatherJson.wind.speed;
    const temperatureC = weatherJson.main.temp;
    const weatherLocation = weatherJson.name;
    const weatherType = weatherJson.weather[0].main;
  
    document.getElementById('temp-value').textContent = Math.round(temperatureC);
    document.getElementById('windspeed-value').textContent = windSpeedjson;
    document.getElementById('weather-desc').textContent = weatherType;
    document.getElementById('weather-icon').setAttribute("src", `https://openweathermap.org/img/w/${weatherJson.weather[0].icon}.png`);
  }
  
  function calcChill() {
    const mph = Number(document.getElementById('windspeed-value').textContent) / 1.609;
    const fahrenheit = (Number(document.getElementById('temp-value').textContent) * (9 / 5)) + 32;
  
    if ((mph > 3) && (fahrenheit <= 50)) {
      const value = 35.74 + (0.6215 * fahrenheit) - (35.75 * (mph ** 0.16)) + (0.4275 * fahrenheit * (mph ** 0.16));
      document.getElementById('windchill-value').textContent = `${Math.round(value)}°F`;
    } else {
      document.getElementById('windchill-value').textContent = "N/A";
    }
  }
  
  getWeather();
  calcChill();
  