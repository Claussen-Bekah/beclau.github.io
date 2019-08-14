var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

n = new Date();
d = n.getDate();
y = n.getFullYear();
m = n.getMonth();
w = n.getDay();

document.getElementById("currentDate").innerHTML = weekdays[w] + ", " + d + " " + months[m] + " " + y;
  