const plrmove = document.getElementById("plrmove")

const rock = document.getElementById("rockbtn")
const paper = document.getElementById("paperbtn")
const scissor = document.getElementById("scissorbtn")

const timer = document.getElementById("timer")



function togglePopup() {
    let popup = document.getElementById("popup")
    popup.classList.toggle("active");
}

function toggleInstructions() {
    let instructions = document.getElementById("instructions")
    instructions.classList.toggle("active");
}

function oppMove() {
    let moves = ["Rock.png", "Paper.png", "Scissor.png"];
    const oppmove = document.getElementById("oppmove");

    let randomMove = moves[Math.floor(Math.random() * moves.length)];

    oppmove.src = "../public/images/" + randomMove
}

function plrMove() {
    rock.onclick = function () {
        plrmove.src = "../public/images/Rock.png"
    }

    paper.onclick = function () {
        plrmove.src = "../public/images/Paper.png"
    }

    scissor.onclick = function () {
        plrmove.src = "../public/images/Scissor.png"
    }
}

function winCheck() {
    let opponent = oppmove.src;
    let player = plrmove.src;

    if (opponent == player) {
        console.log("Round Draw")
    } else if (opponent.includes("Rock.png") && player.includes("Paper.png")) {
        console.log("player gets a point");

    } else if (opponent.includes("Paper.png") && player.includes("Scissor.png")) {
        console.log("player gets a point");

    } else if (opponent.includes("Scissor.png") && player.includes("Rock.png")) {
        console.log("Player gets a point");

    } else if (opponent.includes("Rock.png") && player.includes("Scissor.png")) {
        console.log("Computer gets a point");

    } else if (opponent.includes("Paper.png") && player.includes("Rock.png")) {
        console.log("Computer gets a point");

    } else if (opponent.includes("Scissor.png") && player.includes("Paper.png")) {
        console.log("Computer gets a point");
    }

    setTimeout(() => {
        console.log("Round Ended");
    },1000)
}

function clearMove() {
    oppmove.removeAttribute("src");
    plrmove.removeAttribute("src")
}

function roundTime() {

    console.log("Round Started");
    i = 3;
    timer.textContent = i;

    const gameTime = setInterval(() => {

        i--;
        timer.textContent = i
    }, 1000);

    plrMove()

    setTimeout(() => {
        clearInterval(gameTime)
        oppMove()
        winCheck()

        setTimeout(() => {
            clearMove()
            gameloop()
        }, 2000)
    }, 3000);
}

function gameloop() {

    roundTime()
}

window.addEventListener("load", function () {
    if (document.title == "Computer") {
        let instructions = document.getElementById("instructions")
        instructions.classList.add("active");

        console.log("Read Tutorial");

        let i = 5;
        timer.textContent = i

        const countdown = setInterval(() => {

            i--;
            timer.textContent = i
        }, 1000);

        setTimeout(() => {
            instructions.classList.remove("active");
            clearInterval(countdown)
            gameloop()
        }, 5000);
    }
});


function logToGame(message) {
    const log = document.getElementById("gameLog");
    const newLine = document.createElement("div");
    newLine.className = "logLine";
    newLine.textContent = message;
    log.appendChild(newLine);
    log.scrollTop = log.scrollHeight;
}

const originalConsoleLog = console.log;
console.log = function(message) {
    originalConsoleLog(message);
    logToGame(message);
}