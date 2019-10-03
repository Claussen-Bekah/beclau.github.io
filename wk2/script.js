
// getElementById basic
document.getElementById('head').style.color = "#E7b7c8";
document.getElementById('head').style.fontFamily = "Rockwell";
document.getElementById('head').style.textAlign = "center";


// query selecter
let myElement = document.querySelector('#head2');

myElement.style.backgroundColor = "#47CACC";
myElement.style.color = "white";
myElement.style.textAlign = "center";
myElement.style.margin = "auto";
myElement.style.width = "500px";

//getElementsByClassName
let paraStyle = document.getElementsByClassName('para');
let bigFont = "30px";

//loop through array
for (let i = 0; i < paraStyle.length; i++) {
    paraStyle[i].style.color = "purple";
    paraStyle[i].style.fontSize = `${bigFont}`;
    paraStyle[i].style.fontFamily = 'Helvetica';
    paraStyle[i].style.textAlign= 'center';
}

//go to index and style specific class
paraStyle[1].style.backgroundColor = '#eeeeee';



//modify CSS classes based on user action
function displayHidden() {
    document.getElementById('special').classList.toggle('hidden');
    document.getElementById('button').classList.toggle('animation');
}

function hoverStyle() {
    document.getElementById('button').classList.toggle('hover');
}

