const apiURL = 'https://api.openweathermap.org/data/2.5/weather?zip=84062&units=imperial&appid=a5e6c79aaea5635ba7a137e07e7e5f4c';


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    currentTemp.textContent = jsObject.main.temp.toFixed
(0);
let imgsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
let imgalt = jsObject.weather[0].description;
let capimgalt = '';
for (let i = 0; i < imgalt.length; i++) {
  if (charAt(i) === 0){
    capimgalt += imgalt.charAt(i).toUpperCase();
  } else {

  }
}
  });

const currentTemp = document.querySelector('#current-temp');
const weathericon = document.querySelector('#icon-src');





const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
const desc = jsObject.weather[0].description;
document.querySelector('#icon-src').textContent = iconsrc;
document.querySelector('#weathericon').setAttribute('src', iconsrc);
document.querySelector('#weathericon').setAttribute('alt', desc);
document.querySelector('figcaption').textContent = desc;