function getQuote() {

document.getElementById('button').classList.toggle('hidden');

var request = new XMLHttpRequest();

request.open("POST", "https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en&jsonp=?", true);

request.onload = function() {
    let quoteData = JSON.parse(request.responseText);

    let quote = quoteData.quoteText;
    let author = quoteData.quoteAuthor;

    let quoteDiv = document.getElementById('quote');

    let quoteBody = document.createElement('h1');
    quoteBody.innerHTML = quote;
    quoteDiv.appendChild(quoteBody);

    let quoteAuthorHeader = document.createElement('h2');
    quoteAuthorHeader.innerHTML = author;
    quoteDiv.appendChild(quoteAuthorHeader);
}

request.send();
}

function canvasRotate() {
var canvas = document.getElementById("circles");
var ctx = canvas.getContext("2d");

ctx.beginPath();
for(var i = 0; i < 12; i++){
  	var x = 10 + Math.random() * 140;
    var y = 10 + Math.random() * 140;
      
	ctx.beginPath();

  	ctx.arc( x, y, 30, 0, Math.PI * 2, false );

      ctx.fillStyle ="#2B3F84";
      ctx.fill();

}
}

// ctx.rotate(Math.random() * 2 * Math.PI);
// ctx.fillStyle = "rgb(200,0,0)";
// ctx.fillRect (10, 10, 55, 50);

// ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
// ctx.fillRect (30, 30, 55, 50);



