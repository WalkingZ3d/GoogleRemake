function getWebsite(endpoint){ 
    
    let str = "http://localhost:3003"
    let url = str + endpoint
    console.log(url)
    fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        console.log(jsonData)
        document.getElementById("webName").textContent = jsonData.webName
        document.getElementById("webURL").textContent = jsonData.webURL
    })
    .catch(function (error){
        //alert(error);
        console.log("Error: " + error)
        document.getElementById("webName").textContent = ''
        document.getElementById("WebURL").textContent = ''
    })
}

function getInputValue(){
    let inputVal = document.getElementById("searchInput").value.toLowerCase();
    let x = ""
    if (inputVal.includes("news")) {
        x = "/newsPages/" + inputVal;    
    } else if(inputVal.includes("sports")){
        x = "/sportsPages/" + inputVal;
    } else if(inputVal.includes("sport")){
        inputVal += "s"
        x = "/sportsPages/" + inputVal;
    }
    store(x)
}

function store(x) {
    sessionStorage.setItem('first', x);
    console.log(x)
    location.href = "search.html"
}

function getSearchResults() {
    let first = sessionStorage.getItem('first');
    console.log(first)
    getAnchorInfo(first);
}

let inputPressed = document.getElementById("searchInput");

try {
inputPressed.addEventListener("keyup", function(e){
    if (e.key === 'Enter') {
        e.preventDefault();
        getInputValue()
    }
})
} catch (error) {
console.log(error)
}


function getInputValueLucky(){
    let inputVal = document.getElementById("searchInput").value.toLowerCase();
    if (inputVal === 'news'){
        inputVal = 'bbc'
        type = '/newsPages/'
    } else if (inputVal === 'sports') {
        inputVal = 'bbc sport'
        type = '/sportsPages/'
    }
    getLuckyPage(inputVal, type)
    }

function getLuckyPage(inputVal, type){
    let str = "http://localhost:3003"
    str += type
    //console.log(str)
    fetch(str)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        //console.log(jsonData)
        let y;
        for (let i = 0; i < jsonData.length; i++) {
            if (jsonData[i].name === inputVal) {
                y = jsonData[i].link
            }
        }
        //console.log(y)
        document.getElementById("x").setAttribute("href", y)
        document.getElementById("x").click()
    })
    .catch(function (error){
        //alert(error);
        console.log("Error: " + error)
    })
}


function getAnchorInfo(endpoint){
    let str = "http://localhost:3003"
    let url = str + endpoint
    fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {   
    for (let i = 0; i < jsonData.length; i++) {       
        let tag = document.createElement("a")
        tag.textContent = jsonData[i].name
        tag.setAttribute('href', jsonData[i].link)
        tag.setAttribute("class","list-group-item list-group-item-action")
        document.getElementById("listGroup").appendChild(tag)
        let tag2 = document.createElement("p")
        tag2.textContent = jsonData[i].description
        tag.appendChild(tag2) 
    }
    })
    .catch(function (error){
        //alert(error);
        console.log("Error: " + error)
    })
}

//getAnchorInfo('/newsPages/news')
