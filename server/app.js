const express = require('express')
const app = express()
const cors = require('cors');

const newsPages = [
    {name: 'BBC News', link: "https://www.bbc.co.uk/news"},
    {name: "Sky News", link: "https://news.sky.com/uk"},
    {name: "ITV News", link: "https://www.itv.com/news"},
    {name: "Channel 4 News", link: "https://www.channel4.com/news/"},
    {name: "The Guardian News", link: "https://www.theguardian.com/tone/news"},
    {name: "The Telegraph", link: "https://www.telegraph.co.uk/news/"},
    {name: "The Independent", link: "https://www.independent.co.uk/"},
    {name: "Evening Standard", link: "https://www.standard.co.uk/news"},
]

JSON.stringify(newsPages);

app.use(cors());

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.send('Hello World!')
})

app.get('/newsPages', (req, res) => {
  res.statusCode = 200;
  res.send(newsPages);
});

app.get('/newsPages/news', (req, res) => {
    res.statusCode = 200;
    res.send(newsPages);
  });

const errorMsg = {"error: ": "Choose a number between 1 and 15"}

app.get('/quotes/:id', (req, res) => {   
  try {
    res.statusCode = 200; 
    const personId = req.params.id - 1;   
    const selectedPerson = personId[personId]
    res.send(selectedPerson);
  } catch (error) {
    res.statusCode = 404
    res.send(errorMsg)
  }     
});

module.exports = app
