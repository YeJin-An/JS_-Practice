const quotes = [
  {
    quote: "1fsdfdsfsdfdsf",
    author: "1sfsdfdsfdsfsdfsd",
  },
  {
    quote: "2sfdsfdsfsdfsdfsd",
    author: "2sfdsfdsfdsfsdfsd",
  },
  {
    quote: "3sfdsfsdfsdfdsfsd",
    author: "3sfsdfdsfsdfsdf",
  },
  {
    quote: "4sfdsfdsfsdfsdfsd",
    author: "4sfdfsfsfsdfdsfs",
  },
  {
    quote: "5sfsdfsdfsfsfsd",
    author: "5dsfsdfsdfdsfs",
  },
  {
    quote: "6sdfsdfdsfdfsf",
    author: "6sfdsfdsfsdfsdf",
  },
  {
    quote: "7sdfdsfdsfsdfsdf",
    author: "7sfdfdsfdfsdfdsf",
  },
  {
    quote: "8sdfsdfdsfdsfdsf",
    author: "8sdfsdfdfdfsdfs",
  },
  {
    quote: "9dsfdsfsdfsdfsdf",
    author: "9sfsdfdsfdsfs",
  },
  {
    quote: "10sdfsdfdsfsdfs",
    author: "10sfdsfsdfsdfs",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:first-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
