//rock paper scissors
//start round
//get Computer choice
//get player choice
//compair and give winner point
//restart round
//after 5 rounds winner is with most point

let playerPoints = 0;
let computerPoints = 0;

function getPlayerChoice(){
    let PICK = prompt("Choose: Rock, Paper, Scissors", "paper")
    PICK = PICK.toLowerCase()
    if(PICK !== "rock" && PICK !== "scissors" && PICK !== "paper"){
        console.log("You cannot choose " + PICK);
        return getPlayerChoice()
    }
    else{
        return PICK;
    }
}

function getComputerChoice(){
    const PICKS = ["rock", "paper", "scissors"];
    const computerSelection = Math.floor(Math.random() * PICKS.length);
    return PICKS[computerSelection];
}

function playRound(computerSelection, playerSelection){
    //console.log("The Computer chose: " + computerSelection);
    //console.log("You chose: " + playerSelection);
    if(playerSelection === computerSelection){
        console.log("It's a draw")
    }else if(playerSelection === "rock" && computerSelection === "scissor" 
    || playerSelection === "paper" && computerSelection === "rock" 
    || playerSelection === "scissors" && computerSelection === "paper"){
        console.log("You Win! "+playerSelection+" beats " + computerSelection)
        givePoints(true);
    }else {
        console.log("You lose! " + computerChoice + " beats " + playerSelection)
        givePoints(false);
    }
}

function givePoints(playerWins){
    if(playerWins){
        playerPoints++
    }else{computerPoints++}
}

function getRounds(){
    rounds = prompt("How many rounds do you wanna play? 1 <-> 20", "3");
    if(rounds >= 1 || rounds <= 20){
        console.log("Is a integer");
        return rounds;
    }
    else{
        console.log("it is not a integer!");
        return getRounds();
    }
}

function playGame(){
    let rounds = getRounds();
    for(let i = 0; i < rounds; i++){
        computerChoice = getComputerChoice();
        playerChoice = getPlayerChoice();
        playRound(computerChoice, playerChoice);
    }
    console.log("playerPoints: " +playerPoints+" Computer Points: "+ computerPoints)
    if(playerPoints === computerPoints){
        console.log("its a tie");
    }else if(playerPoints > computerPoints){
        console.log("You Win!")
    }else{
        console.log("You lose!")
    }
}

let computerChoice;
let playerChoice;

playGame()