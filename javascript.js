const apiKey = "081e7221eb8301e884475d9740804fab";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let city = document.querySelector('input');
let searchbtn = document.querySelector('.search i');
let weatherIcon = document.querySelector('img');
let weatherblock = document.querySelector('.weather');

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block';
    }
    else {
        document.querySelector('.error').style.display = 'none';
        const data = await response.json();
        console.log(data);

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "weather-app-img/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "weather-app-img/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "weather-app-img/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "weather-app-img/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "weather-app-img/mist.png";
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "weather-app-img/snow.png";
        }

    }


}
searchbtn.addEventListener('click', () => {
    checkWeather(city.value);
}
);

city.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        checkWeather(city.value);
    }
})