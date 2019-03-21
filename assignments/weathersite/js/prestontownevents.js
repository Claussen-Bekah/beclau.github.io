var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function () {
    var townData = request.response;

    var townName = 'Preston';

    var townEvents = document.getElementById('townEvents');
    var towns = townData['towns'];


    for (var i = 0; i < towns.length; i++) {

        if (townName == towns[i].name) {
            var events = towns[i].events;

            for (let ii = 0; ii < events.length; ii++) {
                var myH5 = document.createElement('h5');
                myH5.textContent = towns[i].events[ii];
                townEvents.appendChild(myH5);
            }

        }
    }


}