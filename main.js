let menu = ['rock', 'scissors', 'paper'];
let wins = 0;



document.getElementById('winsCount').innerHTML = wins;
// user choose rock
function userRock() {
    let winLose = document.getElementById('winLose');
    let userPick = document.getElementById('userPick');
    let computerPick = document.getElementById('computerPick');
    let userChoice = 'rock';
    let computerChoice = '';
    let winOrLose = '';
    let winsCount = document.getElementById('winsCount')

    computerChoice = menu[Math.floor(Math.random() * menu.length)];

    //✊✌️🖐
    if(computerChoice == "rock") {
        winOrLose = "draw";

        winLose.innerHTML = ("DRAW");
        userPick.innerHTML = ("You choose ✊")
        computerPick.innerHTML = ("Computer choose ✊")

    } else if (computerChoice == "scissors") {
        winOrLose = "win";

        winLose.innerHTML = ("WIN");
        userPick.innerHTML = ("You choose ✊")
        computerPick.innerHTML = ("Computer choose ✌️")
    } else {
        winOrLose = "lose";

        winLose.innerHTML = ("LOSE");
        userPick.innerHTML = ("You choose ✊")
        computerPick.innerHTML = ("Computer choose 🖐")
    }
    if(winOrLose == "win") {
        wins = wins + 1;

        document.getElementById('winsCount').innerHTML = wins;
    } else {
        fetch('http://localhost:9000/wins', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: "wins",
                body: wins,
            }),
        }).then(() => {
            console.log("send data")
        })


        window.location.replace("/gameover")

        
    }
}


// user choose scissors
//✊✌️🖐
function userScissors() {
    let winLose = document.getElementById('winLose');
    let userPick = document.getElementById('userPick');
    let computerPick = document.getElementById('computerPick');
    let userChoice = 'scissors';
    let computerChoice = '';
    let winOrLose = '';
    let winsCount = document.getElementById('winsCount')

    computerChoice = menu[Math.floor(Math.random() * menu.length)];

    //✊✌️🖐
    if(computerChoice == "rock") {
        winOrLose = "lose";

        winLose.innerHTML = ("LOSE");
        userPick.innerHTML = ("You choose ✌️")
        computerPick.innerHTML = ("Computer choose ✊")

    } else if (computerChoice == "scissors") {
        winOrLose = "draw";

        winLose.innerHTML = ("DRAW");
        userPick.innerHTML = ("You choose ✌️")
        computerPick.innerHTML = ("Computer choose ✌️")
    } else {
        winOrLose = "win";

        winLose.innerHTML = ("WIN");
        userPick.innerHTML = ("You choose ✌️")
        computerPick.innerHTML = ("Computer choose 🖐")
    }
    if(winOrLose == "win") {
        wins = wins + 1;

        document.getElementById('winsCount').innerHTML = wins;
    } else {
        window.location.replace("/gameover")

        fetch('/wins', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: "wins",
                body: wins,
            }),
        }).then(() => {
            console.log("send data")
        })
    }
}





// user choose paper
//✊✌️🖐
function userPaper() {
    let winLose = document.getElementById('winLose');
    let userPick = document.getElementById('userPick');
    let computerPick = document.getElementById('computerPick');
    let userChoice = 'scissors';
    let computerChoice = '';
    let winOrLose = '';
    let winsCount = document.getElementById('winsCount')

    computerChoice = menu[Math.floor(Math.random() * menu.length)];

    //✊✌️🖐
    if(computerChoice == "rock") {
        winOrLose = "win";

        winLose.innerHTML = ("WIN");
        userPick.innerHTML = ("You choose 🖐")
        computerPick.innerHTML = ("Computer choose ✊")

    } else if (computerChoice == "scissors") {
        winOrLose = "lose";

        winLose.innerHTML = ("LOSE");
        userPick.innerHTML = ("You choose 🖐")
        computerPick.innerHTML = ("Computer choose ✌️")
    } else {
        winOrLose = "draw";

        winLose.innerHTML = ("DRAW");
        userPick.innerHTML = ("You choose 🖐")
        computerPick.innerHTML = ("Computer choose 🖐")
    }
    if(winOrLose == "win") {
        wins = wins + 1;

        document.getElementById('winsCount').innerHTML = wins;
    } else {
        window.location.replace("/gameover")

        fetch('/wins', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: "wins",
                body: wins,
            }),
        }).then(() => {
            console.log("send data")
        })
    }
}



function goBackToHome() {
    window.location.replace('../')
}

function playAgain() {
    window.location.reload()
}

