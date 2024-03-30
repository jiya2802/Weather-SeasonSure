const btn=document.querySelector(".btn");
updateWeather();
async function updateWeather(city='Vrindavan'){
    document.querySelector("#cityName").innerHTML=city;
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e877821a3cmsha600caaec95910cp14c545jsn270ba824db6c',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        updateWeatherInfo(result);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

function updateWeatherInfo(result){
    document.querySelector('#temperature').innerHTML=`${result.temp}`;
    document.querySelector('#temperature2').innerHTML=`${result.temp}`;
    document.querySelector('#min_temp').innerHTML=`${result.min_temp}`;
    document.querySelector('#max_temp').innerHTML=`${result.max_temp}`;
    document.querySelector('#humidity').innerHTML=`${result.humidity}`;
    document.querySelector('#humidity2').innerHTML=`${result.humidity}`;
    document.querySelector('#wind_degrees').innerHTML=`${result.wind_degrees}`;
    document.querySelector('#feels_like').innerHTML=`${result.feels_like} `;
    document.querySelector('#cloud_pct').innerHTML=`${result.cloud_pct}`;
    document.querySelector('#wind_speed').innerHTML=`${result.wind_speed}`;
    document.querySelector('#wind_speed2').innerHTML=`${result.wind_speed}`;
    document.querySelector('#sunrise').innerHTML=`${result.sunrise}`;
    document.querySelector('#sunset').innerHTML=`${result.sunset}`;
}

btn.addEventListener('click',(event)=>{
    event.preventDefault();
    const cityInput=document.querySelector(".inputCity").value;
    updateWeather(cityInput);
})