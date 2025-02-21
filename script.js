const cells = document.querySelectorAll(".cell");
const start = document.querySelector(".start");
const text = document.querySelector(".text");

start.addEventListener("click", () => {
    startGame();
});

function startGame() {

    
    cells.forEach((cell) => {
        cell.addEventListener("click", () => {
            cell.innerHTML = `<p id="inner-text">X</p>`;
        });
    });
}