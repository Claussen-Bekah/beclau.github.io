var id = [5604473, 5585000, 5678757];
var city = ['Preston', 'Fish Haven', 'Soda Springs'];

for (let i = 0; i < city.length; i++) {
    if (document.getElementById('pageTitle').innerHTML.includes(city[i])) {
        var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
        var request = new XMLHttpRequest();

        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();
        request.onload = function () {
            var townData = request.response;
            var townEvents = document.getElementById('townEvents');
            var towns = townData['towns'];

            for (let ii = 0; ii < towns.length; ii++) {
                if (city[i] == towns[ii].name) {
                    var events = towns[ii].events;

                    for (let iii = 0; iii < events.length; iii++) {
                        var myH5 = document.createElement('h5');
                        myH5.textContent = towns[ii].events[iii];
                        myH5.setAttribute('class', 'events');
                        townEvents.appendChild(myH5);
                    }
                }
            }
        }
    }
}
