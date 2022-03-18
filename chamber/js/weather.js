const apiURL = 'https://api.openweathermap.org/data/2.5/weather?zip=84062&units=imperial&appid=a5e6c79aaea5635ba7a137e07e7e5f4c';
const imgURL = 'http://openweathermap.org/img/wn/';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    const temp = jsObject.main.temp.toFixed(0);
    const speed =jsObject.wind.speed;

    document.querySelector('#temp').textContent = temp;
    document.querySelector('#weathericon').src = imgURL+jsObject.weather[0].icon+".png";
    document.querySelector('#condition').textContent = jsObject.weather[0].description;
    document.querySelector("#speed").innerHTML = speed;

    let t = parseFloat(temp);
    let s = parseFloat(speed);
    let windchill = "";  
  
    // Wind chill conditions are less than or equal to 50 degrees with the wind being more than 3 MPH
    if(t <= 50 && s > 3) {
        const windchill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s,0.16) + 0.4275 * t * Math.pow(s,0.16)
        document.querySelector("#windchill").innerHTML = `${Math.round(windchill)}&#176;F`;
    }
    else {
        document.querySelector("#windchill").innerHTML = "N/A";
    }

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
});
