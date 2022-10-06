let testUrl = "http://localhost:9000/wins"
let wins = 0;


function callWinsApi() {
    fetch('/wins')
    .then((res) => {
        res.json()
    }).then((data) => {
        console.log(data.wins)
    }).catch ((err) => {
        console.log(err)
    })
}


function goToGame() {
    window.location.replace('/game')
}

callWinsApi()