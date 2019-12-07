function callAPI() {
    var request = new XMLHttpRequest();

    request.open("POST", "https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en&jsonp=?", true);

    request.onload = function () {
        let quoteData = JSON.parse(request.responseText);

        let quote = quoteData.quoteText;
        let author = quoteData.quoteAuthor;

        let quoteDiv = document.getElementById('quote');

        let firstQuoteDiv = document.createElement('div');
        firstQuoteDiv.setAttribute('id', 'primaryQuote');
        quoteDiv.appendChild(firstQuoteDiv);

        let quoteBody = document.createElement('h1');
        quoteBody.innerHTML = quote;
        firstQuoteDiv.appendChild(quoteBody);

        let quoteAuthorHeader = document.createElement('h2');
        quoteAuthorHeader.innerHTML = author;
        firstQuoteDiv.appendChild(quoteAuthorHeader);
    }

    request.send();
}

function newQuote() {

    let oldQuote = document.getElementById('primaryQuote');
    if (document.getElementById('quote').contains(oldQuote)) {
        oldQuote.remove();
    }

    callAPI();
}

const myQuotes = JSON.parse(localStorage.getItem('myQuotes')) || [];

const viewFavoritesButton = document.getElementById('viewFavorites');

const favList = document.getElementById('favList');


function saveQuote() {
    let faveQuote = document.getElementById('primaryQuote').innerHTML;

    myQuotes.push(faveQuote);

    localStorage.setItem("myQuotes", JSON.stringify(myQuotes));
  
}

function viewFavorites() {

    favList.classList.toggle('hidden');

   if(viewFavoritesButton.innerHTML == "View Favorites") {
       viewFavoritesButton.innerHTML = "Hide Favorites";
   } else(viewFavoritesButton.innerHTML = "View Favorites");

    favList.innerHTML = 
    myQuotes.map( faveQuote => {
      return `<li class="favItem">${faveQuote} <button class="btn" onclick="deleteFavorites()">Remove</button></li>` ;
    })
    .join("");

}

// viewFavoritesButton.addEventListener('click', viewFavorites());

function deleteFavorites() {
    localStorage.removeItem();
}

