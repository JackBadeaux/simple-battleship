const squares = document.querySelectorAll(".grid-square")
const correctIndex = Math.floor(Math.random() * 9 )
squares.forEach((square,index) => {
    square.addEventListener("click",function(){
       if (index === correctIndex) {
         square.classList.add("correct")
       } else {
        square.classList.add("incorrect")
       }
    })
});



