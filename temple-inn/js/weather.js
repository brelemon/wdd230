const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=40.3755&lon=-111.7457&exclude=hourly,minutely&units=imperial&appid=01151e6e9f5d5654cbc0915fcb06076e`
const imgURL = 'http://openweathermap.org/img/wn/';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    const temp = jsObject.current.temp.toFixed(0);
    const humidity =jsObject.current.humidity;

    document.querySelector('#temp').textContent = temp;
    document.querySelector('#weathericon').src = imgURL+jsObject.current.weather[0].icon+".png";
    document.querySelector('#condition').textContent = jsObject.current.weather[0].description;
    document.querySelector("#humidity").innerHTML = humidity;
    
    const today = new Date()

    for (let i = 0; i < 3; i++) {
        const dayForecast = jsObject.daily[i];
        const idNumber = i + 2;
        const dayTemp = dayForecast.temp.day;

        const dayDate = new Date(today.getTime());
        dayDate.setUTCHours(24 * (i+1), 0 ,0);
        

    document.querySelector('#temp' + idNumber).textContent = dayTemp.toFixed(0);
    document.querySelector('#weathericon' + idNumber).src = imgURL+dayForecast.weather[0].icon+".png";
    document.querySelector('#day' + idNumber).textContent =  dayDate.toLocaleDateString('en-us', { weekday: 'long'})
        
    }

});
