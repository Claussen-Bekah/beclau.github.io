
function calcChill() {
	var a = parseFloat(document.getElementById('temperature').value);
	var b = parseFloat(document.getElementById('speed').value);
	var c = windChill(a, b);
	
 	document.getElementById('windOutput').innerHTML = c;
}

 function windChill(tempF, speed) {
 	var temp = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF) * (Math.pow(speed, 0.16));
 	return (Math.round(temp * 10) / 10) + "&deg; F" ;
 }


