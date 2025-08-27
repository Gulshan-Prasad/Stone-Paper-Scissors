const plrmove = document.getElementById("plrmove")

const rock = document.getElementById("rockbtn")
const paper = document.getElementById("paperbtn")
const scissor = document.getElementById("scissorbtn")

rock.onclick = function () {
    plrmove.src = "../public/images/Rock.png"
}

paper.onclick = function () {
    plrmove.src = "../public/images/Paper.png"
}

scissor.onclick = function () {
    plrmove.src = "../public/images/Scissor.png"
}



function togglePopup() {
    let popup = document.getElementById("popup")
    popup.classList.toggle("active");
}

function toggleInstructions() {
    let instructions = document.getElementById("instructions")
    instructions.classList.toggle("active");
}

window.addEventListener("load", function () {
    if (document.title == "Computer") {
        let instructions = document.getElementById("instructions")
        instructions.classList.add("active");

        setTimeout(() => {
            instructions.classList.remove("active");
        }, 5000);
    }
});