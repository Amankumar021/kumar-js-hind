document.addEventListener('DOMContentLoaded', ()=>{
    const CityInput = document.getElementById("city-input");
    const GetWeatherBtn = document.getElementById("get-weather-btn");
    const weatherinfo = document.getElementById("weather-info");
    const cityNameDisplay = document.getElementById("city-name");
    const temperatureDisplay = document.getElementById("temperature");
    const descriptionDisplay = document.getElementById("description");
    const errorMessage = document.getElementById("error-message");

    const API_KEY = "1cf10fc40782a4319ffb0bc4d2b0d8c4";  //env value

    GetWeatherBtn.addEventListener('click' , async()=>{
        const city = CityInput.value.trim();
        if(!city) return;

        // it may throw some error 
        // server/database is always in another continent 
        try{
            const weatherData = await fetchWeatherData(city);
            displayWeatherData(weatherData);
        }catch (error){
            showError()
        }
    })

    async function fetchWeatherData(city){
        const url = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude=${city}&appid=${API_KEY}`;

        const response = fetch(url);
        console.log(typeof response);
        console.log("RESPONSE", response);
        
        if(!response.ok){
            throw  new Error ("City Not Found");
        }
        const data = (await response).json()
    }     
    

    function displayWeatherData(data){
        console.log(data);
        const {name, main, weather} = data;
        cityNameDisplay.textContent = name;

        // unlock display

        weatherinfo.classList.remove("hidden");
        errorMessage.classList.add("hidden");
        temperatureDisplay.textContent =`Temperature : ${main.temp}`;
        descriptionDisplay.textContent =`weather : ${weather[0].description}`;
    }

    function showError(weatherData){
        weatherinfo.classList.remove('hidden');
        errorMessage.classList.add('hidden');
    }
})