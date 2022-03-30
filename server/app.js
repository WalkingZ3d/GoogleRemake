const express = require('express')
const app = express()
const cors = require('cors');

const newsPages = [
    {name: 'bbc', link: "https://www.bbc.co.uk/news"},
    {name: "sky", link: "https://news.sky.com/uk"},
    {name: "itv", link: "https://www.itv.com/news"},
    {name: "channel 4", link: "https://www.channel4.com/news/"},
    {name: "guardian", link: "https://www.theguardian.com/tone/news"},
    {name: "telegraph", link: "https://www.telegraph.co.uk/news/"},
    {name: "independent", link: "https://www.independent.co.uk/"},
    {name: "evening standard", link: "https://www.standard.co.uk/news"},
]

JSON.stringify(newsPages);

app.use(cors());

const errorMsg = {"error: ": "Invalid news site name"}

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

app.get('/newsPages/:id', (req, res) => {  
    if (req.params.id <= 15 && req.params.id > 0) {
      try {
        res.statusCode = 200; 
        const quoteId = req.params.id - 1;   
        const selectedQuote = newsPages[quoteId]
        res.send(selectedQuote);
      } catch (error) {
        res.statusCode = 404
        res.send(errorMsg)
      }     
    } else if (req.params.id > 15 || req.params.id == 0){
      res.statusCode = 404
      res.send(errorMsg)
    }
  });

module.exports = app
