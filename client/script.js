


 function getWebsite(endpoint){ 
    
    let str = "http://localhost:3003"
    let url = str + endpoint

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
        alert(error);
        console.log("Error: " + error)
        document.getElementById("webName").textContent = ''
        document.getElementById("WebURL").textContent = ''
    })
}

function getInputValue(){
let inputVal = document.getElementById("searchInput").value;
let x = "/webName/" + inputVal;
getWebsite(x)
}
let inputPressed = document.getElementById("indexInputDogs");
try {
inputPressed.addEventListener("keyup", function(e){
    if (e.key === 'Enter') {
        e.preventDefault();
        document.getElementById("searchBtnDogs").click();
    }
})
} catch (error) {
console.log(error)
}

async function getWebsite(endpoint) {
let str = "http://localhost:3000"
let url = str + endpoint
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
    alert(error);
    console.log("Error: " + error)
    document.getElementById("webName").textContent = ''
    document.getElementById("webURL").textContent = ''
})
}
