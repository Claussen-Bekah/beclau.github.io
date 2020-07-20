function clickFunction() {
    const button = document.getElementById('btn');
    if (button.innerHTML === "Click Me") {
        button.innerHTML = "Clicked!";
    } else {
        button.innerHTML = 'Click Me';
    }
}

function colorFunction() {
    let userColor = document.getElementById('color').value;
    let colorDiv = document.getElementById('colorDiv');
    
    colorDiv.style.backgroundColor = userColor;
}