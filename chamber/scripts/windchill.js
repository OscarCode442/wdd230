
  
async function getWeather() {
  const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=Lagos&units=metric&appid=9759bf8ad638b8f6a851effbef8116f6'; // Replace with the actual weather API URL
  const weatherFetch = await fetch(weatherURL);
  const weatherJson = await weatherFetch.json();
  console.log(weatherJson);
  
  const windSpeedjson = weatherJson.wind.speed;
  const temperatureC = weatherJson.main.temp;
  const weatherLocation = weatherJson.name;
  const weatherType = weatherJson.weather[0].main;

  // Use querySelector and innerText instead of getElementById and textContent
  document.querySelector('#temp-value').innerText = Math.round(temperatureC);
  document.querySelector('#windspeed-value').innerText = windSpeedjson;
  document.querySelector('#weather-desc').innerText = weatherType;
  // Use the src property instead of setAttribute
  document.querySelector('#weather-icon').src = `https://openweathermap.org/img/w/${weatherJson.weather[0].icon}.png`;
}

// Use a function expression or an arrow function to calculate the wind chill factor
const calcChill = () => {
  // Use the unary plus operator to convert strings to numbers
  const mph = +document.querySelector('#windspeed-value').innerText / 1.609;
  const fahrenheit = (+document.querySelector('#temp-value').innerText * (9 / 5)) + 32;

  if ((mph > 3) && (fahrenheit <= 50)) {
    // Use template literals to format the value
    const value = `${Math.round(35.74 + (0.6215 * fahrenheit) - (35.75 * (mph ** 0.16)) + (0.4275 * fahrenheit * (mph ** 0.16)))}°F`;
    document.querySelector('#windchill-value').innerText = value;
  } else {
    document.querySelector('#windchill-value').innerText = "N/A";
  }
}

getWeather();
calcChill();
