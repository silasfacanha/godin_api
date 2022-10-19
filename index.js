const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const quotesJSONArray = require("./quotesSource.json");

const cors = require("cors");

app.use(cors());

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
  console.log("This API is at localhost:", port);
});
