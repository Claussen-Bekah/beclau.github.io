var temp = 35.74 + (0.6215 * 30) - (35.75 * Math.pow(10, 0.16)) + (0.4275 * 30) * (Math.pow(10, 0.16));

document.getElementById("windOutput").innerHTML = (Math.round(temp * 10) / 10) + "&deg;" + "F";