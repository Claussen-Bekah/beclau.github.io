//changes color of button
function changeColor() {
    document.querySelector('button').style.backgroundColor = "purple";
}

//increases font size on mouse over
function largeSize() {
    document.getElementById('mouseOver').style.fontSize = "1.5em";
}

//returns font to normal size when moused off
function smallSize() {
    document.getElementById('mouseOver').style.fontSize = "1em";
}

//variable of input
let input = document.querySelector('input');

//event Listener that launches toSubmit function when user presses a key inside input field
input.addEventListener('keydown', toSubmit);

//Causes the submit button to bounce 
function toSubmit() {
    let submit = document.getElementById('submit');
    submit.classList.toggle('bounce');
}

//selects pic and displays it when user selects corresponding vegetable
function newPic() {
    let choice = document.getElementById('vegSelect').value;
    if(choice === "carrot") {
        document.getElementById('carrotPic').classList.toggle('hidden');
        if(!document.getElementById('beetPic').classList.contains('hidden'))
        document.getElementById('beetPic').classList.toggle('hidden');
        if(!document.getElementById('radishPic').classList.contains('hidden'))
        document.getElementById('radishPic').classList.toggle('hidden');
    }

    if(choice === "beet") {
        document.getElementById('beetPic').classList.toggle('hidden');
        if(!document.getElementById('carrotPic').classList.contains('hidden'))
        document.getElementById('carrotPic').classList.toggle('hidden');
        if(!document.getElementById('radishPic').classList.contains('hidden'))
        document.getElementById('radishPic').classList.toggle('hidden');
    }

    if(choice === "radish") {
        document.getElementById('radishPic').classList.toggle('hidden');
        if(!document.getElementById('beetPic').classList.contains('hidden'))
        document.getElementById('beetPic').classList.toggle('hidden');
        if(!document.getElementById('carrotPic').classList.contains('hidden'))
        document.getElementById('carrotPic').classList.toggle('hidden');
    }
}

function displayTime() {
    document.getElementById('time').innerHTML = Date();
}