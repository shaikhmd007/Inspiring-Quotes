// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Quotes</h1>`;

//code for Random Quotes section
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const nextButton = document.getElementById('nextButton');

async function nextQuote() {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    console.log(data);
    nextButton.classList.add("nextQuote");
    quote.innerText = `" ${data.content} "`;
    author.innerText = data.author;
    author.style.color = "";
    quote.style.color = "lime";
}
nextQuote();