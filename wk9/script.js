function getQuote() {

document.getElementById('button').classList.toggle('hidden');

const request = new XMLHttpRequest();

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




