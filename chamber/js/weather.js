const apiURL = 'https://api.openweathermap.org/data/2.5/weather?zip=84062&units=imperial&appid=a5e6c79aaea5635ba7a137e07e7e5f4c';
const imgURL = 'http://openweathermap.org/img/wn/';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);//
     document.querySelector('#temp').textContent = jsObject.main.temp.toFixed(0);
  document.querySelector('#weathericon').src = imgURL+jsObject.weather[0].icon+".png";
  document.querySelector('#condition').textContent = jsObject.weather[0].description;


    const windchill =jsObject.wind.deg;
    document.querySelector("#windchill").innerHTML = Math.round(windchill)+'&#176;';

    const speed =jsObject.wind.speed;
    document.querySelector("#speed").innerHTML = speed;
    

  const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
});
