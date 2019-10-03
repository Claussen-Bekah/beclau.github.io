
// getElementById basic
document.getElementById('head').style.color = "hotpink";
document.getElementById('head').style.fontFamily = "Rockwell";

// query selecter
let myElement = document.querySelector('#head2');

myElement.style.backgroundColor = "green";
myElement.style.color = "white";

//append style to head of document
let style = document.createElement('style');
style.innerHTML = `
.para {
    color: purple;
    font-size: 1.2em;
    font-family: Helvetica;
}
`;

document.head.appendChild(style);

//modify CSS based on user action
function changeColor(){
    let button = document.querySelector("#button");
    let deg = "45deg";
    let bigFont = "30px";

    button.style.color = "green";
    button.style.backgroundColor = "pink";
    button.style.fontSize = `${bigFont}`;
    button.style.transform = `rotate(${deg})`;
    button.style.background = ``;
    button.style.transition = `all 0.45s`;
}


//modify CSS using ::before and ::after based on JS result
let url = "https://beclau.github.io";

function loadError(url) {

    let style = document.createElement('style');
    style.innerHTML = `
    #link::after {
        content: "Page does not exist!";
        color: pink;
        font-family: Rockwell;
        font-size: 2em;
        padding: 20px;
    }
    `;
    
    let http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    if (http.status == 404) {
        document.head.appendChild(style);
    }

}

