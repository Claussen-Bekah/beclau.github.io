var requestURL = 'https://beclau.github.io/templeinfo.json';

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
    var templeData = request.response;
    showInfo(templeData);
}

function showInfo(jsonData) {




    var templeInfo = document.getElementById('templeInfo');
    var temples = jsonData['temples'];

    for (let i = 0; i < temples.length; i++) {

        var infoDiv = document.createElement('div');
            infoDiv.setAttribute('class', 'infoDiv');
            templeInfo.appendChild(infoDiv);

            var myH2 = document.createElement('h2');
            myH2.setAttribute('class', 'templeName');
            myH2.textContent = temples[i].name;
            infoDiv.appendChild(myH2);

            var table = document.createElement('table');
            table.setAttribute('class', 'mainInfo');
            infoDiv.appendChild(table);

            var thead = table.createTHead();
            var tbody = table.createTBody();

            var row1 = thead.insertRow(0);
            row1.setAttribute('class','toprow');

            var row2 = tbody.insertRow(0);

            var th1 = document.createElement('th');
            th1.textContent = 'Address:'
            row1.appendChild(th1);

            var th2 = document.createElement('th');
            th2.textContent = 'Telephone:'
            row1.appendChild(th2);

            var th3 = document.createElement('th');
            th3.textContent = 'Services:'
            row1.appendChild(th3);

            cell1 = row2.insertCell(0);
            cell2 = row2.insertCell(1);
            cell3 = row2.insertCell(2);
           

            cell1.innerHTML = temples[i].address;
            cell2.innerHTML = temples[i].telephone;
            cell3.innerHTML = temples[i].services;


            var myPara1 = document.createElement('p');
            myPara1.textContent = 'History: ';
            infoDiv.appendChild(myPara1);

            var myPara2 = document.createElement('p');
            myPara2.textContent = 'Ordinance Schedule: ';
            infoDiv.appendChild(myPara2);

            var myPara3 = document.createElement('p');
            myPara3.textContent = 'Session Schedule: ';
            infoDiv.appendChild(myPara3);

            var mySpan1 = document.createElement('span');
            mySpan1.textContent = temples[i].history;
            mySpan1.setAttribute('class', 'infoPara');
            myPara1.appendChild(mySpan1);

            var mySpan2 = document.createElement('span');
            mySpan2.textContent = temples[i].ordinanceSchedule;
            mySpan2.setAttribute('class', 'infoPara');
            myPara2.appendChild(mySpan2);

            var mySpan3 = document.createElement('span');
            mySpan3.textContent = temples[i].sessionSchedule;
            mySpan3.setAttribute('class', 'infoPara');
            myPara3.appendChild(mySpan3);

            var myPara4 = document.createElement('p');
            myPara4.textContent = 'Temple Closures:'
            infoDiv.appendChild(myPara4);
            
            var closures = temples[i].templeClosures;

            for (let ii = 0; ii < closures.length; ii++) {
                var mySpan4 = document.createElement('span');
                mySpan4.setAttribute('class', 'infoPara closures');
                mySpan4.textContent = closures[ii];
                myPara4.appendChild(mySpan4);
            }
            
            
           

        }

    }









