function getComputerChoice(){
    let choicec = Math.floor(Math.random() * 3) + 1;

    if(choicec === 1){
        resultc = "rock"
    }else if(choicec === 2){
        resultc = "paper"
    }else if(choicec === 3){
        resultc = "scissors"
    }

    return resultc;
}

function getHumanChoice(){
    let choicep = prompt("Input your choice (rock, paper, or scissors)").toLowerCase()

    return choicep
}

    let humanScore = 0
    let computerScore = 0

function playRound(){    
    let C = getComputerChoice()
    let H = getHumanChoice()

    console.log(C)
    console.log(H)

    if(C === "rock" && H === "paper"){
        console.log("You win! Paper beats rock")

        humanScore++
    }else if(C === "scissors" && H === "rock"){
        console.log("You win! Rock beats scissors")

        humanScore++
    }else if(C === "paper" && H === "scissors"){
        console.log("You win! Scissors beats Paper")

        humanScore++
    }else if(C === "paper" && H === "rock"){
        console.log("You lose! Paper beats rock")

        computerScore++
    }else if(C === "rock" && H === "scissors"){
        console.log("You lose! Rock beats Scissors")

        computerScore++
    }else if(C === "scissors" && H === "paper"){
        console.log("You lose! Scissors beats paper")

        computerScore++
    }else if(C === H){
        console.log("Draw")
    }else{
        console.log("Invalid")
    }
}

function playGame(){
    for(let i = 1; i <= 5; i ++){
        playRound()

        console.log("You ", humanScore, " - ", computerScore, "CPU")
    }

    if (humanScore > computerScore) {
        console.log("🎉 You won the game!");
    } else if (humanScore < computerScore) {
        console.log("💻 CPU wins the game!");
    } else {
        console.log("🤝 It's a tie!");
    }
}

playGame();