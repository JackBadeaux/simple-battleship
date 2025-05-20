//! varibales
const squares = document.querySelectorAll(".grid-square");
const correctIndex = Math.floor(Math.random() * 9);
const livesDisplay = document.getElementById("lives");
let gameOver = false;
let remainingBombs = 3;
//! game logic
squares.forEach((square, index) => {
    square.addEventListener("click", function () {
        if (gameOver || square.classList.contains("miss") || square.classList.contains("sunk")) return;
        remainingBombs--;
        if (index === correctIndex) {
            square.classList.add("correct", "sunk");
            gameOver = true;
            setTimeout(() => {
                alert("Good Job! You have won")
                location.reload();
            }, 100);
            return
        } else {
            square.classList.add("incorrect", "miss");

            livesDisplay.textContent = `Bombs: ${remainingBombs}`
        }
        if (remainingBombs <= 0) {
            gameOver = true
            setTimeout(() => {
                alert("Game Over out of bombs")
                location.reload();
            }, 100);

        }
    });
});
//! reset logic
document.getElementById("resetButton").addEventListener("click", function () {
    location.reload();
})

