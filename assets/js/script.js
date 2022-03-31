function winTheGame(){
document.getElementById('winner').innerHTML = ``
document.getElementById('winner').innerHTML = `
    <h1>CONGRATULATIONS!</h1>
    <p>You have just won the whole game.</p>
    <h6>You are the winner!</h6>
 
`
document.getElementById('button').remove();

document.body.innerHTML += `
<div">
<p style="text-align:center; font-size:16px; color:red">Happy April Fool's Day</p>
</div>
`
startConfetti();
}

document.getElementById('button').addEventListener('click', winTheGame)