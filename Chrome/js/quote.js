const quotes = [
{
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
},
{
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
},  
{
    quote: "The world is a book and those who do not travel read only one page.",
    author: "Saint Augustin",
},
{
    quote: "Don't dream.",
    author: "Tim Curry",
},
{
    quote: "In the end, it’s not the years in your life that count. It’s the life in your years.",
    author: "Abraham Lincoln",
},
{
    quote: "Life is either a great adventure or nothing.",
    author: "Helen Keller",
},
{
    quote: "If you spend too much time thinking about a thing, you’ll never get it done.",
    author: "Bruce Lee",
},
{
    quote: "Keep your eyes on the stars and your feet on the ground.",
    author: "Theodore Roosevelt",
},
{
    quote: "If you would be loved, love and be lovable.",
    author: "Benjamin Franklin",
},
{
    quote: "Try not to become a man of success but rather try to become a man of value.",
    author: "Albert Einstein",
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;