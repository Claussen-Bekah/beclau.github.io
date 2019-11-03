let canvas = document.getElementById("newCanvas");

let ctx = canvas.getContext("2d");
ctx.beginPath();

ctx.arc(250, 150, 75, 0, 2 * Math.PI);
ctx.fillStyle ="#FFA500";
ctx.fill();

let textCanvas = document.getElementById("textCanvas");
let ctxt = textCanvas.getContext("2d");
ctxt.font = "40px Courier";
var grd = ctxt.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "purple");
grd.addColorStop(1, "lightblue");

// Fill with gradient
ctxt.fillStyle = grd;
ctxt.fillText("My first canvas", 20, 120);

// Create gradient
