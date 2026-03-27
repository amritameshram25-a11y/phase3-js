let quotes = [
    "Believe in yourself.",
    "Hard work beats talent.",
    "Never give up.",
    "Success is not final, failure is not fatal.",
    "Dream big and dare to fail.",
    "Stay positive, work hard, make it happen."
];

 function generateQuote() {

     let randomIndex = Math.floor(Math.random() * quotes.length);

     let randomQuote = quotes[randomIndex];

     document.getElementById("quote").innerText = randomQuote;
 }