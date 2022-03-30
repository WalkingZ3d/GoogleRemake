const express = require('express')
const app = express()
const cors = require('cors');

const newsPages = [
    {name: 'BBC News', link: "https://www.bbc.co.uk/news"},
    {name: "Sky News", link: "https://news.sky.com/uk"}
]

JSON.stringify(newsPages);

function getRandomPerson () {
  return newsPages[Math.floor(Math.random()*2)]  
}

app.use(cors());

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.send('Hello World!')
})

app.get('/newsPages', (req, res) => {
  res.statusCode = 200;
  res.send(newsPages);
});

app.get('/newsPages/random', (req, res) => {
  res.statusCode = 200;
  let ranPerson = getRandomPerson();
  let msg = ranPerson.name 
  res.send(msg);
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
