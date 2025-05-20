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
              showCustomAlert("You Won!","Press reset to play again.")
         
            }, 100);
            return
        } else {
            square.classList.add("incorrect", "miss");

            livesDisplay.textContent = `Bombs: ${remainingBombs}`
        }
        if (remainingBombs <= 0) {
            gameOver = true
            setTimeout(() => {
                showCustomAlert("Game Over!","You ran out of bombs press reset to play again.")
        
            }, 100);

        }
    });
});
//! reset logic
document.getElementById("resetButton").addEventListener("click", function () {
    location.reload();
})
//! custom alert logic
function showCustomAlert(title, text, onClose = null) {
  const customAlert = document.getElementById("customAlert");
  const customAlertTitle = document.getElementById("customAlertTitle");
  const customAlertText = document.getElementById("customAlertText");
  const closeBtn = document.getElementById("customAlertClose");

  customAlertTitle.textContent = title;
  customAlertText.textContent = text;

  customAlert.classList.remove("hidden");

  closeBtn.onclick = () => {
    customAlert.classList.add("hidden");
    if (onClose) onClose(); 
  };
}
