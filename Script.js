// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '11a20f7488msh275c3a3293f8b4dp10613ejsnd6a4c7bd1e7a',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getwhather = (city) => {

    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
    .then(response => response.json())
    .then((response) => {

            console.log(response)
            // cloud_pct.innerHTML = response.cloud_pct
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.max_temp
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            wind_degrees.innerHTML = response.wind_degrees
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e)=> {
    e.preventDefault()
    getwhather(city.value)
})

getwhather("Abu Road")


