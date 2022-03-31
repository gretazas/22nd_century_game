function winTheGame(){
document.getElementById('winner').innerHTML = ``
document.getElementById('winner').innerHTML = `
    <h1>CONGRADULATIONS!</h1>
    <p>You just have won the whole game</p>
    <h6>You are the winner!</h6>
`
}
document.getElementById('button').addEventListener('click', winTheGame)