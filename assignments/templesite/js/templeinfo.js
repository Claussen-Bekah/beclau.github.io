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

    for (var i = 0; i < temples.length; i++) {

            var myH2 = document.createElement('h2');
            myH2.textContent = temples[i].name;
            templeInfo.appendChild(myH2);
       
            var table = document.createElement('table');
            table.setAttribute('class', 'mainInfo');
            templeInfo.appendChild(table);

            var thead = document.createElement('thead');
            table.appendChild(thead);

            var row2 = table.insertRow(0);
            
            cell1 = row2.insertCell(0);
            cell2 = row2.insertCell(1);
            cell3 = row2.insertCell(2);
            cell4 = row2.insertCell(3);
            cell5 = row2.insertCell(4);
            cell6 = row2.insertCell(5);
            cell7 = row2.insertCell(6);

            cell1.innerHTML = temples[i].address;
            cell2.innerHTML = temples[i].telephone;
            cell3.innerHTML = temples[i].services;
            cell4.innerHTML = temples[i].history;
            cell5.innerHTML = temples[i].object['ordinance schedule'];
            cell6.innerHTML = temples[i].address;
            cell7.innerHTML = temples[i].address;

            




            
        }

    }

    







