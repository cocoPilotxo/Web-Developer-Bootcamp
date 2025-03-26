const btnPlayerOne = document.querySelector('#player1')
const btnPlayerTwo = document.querySelector('#player2')
const btnReset = document.querySelector('#reset')
const scoreDisplay = document.querySelector('#score')
const scoreLimitSelect = document.querySelector('#scoreLimit')

let scorePlayerOne = 0
let scorePlayerTwo = 0

btnPlayerOne.addEventListener('click', () =>{
    scorePlayerOne++
    updateScore()
    stopGame()
})

btnPlayerTwo.addEventListener('click', () =>{
    scorePlayerTwo++
    updateScore()
    stopGame()
})

btnReset.addEventListener('click', ()=>{
    scorePlayerOne = 0
    scorePlayerTwo = 0
    updateScore()

    btnPlayerOne.disabled = false
    btnPlayerTwo.disabled = false
})

function stopGame(){
    if(scorePlayerOne == scoreLimitSelect.value){
        scoreDisplay.innerHTML = `<span style="color: green">${scorePlayerOne}</span> 対 <span style="color: red">${scorePlayerTwo}</span>`
        btnPlayerOne.disabled = true
        btnPlayerTwo.disabled = true
    } else if(scorePlayerTwo == scoreLimitSelect.value){
        scoreDisplay.innerHTML = `<span style="color: red">${scorePlayerOne}</span> 対 <span style="color: green">${scorePlayerTwo}</span>`
        btnPlayerOne.disabled = true
        btnPlayerTwo.disabled = true
    }
}

function updateScore(){
    scoreDisplay.textContent = `${scorePlayerOne} 対 ${scorePlayerTwo}`
}