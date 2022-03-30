# GoogleRemake

A remake of the Google serach engine homepage, with results pages for limited search options. This project handles only a selected search query and contains a 'Lucky Search' button that automatically opens the first result.

## Installation & Usage

### Installation
- Clone the repository.
- Ensure node packages are installed, if not then run the following commands:
```
npm install
npm install jest -D
npm install cors
npm install express
npm install nodemon -D
npm install supertest -D
npm install coverage -D
```
- Ensure the package.json file contains the following:
```
"scripts": {
    "start": "nodemon index.js",
    "test": "jest --silent --watchAll",
    "coverage": "jest --coverage --silent"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.17.3"
  },
  "devDependencies": {
    "coverage": "^0.4.1",
    "jest": "^27.5.1",
    "nodemon": "^2.0.15",
    "supertest": "^6.2.2"
  }
```
- You must be using a linux terminal such as git bash or zsh to run this server.

### Usage

#### Setup
- Open the terminal.
- Navigate to server folder .
- Call npm start on the command line.
- This will iniate the server at the given address.
- If the server does not load, increment the port number from 3000 by 1 until it does.

#### Once Running
- To use this search page, you must enter one of the names in the following list (NOT CASE SENSITIVE)
  
##### News 
- news
- bbc
- itv
- sky
- channel 4
- guardian
- telegraph
- independent
- evening standard

## Technologies
- JavaScript
- Node.js
- HTML
- CSS



## Process
- Started by installing the relevant packages.
- Next, the api was given some enpoints to display different data.
- Then, index.js is called by npm start to make the server live.
- Elements were laid out in an appropriate manner in the HTML document, and CSS was used to style and anchor them.
- The script.js file was then written to allow a dynamic data retrival.
- The getRandomQuote() async function uses a fetch to retrive data from the api and populate the text content of the HTML elements.
- textContent is used to avoid any injection of JS into the HTML document.



## Wins and Challenges
## Wins
- The website correctly fetches a random quote from the api and displays.
- The quote changes on page reload (which occurs on pressing the form submit 'get inspired' button).

### Challenges
- Error handling for out-of-range IDs does not work properly



## Bugs
- The server will not work if the port is already in use, as mentioned above the port may need to be changed away from 3000 to work properly.
- This is because 3000 may already be in use by your pc.



## Future Features
- The server will connect to a database so far more quotes can be retrieved.
- The database will mean more enpoints are needed to show a wider variety of data.
