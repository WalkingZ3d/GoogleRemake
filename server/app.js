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

const sportsPages = [
    {name: 'bbc', link: "https://www.bbc.co.uk/news"},
    {name: "sky", link: "https://news.sky.com/uk"},
    {name: "itv", link: "https://www.itv.com/news"},
    {name: "channel 4", link: "https://www.channel4.com/news/"},
    {name: "guardian", link: "https://www.theguardian.com/tone/news"},
    {name: "telegraph", link: "https://www.telegraph.co.uk/news/"},
    {name: "independent", link: "https://www.independent.co.uk/"},
    {name: "evening standard", link: "https://www.standard.co.uk/news"},
]

JSON.stringify(sportsPages);

app.use(cors());

const errorMsg = {"error: ": "Invalid site name"}

app.get('/', (req, res) => {
    try {
        res.statusCode = 200;
        res.send('Our Version of Google is Better!')
    } catch (error) {
        res.statusCode = 404;    
        res.send(error + " " + statusCode + errorMsg)
    }
  
})

app.get('/newsPages', (req, res) => {
    try {
        res.statusCode = 200;
        res.send(newsPages);
    } catch (error) {
        res.statusCode = 404;    
        res.send(error + " " + statusCode + errorMsg)
    }  
});

app.get('/newsPages/news', (req, res) => {
    try {
        res.statusCode = 200;
        res.send(newsPages);
    } catch (error) {
        res.statusCode = 404;    
        res.send(error + " " + statusCode + errorMsg)
    }  
});


app.get('/sportsPages', (req, res) => {
    try {
        res.statusCode = 200;
        res.send(sportsPages);
    } catch (error) {
        res.statusCode = 404;    
        res.send(error + " " + statusCode + errorMsg)
    }  
});

app.get('/sportsPages/sports', (req, res) => {
    try {
        res.statusCode = 200;
        res.send(sportsPages);
    } catch (error) {
        res.statusCode = 404;    
        res.send(error + " " + statusCode + errorMsg)
    }  
});

module.exports = app
