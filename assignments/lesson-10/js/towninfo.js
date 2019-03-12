    var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

    var request = new XMLHttpRequest();

    request.open('GET', requestURL);

    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var townData = request.response;
        showInfo(townData);
    }
    
    function showInfo(jsonData) {

        var townNames = ['Fish Haven', 'Preston', 'Soda Springs']; //Make sure an image exists for each town with name [townname].jpg
        var townInfo = document.getElementById('townInfo');
        var towns = jsonData['towns'];

        for (var i = 0; i < towns.length; i++) {
            if (townNames.includes(towns[i].name)) {
                var div = document.createElement('div');
                div.setAttribute('class', 'town');
                townInfo.appendChild(div);

                var myH3 = document.createElement('h3');
                myH3.textContent = towns[i].name;
                div.appendChild(myH3);

                var myPara1 = document.createElement('p');
                myPara1.textContent = towns[i].motto;
                myPara1.setAttribute('class', 'motto')
                div.appendChild(myPara1);

                var myPara2 = document.createElement('p');
                div.appendChild(myPara2);

                var mySpan1 = document.createElement('span');
                mySpan1.textContent = "Year Founded: ";
                mySpan1.setAttribute('class','strong');
                myPara2.appendChild(mySpan1);

                var mySpan2 = document.createElement('span');
                mySpan2.textContent = towns[i].yearFounded;
                mySpan2.setAttribute('class','values');
                myPara2.appendChild(mySpan2);

                var myPara3 = document.createElement('p');
                div.appendChild(myPara3);

                var mySpan3 = document.createElement('span');
                mySpan3.textContent = "Population: ";
                mySpan3.setAttribute('class','strong');
                myPara3.appendChild(mySpan3);

                var mySpan4 = document.createElement('span');
                mySpan4.textContent = towns[i].currentPopulation;
                mySpan4.setAttribute('class','values');
                myPara3.appendChild(mySpan4);

                var myPara4 = document.createElement('p');
                div.appendChild(myPara4);

                var mySpan5 = document.createElement('span');
                mySpan5.textContent = 'Annual Rain Fall: ';
                mySpan5.setAttribute('class','strong');
                myPara4.appendChild(mySpan5);

                var mySpan6 = document.createElement('span');
                mySpan6.textContent = towns[i].averageRainfall + "\""; 
                mySpan6.setAttribute('class','values');
                myPara4.appendChild(mySpan6);

                var figure = document.createElement('figure');
                figure.setAttribute('class', 'townimg');
                div.appendChild(figure);
                
                var img = document.createElement('img');
                img.setAttribute('src', 'images/' + towns[i].name.replace(/\s+/g, '-').toLowerCase() + '.jpg');
                img.setAttribute('alt', 'picture of ' + towns[i].name);
                figure.appendChild(img);
            }

        }

        
}

    


    
    
  