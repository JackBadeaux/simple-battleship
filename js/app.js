//! varibales
const squares = document.querySelectorAll(".grid-square");
const correctIndex = Math.floor(Math.random() * 9);
let gameOver = false; 
//! game logic
squares.forEach((square, index) => {
    square.addEventListener("click", function () {
        if (gameOver) return; 

        if (index === correctIndex) {
            square.classList.add("correct", "sunk");
            gameOver = true;
            setTimeout(() =>{
            }, 100);

        } else {
            square.classList.add("incorrect", "miss");
        }
    });
});

//! reset logic
document.getElementById("resetButton").addEventListener("click", function(){
location.reload();
})

