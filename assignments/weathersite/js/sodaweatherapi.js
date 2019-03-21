let weatherRequest = new XMLHttpRequest();

var apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5678757&APPID=be4b279b62e97c1113c247c06009cdee&units=imperial';

weatherRequest.open('GET', apiURLstring, true);

weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);

    var feature = weatherData['main'];
    var weather = weatherData['weather'];
    var wind = weatherData['wind'];

    document.getElementById('tempOutput').innerHTML = feature.temp + "&deg; F";
    document.getElementById('currentOutput').innerHTML = weather[0].main;
    document.getElementById('speedOutput').innerHTML = wind.speed + " mph";
    document.getElementById('humidOutput').innerHTML = feature.humidity + "%";

    var windChill = getWindChill(feature.temp, wind.speed);

    document.getElementById("windOutput").innerHTML = (Math.round(windChill * 10) / 10) + "&deg; F";

}
