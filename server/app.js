const express = require('express')
const app = express()
const cors = require('cors');

const newsPages = [
    {name: 'bbc', link: "https://www.bbc.co.uk/news",description:"The best of the BBC, with the latest news and sport headlines, weather, TV & radio highlights and much more from across the whole of BBC Online."},
    {name: "sky", link: "https://news.sky.com/uk",description:"Expert comment and analysis on the latest UK news, with headlines from England, Scotland, Northern Ireland and Wales."},
    {name: "itv", link: "https://www.itv.com/news",description:"Get the latest stories from ITV News, the UK's largest commercial news organisation, including breaking news on a regional and national level."},
    {name: "channel 4", link: "https://www.channel4.com/news/",description:"News that's committed to challenging expectations with stories that reveal and inspire, innovatively produced - with just a touch of mischief."},
    {name: "guardian", link: "https://www.theguardian.com/tone/news",description:"Latest US news, world news, sports, business, opinion, analysis and reviews from the Guardian, the world's leading liberal voice."},
    {name: "telegraph", link: "https://www.telegraph.co.uk/news/",description:"Quality, Trusted, Award-Winning Journalism. Get 3 Months For £1 With Your First Month Free. Groundbreaking News, Featuring Analysis On The Biggest Topics With Our Expert Reporting."},
    {name: "independent", link: "https://www.independent.co.uk/",description:"The latest breaking news, comment and features from The Independent."},
    {name: "evening standard", link: "https://www.standard.co.uk/news",description:"Latest London news, business, sport, celebrity and entertainment from the London Evening Standard."},
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



module.exports = app
