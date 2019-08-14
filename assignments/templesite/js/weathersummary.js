var id = [1717512, 2618425, 2158177, 3981609];
var city = ['Cebu City', 'Copenhagen', 'Melbourne', 'Tijuana'];

for (let i = 0; i < city.length; i++) {


        var apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=' + id[i] + '&APPID=be4b279b62e97c1113c247c06009cdee&units=imperial';
        
        let weatherRequest = new XMLHttpRequest();

        weatherRequest.open('GET', apiURLstring, true);

        weatherRequest.responseType = 'text';
        weatherRequest.send();

        weatherRequest.onload = function() {
            let weatherData = JSON.parse(weatherRequest.responseText);

            var weatherSummary = document.getElementById('weatherSummary');

            var feature = weatherData['main'];
            var weather = weatherData['weather'];
            var wind = weatherData['wind'];
            var name = weatherData['name'];

            var myH4 = document.createElement('h4');
            myH4.innerHTML = name + ' Current Weather';
            weatherSummary.appendChild(myH4);
        
            var myPara1 = document.createElement('p');
            myPara1.innerHTML = "Temperature: " + feature.temp + "&deg; F";
            weatherSummary.appendChild(myPara1);

            var myPara2 = document.createElement('p');
            myPara2.textContent = "Humidity: " + feature.humidity + "%";
            weatherSummary.appendChild(myPara2);

            var myPara3 = document.createElement('p');
            myPara3.textContent = "Currently: " + weather[0].main;
            weatherSummary.appendChild(myPara3);

            var myPara4 = document.createElement('p');
            myPara4.textContent = "Wind Speed: " + wind.speed + "mph";
            weatherSummary.appendChild(myPara4);

            var windChill = getWindChill(feature.temp, wind.speed);

            var myPara5 = document.createElement("p")
            myPara5.innerHTML = "Wind Chill: " + (Math.round(windChill * 10) / 10) + "&deg; F";
            weatherSummary.appendChild(myPara5);

        
        
    } 
      
}
