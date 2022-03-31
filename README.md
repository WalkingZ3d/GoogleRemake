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

##### Sports 
- news
- bbc sport
- itv sport
- sky sport
- channel 4 sport
- guardian sport
- telegraph sport
- independent sport
- evening standard sport

## Technologies
- JavaScript
- Node.js
- HTML
- CSS



## Process

- Started by installing the relevant packages.
- Next, the api was given some enpoints to display different data.
- Then, index.js is called by npm start to make the server live (using nodemon).
- The home page, index.html, was populated with a footer, header and title.
- The repsonsive section was then added - an input field and two buttons.
- Input from the search bar is stored in a local session and passed to the search.html page
- JavaScript was then written that fetches the api endpoint that matches the search input.
- This is called when the search page loads, so the information displayed depends on the input initally enetered on the home page.
- The 'lucky search' button uses a more specific enpoint and takes the user straight to that website, such as entering bbc will load bbc.co.uk/news
- This 'lucky search' was set up so the first result in a given topic is displayed - typing 'news' and pressing lucky search will redirect straight to bbc.co.uk/news

![Screenshot 1](client\Screenshot1.png)
![Screenshot 2](client\Screenshot2.png)

## Wins and Challenges
## Wins
- The search input isnt case sensitive.
- The lucky search uses a loop so will work for any number of data objects.
- Data displayed on the second page after the search button is pressed is dynamically retrived so will work for any number of data objects.

### Challenges
- error handling isnt perfect
- only works for 'news' or 'sports' - more time needed to implement more functionality



## Bugs
- The server will not work if the port is already in use, as mentioned above the port may need to be changed away from 3000 to work properly.
- This is because 3000 may already be in use by your pc.



## Future Features
- The server will connect to a database so far more quotes can be retrieved.
- The database will mean more enpoints are needed to show a wider variety of data.
- Include functionality to retrieve based on more specific criteria - such as "sky sports"
