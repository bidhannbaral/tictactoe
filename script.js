const cells = document.querySelectorAll(".cell");
const start = document.querySelector(".start");
const text = document.querySelector(".text");
let player1 = true;
let gameActive = false;

start.addEventListener("click", () => {
    start.textContent = "Reset Game";
    text.textContent = "Player 1's turn";
    player1 = true;
    gameActive = true;
        cells.forEach((cell) => {
            cell.textContent = "";
        });
});

cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        if (gameActive) {
            playMove(cell);
        }
    });
});

function playMove(cell) {
    if (cell.textContent == "") {
        if (player1) {
            console.log("player 1");
            cell.innerHTML = `<p id="inner-text">X</p>`;
            text.textContent = "Player 2's turn";
        } else {
            console.log("player 2");
            cell.innerHTML = `<p id="inner-text">O</p>`;
            text.textContent = "Player 1's turn";
        }
    }
    player1 = !player1;
}

function checkWinner() {
    
}