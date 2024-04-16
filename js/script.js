
//starting by creating a variable and naming it 'quotes' and setting it to an array with five objects

let quotes = [{
  quote: "We must all face the choice between what is right and what is easy.",
  source: "Albus Dumbledore",
  citation: "Harry Potter and the goblet of fire",
  year: "2000"

}, {
  quote: "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.",
  source: "Albus Dumbledore",
  citation: "Harry Potter and The Prisoner Of Azkaban",
  year: "1999"

}, {
  quote: "Well, it may have escaped your notice but, life isn't fair!",
  source: "Severus Snape",
  citation: "Harry Potter and the Half-Blood Prince.",
  year: "2005"

}, {
  quote: "To dance is to let the body breathe.",
  source: "Minerva McGonagall",
  citation: "Harry Potter and the goblet of fire",
  year: "2000"
}, {
  quote: "There's always room for a story that can transport people to another place.",
  source: "J.K. Rowling"

}];

function getRandomQuote() {
  // 1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array
  const randomIndex = Math.floor(Math.random() * quotes.length);

  // 2. Use the random number variable and bracket notation 
  // to grab a random object from the `quotes` array, and 
  // store it in a variable
  const randomQuote = quotes[randomIndex];


  // 3. Return the variable storing the random quote object
  return randomQuote;
}

// Call the function to get a random quote and store it in a variable
const selectedQuote = getRandomQuote();

console.log(selectedQuote);


const quoteDisplay = document.getElementById('quote-box');

function printQuote() {
  // Call getRandomQuote function to get a random quote
  const randomQuote = getRandomQuote();

  // Display the quote on the webpage
  quoteDisplay.innerHTML = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">Source: ${randomQuote.source}<span class="citation">Citation: ${randomQuote.citation || 'N/A'}</span>
    <span class="year">Year: ${randomQuote.year || 'N/A'}</span></p>
    
  `;
}



document.getElementById('load-quote').addEventListener("click", printQuote, false);