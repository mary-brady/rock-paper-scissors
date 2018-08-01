let choices = ['rock', 'paper', 'scissors']

function play(playerChoice) {
    var computerChoice = makeChoice();
    if (computerChoice == playerChoice){
        return window.alert("Computer chose " + computerChoice + ", it's a tie!")
    }
    else if (computerChoice === 'rock') {
        if (playerChoice === 'paper') {
            return window.alert("Computer chose " + computerChoice +  ", you win!")
        }
        else {
            return window.alert("Computer chose " + computerChoice +  ", you lose!")
        }
        //if player chose paper
            //player wins
        //else 
            //player loses

    } else if (computerChoice == 'paper') {
            if (playerChoice == 'scissors') {
                return window.alert("Computer chose " + computerChoice + ", you win!")

            } else {
                return window.alert("Computer chose " + computerChoice + ", you lose!")
            }
        //if player chose scissors
            //player win
        //else
            //player lose
    } else {
        if (playerChoice == 'rock') {
            return window.alert("Computer Chose " + computerChoice + ", you win!")
        }
        else {
            return window.alert("Computer Chose " + computerChoice + ", you lose!")
        }
        //if player chose rock
            //player win
        //else 
             //player lose
}
}


function makeChoice() {
    return choices[Math.floor(Math.random() * Math.floor(2))];
} 