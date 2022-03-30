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
let x = "/newsPages/" + inputVal;
console.log(x)
getAnchorInfo(x)
document.getElementById("nextPage").click()
}

let inputPressed = document.getElementById("searchInput");

// try {
// inputPressed.addEventListener("keyup", function(e){
//     if (e.key === 'Enter') {
//         e.preventDefault();
//         document.getElementById("searchBtn").click();
//     }
// })
// } catch (error) {
// console.log(error)
// }


function getInputValueLucky(){
    let inputVal = document.getElementById("searchInput").value.toLowerCase();
    if (inputVal === 'news'){
        inputVal = 'bbc'
    }
    let x = "/newsPages/" + inputVal;
    console.log(x)
    getLuckyPage(x)
    }

function getLuckyPage(endpoint){
    let str = "http://localhost:3003"
    let url = str + endpoint
    console.log(url)
    fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        console.log(jsonData.link)
        document.getElementById("x").setAttribute("href", jsonData.link)
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
    console.log(url)
    fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
    
    for (let i=0; i=jsonData.length; i++) {
        // console.log(jsonData.link)
        // document.getElementById(`anc${i}`).setAttribute("href", jsonData[i].link)
        // document.getElementById(`anc${i}`).appendChild(jsonData[i].name)


        let tag= document.createElement("a")
        tag.textContent = jsonData[i].name
        document.getElementById("listGroup").append(tag)
    }})
    .catch(function (error){
        //alert(error);
        console.log("Error: " + error)
    })
}
