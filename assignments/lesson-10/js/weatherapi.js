

let weatherRequest = new XMLHttpRequest();

var apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=be4b279b62e97c1113c247c06009cdee&units=imperial';

weatherRequest.open('GET', apiURLstring, true);

weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);

    console.log(weatherData);

    var main = weatherData['main'];

    document.getElementById('current-temp').innerHTML = main.temp;
}