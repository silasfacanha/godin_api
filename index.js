const express = require("express");
const app = express();
const port = 3000;
const quotesJSONArray = require("./quotesSource.json");
function getRandom(size) {
  return Math.floor(Math.random() * size);
}
app.get("/randomQuote", (req, res) => {
  const randomIndex = getRandom(quotesJSONArray.length);
  const randomQuote = quotesJSONArray[randomIndex];
  res.send(randomQuote);
});

let cultureQuotes = [];
let marketingQuotes = [];
let workQuotes = [];
let ideasQuotes = [];
let lifeQuotes = [];

quotesJSONArray.forEach((quoteItem) => {
  switch (quoteItem.label) {
    case "culture":
      cultureQuotes.push(quoteItem);

      break;
    case "marketing":
      marketingQuotes.push(quoteItem);

      break;
    case "work":
      workQuotes.push(quoteItem);

      break;
    case "ideas":
      ideasQuotes.push(quoteItem);

      break;
    case "life":
      lifeQuotes.push(quoteItem);

      break;
  }
});

app.get("/cultureQuote", (req, res) => {
  const randomIndex = getRandom(cultureQuotes.length);
  const randomCultureQuote = cultureQuotes[randomIndex];
  res.send(randomCultureQuote);
});

app.get("/marketingQuote", (req, res) => {
  const randomIndex = getRandom(marketingQuotes.length);
  const randomMarketingQuote = marketingQuotes[randomIndex];
  res.send(randomMarketingQuote);
});

app.get("/workQuote", (req, res) => {
  const randomIndex = getRandom(workQuotes.length);
  const randomworkQuote = workQuotes[randomIndex];
  res.send(randomworkQuote);
});

app.get("/ideasQuote", (req, res) => {
  const randomIndex = getRandom(ideasQuotes.length);
  const randomIdeasQuote = ideasQuotes[randomIndex];
  res.send(randomIdeasQuote);
});

app.get("/lifeQuote", (req, res) => {
  const randomIndex = getRandom(lifeQuotes.length);
  const randomLifeQuote = lifeQuotes[randomIndex];
  res.send(randomLifeQuote);
});

app.listen(port, () => {
  console.log(quotesJSONArray, port);
});
/*const express = require("express");
const server = express();
const port = 3000;
const quotesJsonArray = require("./quotesSource.json");
const randomNumber = () => {
  Math.floor(Math.random());
};
let cultureQuotes = [];
let marketingQuotes = [];
let workQuotes = [];
let ideasQuotes = [];
let lifeQuotes = [];

quotesJsonArray.forEach((quoteItem) => {
  switch (quoteItem.label) {
    case "culture":
      cultureQuotes.push(quoteItem);

      break;
    case "marketing":
      marketingQuotes.push(quoteItem);

      break;
    case "work":
      workQuotes.push(quoteItem);

      break;
    case "ideas":
      ideasQuotes.push(quoteItem);

      break;
    case "life":
      lifeQuotes.push(quoteItem);

      break;
  }
});
const randomIndex = Math.floor(Math.random() * quotesJsonArray.length);
const randomQ = quotesJsonArray[randomIndex];

server.get("/q", (req, res) => {
  res.send(randomQ);
});
console.log(randomQ);*/
