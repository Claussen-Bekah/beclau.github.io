//calling the api to return the quote
function callAPI() {
    var request = new XMLHttpRequest();

    request.open("POST", "https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en&jsonp=?", true);

    request.onload = function () {
        buildQuote(request.responseText, document.getElementById('quote'));
    }

    request.send();
}

//deleting the current quote and creating a new one
function newQuote() {

    let oldQuote = document.getElementById('primaryQuote');
    if (document.getElementById('quote').contains(oldQuote)) {
        oldQuote.remove();
    }

    callAPI();
}

//declaring favorite list variable
const favList = document.getElementById('favList');

//building the quote
function buildQuote(jsonQuote, quoteDiv) {
    //parsing the quote object
    let quoteData = JSON.parse(jsonQuote);

    //creating new quote object
    let quote = new Quote();

    //assigning quote data
    quote.quoteText = quoteData.quoteText;
    quote.quoteAuthor = quoteData.quoteAuthor;

    //manipulating the DOM to build the quote div and buttons
    let saveBtn = document.getElementsByClassName('saveBtn');
    for (let i = 0; i < saveBtn.length; i++) {
        //create unique id based on date
        saveBtn[i].setAttribute('id', Date.now().toString());
    }


    let firstQuoteDiv = document.createElement('div');
    firstQuoteDiv.setAttribute('id', 'primaryQuote');
    quoteDiv.appendChild(firstQuoteDiv);

    let quoteBody = document.createElement('h1');
    quoteBody.innerHTML = quote.quoteText;
    quoteBody.setAttribute('id', 'quoteBody');
    firstQuoteDiv.appendChild(quoteBody);

    let quoteAuthorHeader = document.createElement('h2');
    quoteAuthorHeader.innerHTML = quote.quoteAuthor;
    quoteAuthorHeader.setAttribute('id', 'quoteAuthor');
    firstQuoteDiv.appendChild(quoteAuthorHeader);
}

//save the quote to local storage
function saveQuote(quoteid, quoteType) {

    let quote = new Quote();

    //assign quote to different object children
    if (quoteType == "funny") {
        quote = new FunnyQuote();
    } else {
        quote = new InspireQuote();
    }

    //assign quote text from the DOM
    quote.quoteText = document.getElementById('quoteBody').innerHTML;

    quote.quoteAuthor = document.getElementById('quoteAuthor').innerHTML;

    //set item in local storage
    localStorage.setItem(quoteid, JSON.stringify(quote));

    //create the favorites list with the fresh data
    refreshList();

}



function viewFavorites() {

    //favorites button variable
    const viewFavoritesButton = document.getElementById('viewFavorites');

    //toggle the favorites list to be displayed or not
    favList.classList.toggle('hidden');

    //change the text of the button
    if (viewFavoritesButton.innerHTML == "View Favorites") {
        viewFavoritesButton.innerHTML = "Hide Favorites";
    } else(viewFavoritesButton.innerHTML = "View Favorites");

    //build the favorites list
    refreshList();


}

//function to build the entire favorites list based in Local Storage data
function refreshList() {
    favList.innerHTML = '';

    for (let i = 0; i < localStorage.length; i++) {
        //get key from local storage
        const quoteKey = localStorage.key(i);
        const quoteItem = localStorage.getItem(quoteKey);

        let listItem = document.createElement('li');

        //build quote using the local storage object
        buildQuote(quoteItem, listItem);

        listItem.setAttribute('class', 'favItem');

        //add category based on object
        let para = document.createElement('p');
        if (JSON.parse(quoteItem).type == "funny") {
            para.innerHTML = "Funny";
        } else {
            para.innerHTML = "Inspiring";
        }

        listItem.appendChild(para);
        para.setAttribute('class', 'quoteType');

        let listBtn = document.createElement('button');
        listBtn.innerHTML = "Remove";
        listBtn.setAttribute('class', 'btn listBtn');
        listBtn.setAttribute('onclick', `deleteFavorite(${quoteKey})`);
        listItem.appendChild(listBtn);

        favList.appendChild(listItem);

    }
}

//delete item from local storage
function deleteFavorite(quoteKey) {
    localStorage.removeItem(quoteKey);
    refreshList();
}

//animate the new quote buttons
function animateBtn() {
    let newBtn = document.getElementById('newBtn');

    newBtn.classList.add('animate');

    //syntax for Opera, Chrome, and Safari
    newBtn.addEventListener("webkitAnimationEnd", removeClass);

    //standard syntax
    newBtn.addEventListener("animationend", removeClass);

}


function removeClass() {
    let newBtn = document.getElementById('newBtn');
    newBtn.classList.remove('animate');
}

//build Canvas
function myCanvas() {
    let canvas = document.getElementById('myCanvas');
    let cc = canvas.getContext('2d');

    let g = cc.createLinearGradient(0, 0, 200, 0);
    g.addColorStop(0, "#1697b7");
    g.addColorStop(1, "#30c3cd");

    cc.font = "italic 30pt Raleway";
    cc.fillStyle = g;
    cc.fillText('Get a Quote!', 10, 60);

    canvas.classList.add('move');

}

//build quote object
function Quote() {
    this.quoteText = '';
    this.quoteAuthor = '';
    this.type = '';
}

//build FunnyQuote object that inherits from quote Object
function FunnyQuote() {
    Quote.call(this);
    this.type = 'funny';
}

//build InspireQuote object that inherits from Quote object
function InspireQuote() {
    Quote.call(this);
    this.type = 'inspiring';
}