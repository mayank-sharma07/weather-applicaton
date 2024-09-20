// script.js

document.addEventListener('DOMContentLoaded', (event) => {
    const searchButton = document.querySelector('.search-bar button');
    const searchInput = document.querySelector('.search-bar input');
  
    searchButton.addEventListener('click', () => {
      const place = searchInput.value;
      getWeatherData(place);
    });
  
    async function getWeatherData(place) {
      const apiKey = 'daa3e0488174e623d6a3e3be9efdad0c';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=${apiKey}`;
  
      try {
        const response = await fetch(url);
        const data = await response.json();
        updateWeather(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
  
    function updateWeather(data) {
      if (data.cod !== 200) {
        alert('Place not found');
        return;
      }
  
      const temperature = document.querySelector('.temperture');
      const area = document.querySelector('.area');
      const humidity = document.querySelector('.humidity');
      const wind = document.querySelector('.wind');
  
      temperature.textContent = `${data.main.temp}℃`;
      area.textContent = data.name;
      humidity.textContent = `${data.main.humidity}%`;
      wind.textContent = `${data.wind.speed} km/h`;
    }
  });
  
