const timeE1 = document.getElementById("time");
const dateE1 = document.getElementById("date");
const currentWeatherItemsEl = document.getElementById("current-weather-items");
const timezone = document.getElementById("time-zone");
const countryEl = document.getElementById("country");
const weatherForecastEl = document.getElementById("weather-forecast");
const currentTempEl = document.getElementById("current-temp");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const API_Key = "01151e6e9f5d5654cbc0915fcb06076e";

setInterval(() => {
  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  const hour = time.getHours();
  const hoursIn12HRFormat = hour >= 13 ? hour % 12 : hour;
  const minutes = time.getMinutes();
  const ampm = hour >= 12 ? "PM" : "AM";

  timeE1.innerHTML =
    hoursIn12HRFormat + ":" + minutes + " " + `<span id="am-pm">${ampm}</span>`;

  dateE1.innerHTML = days[day] + ", " + date + " " + months[month];
}, 1000);

getWeatherData();
function getWeatherData() {
  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=40.3755&lon=-111.7457&exclude=hourly,minutely&units=imperial&appid=${API_Key}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      showWheatherData(data);
    })
}

document.querySelector('#condition').innerHTML = jsObject.weather[0].description;
    

function showWheatherData(data) {
  let {humidity, temp, description} = data.current;

  currentWeatherItemsEl.innerHTML = 
  `<div class="weather-item">
  <div>Humidity</div>
  <div>${humidity}</div>
</div>
<div class="weather-item">
  <div>Temp</div>
  <div>${temp}</div>
</div>
<div class="weather-item">
<figure><figcaption id="condition"></figcaption></figure>
<span id="icon-src"></span>
</div>`;

let otherDayForecast = ''
data.daily.forEach((day, idx) => {
  if(idx == 0){

  }else{
      otherDayForecast += `
      <div class="weather-forecast-item">
      <div class="day">${dt}</div>
      <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon">
      <div class="temp">Night - 25.6&#176; C</div>
      <div class="temp">Day - 35.6&#176; C</div>
  </div>
      `
  }
})

}


/* getWeatherData()
function getWeatherData() {
  navigator.geolocation.getCurrentPosition((success) => {
    console.log(success);

      let {latitude, longitude} = success.coords;

      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=${API_Key}`)
      .then(res => res.json()).then(data => {

        console.log(data) 
      })
  })
} */
