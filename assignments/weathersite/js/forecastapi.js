var id = [5604473, 5585000, 5678757];
var city = ['Preston', 'Fish Haven', 'Soda Springs'];

for (let i = 0; i < city.length; i++) {

    if (document.getElementById('pageTitle').innerHTML.includes(city[i])){

        var apiURLstring = 'https://api.openweathermap.org/data/2.5/forecast?id=' + id[i] + '&APPID=be4b279b62e97c1113c247c06009cdee&units=imperial';
        
        let forecastRequest = new XMLHttpRequest();

        forecastRequest.open('GET', apiURLstring, true);

        forecastRequest.responseType = 'text';
        forecastRequest.send();

        forecastRequest.onload = function buildForecast() {

            console.log(JSON.parse(forecastRequest.responseText));
        
            let weatherData = JSON.parse(forecastRequest.responseText);
        
            var dayOutput = document.getElementById('dayOutput');
            var list = weatherData['list'];
        
            for (var i = 0; i < list.length; i++) {
        
                if (list[i].dt_txt.includes('18:00:00')) {
                    var td = document.createElement('td');
                    dayOutput.appendChild(td);
        
                    var myIcon = document.createElement('img');
                    myIcon.setAttribute('src', 'http://openweathermap.org/img/w/' + list[i].weather[0].icon + '.png');
                    myIcon.setAttribute('class', 'forecastimg');
                    myIcon.setAttribute('alt', 'weather icon');
                    td.appendChild(myIcon);
        
                    var span = document.createElement('span');
                    span.innerHTML = list[i].main.temp + '&deg; F';
                    span.setAttribute('class', 'smforecast');
                    td.appendChild(span);
        
                }
            }
        } 
        break;
    }
}
