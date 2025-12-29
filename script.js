const homePoint = document.querySelectorAll(".home-point")
const homeScores = document.querySelector("#home-scores")
const guestPoint = document.querySelectorAll(".guest-point")
const guestScores = document.querySelector("#guest-scores")
const newGameBtn = document.querySelector(".new-game-btn")
const homeLeader = document.querySelector(".home-leader")
const guestLeader = document.querySelector(".guest-leader")

homePoint.forEach(button => {
    button.addEventListener("click", function (event) {
        const point = Number(event.target.value);
        homeScores.textContent = Number(homeScores.textContent) + point
        updateHighlight()    
    })
})


guestPoint.forEach(button => {
    button.addEventListener("click", function (event) {
        const point = Number(event.target.value);
        guestScores.textContent = Number(guestScores.textContent) + point
        updateHighlight()        
    })
})

newGameBtn.addEventListener("click", function() {
    guestScores.textContent=0
    homeScores.textContent=0
    updateHighlight()
})

console.log(Number(homeScores.textContent), Number(guestLeader.textContent))

function updateHighlight() {

    homeLeader.style.backgroundColor= ""
    guestLeader.style.backgroundColor=""


    if(Number(homeScores.textContent) > Number(guestLeader.textContent)) {
        homeLeader.style.backgroundColor="yellowgreen"
    } else if (Number(guestLeader.textContent) > Number(homeLeader.textContent)) {
        guestLeader.style.backgroundColor="yellowgreen"
    }
}
