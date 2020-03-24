const quotes = [
    ["The Way Get Started Is To Quit Talking And Begin Doing.", "Walt Disney"],
    ["The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.","Winston Churchill"],
    ["Don’t Let Yesterday Take Up Too Much Of Today.", "Will Rogers"],
    ["You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.", "Unknown"],
    ["It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.", "Inspirational Quote By Vince Lombardi"],
    ["If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.", "Steve Jobs"]
]
const colors = ['#7CA5B8', "#A9DBB8", "#D4B483", "#fff", "#2E4052"]





//Get all elements of interest

const page = document.querySelector(".page-bg");
const quoteText = document.querySelector("#quoteText");
const author = document.querySelector("#author");
const btn = document.querySelector("#btn");

console.log(author)

//Bind btn to an eventlistener
btn.addEventListener("click", getNewQuote);



// Define getNewQuote() event handler
function getNewQuote() {
    let randomQuoteIndex = Math.floor(Math.random() * quotes.length);

    let randomColorIndex = Math.floor(Math.random() * colors.length);
    let newQuote = quotes[randomQuoteIndex][0];

    let quoteAuthor = quotes[randomQuoteIndex][1];

    let newColor = colors[randomColorIndex];

    quoteText.innerText = newQuote;
    author.innerText = quoteAuthor;
    page.style.backgroundColor = newColor;
    btn.style.backgroundColor = newColor;



    
    
}

