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
    {name: 'bbc sport', link: "https://www.bbc.co.uk/sport", description: "Sports news and live sports coverage including scores, results, video, audio and analysis on Football, F1, Cricket, Rugby Union and all other UK sports."},
    {name: "sky sport", link: "https://www.skysports.com/", description: "Watch the best live coverage of your favourite sports: Football, Golf, Rugby, Cricket, F1, Boxing, NFL, NBA, plus the latest sports news, ..."},
    {name: "itv sport", link: "https://www.itv.com/news/sport", description: "Sport news from ITV, the UK's biggest commercial broadcaster."},
    {name: "channel 4 sport", link: "https://www.channel4.com/categories/sport", description: "Sport · Formula 1 ® · Formula E · Winter Paralympics: Live · Betfred Super League Rugby · Over the Edge · Lotus: A New Dawn · Winter Paralympics: Highlights · Screaming ..."},
    {name: "guardian sport", link: "https://www.theguardian.com/uk/sport", description: " Sport news, results, fixtures, blogs and comments on UK and world sport from the Guardian, the world's leading liberal voice."},
    {name: "telegraph", link: "https://www.telegraph.co.uk/sport/", description: "Find all the latest real-time sports coverage, live reports, analysis and comment on Telegraph Sport. News, fixtures, scores and video."},
    {name: "independent sport", link: "https://www.independent.co.uk/sport", description: "Independent Sport - Follow the latest sports news and breaking sports stories including Football, Tennis, F1, Golf and Rugby."},
    {name: "evening standard sport", link: "https://www.standard.co.uk/sport", description: "Sports news and breaking stories including football, tennis, F1, golf, boxing, cricket and rugby."},
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
