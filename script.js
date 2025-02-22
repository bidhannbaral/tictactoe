const cells = document.querySelectorAll(".cell");
const start = document.querySelector(".start");
const text = document.querySelector(".text");
let player1 = true;
let gameActive = false;
let foundWinner = false;
let x = [];
let o = [];
let numCellsClicked = 0;
let winArray = [["1-1", "1-2", "1-3"], ["1-1", "2-1", "3-1"], ["1-1", "2-2", "3-3"],
                ["2-1", "2-2", "2-3"], ["3-1", "3-2", "3-3"], ["1-2", "2-2", "3-2"],
                ["1-3", "2-3", "3-3"], ["1-3", "2-2", "3-1"]];

start.addEventListener("click", () => {
    start.textContent = "Reset Game";
    text.textContent = "Player 1's turn";
    player1 = true;
    gameActive = true;
    x = [];
    o = [];
    numCellsClicked = 0;
    foundWinner = false;
        cells.forEach((cell) => {
            cell.textContent = "";
        });
});

cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        if (gameActive) {
            playMove(cell, cell.id);
        }
    });
});

function playMove(cell, id) {
    if (cell.textContent == "") {
        if (player1) {
            console.log("player 1");
            cell.innerHTML = `<p id="inner-text">X</p>`;
            text.textContent = "Player 2's turn";
            x.push(id);
            numCellsClicked++;
            checkWinner();
        } else {
            console.log("player 2");
            cell.innerHTML = `<p id="inner-text">O</p>`;
            text.textContent = "Player 1's turn";
            o.push(id);
            numCellsClicked++;
            checkWinner();
        }
    }
    player1 = !player1;
}

function checkWinner() {
    for (let subWinArray of winArray) {
        let xCounter = 0;
        let oCounter = 0;

        for (let cell of subWinArray) {
            if (x.includes(cell)) {
                xCounter++;
            }

            if (o.includes(cell)) {
                oCounter++;
            }
        }

        if (xCounter == 3) {
            text.textContent = "Player 1 wins!";
            gameActive = false;
            foundWinner = true;
            return;
        }

        if (oCounter == 3) {
            text.textContent = "Player 2 wins!";
            gameActive = false;
            foundWinner = true;
            return;
        }
    }

    if (foundWinner == false && numCellsClicked == 9) {
        text.textContent = "It's a draw!";
        gameActive = false;
    }
}
