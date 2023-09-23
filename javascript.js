//rock paper scissors
//start round
//get Computer choice
//get player choice
//compair and give winner point
//restart round
//after 5 rounds winner is with most point

let playerPoints = 0;
let computerPoints = 0;

function Rock(){
console.log("chose rock");
computerChoice = getComputerChoice()
playRound(computerChoice, 'rock');
}

function Paper(){
console.log("chose Paper");
computerChoice = getComputerChoice()
playRound(computerChoice, 'paper');
}

function Scissors(){
console.log("chose Scissors");
computerChoice = getComputerChoice()
playRound(computerChoice, 'scissors');
}

//Old player selection
/*
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
}*/

function getComputerChoice(){
    const PICKS = ["rock", "paper", "scissors"];
    const computerSelection = Math.floor(Math.random() * PICKS.length);
    return PICKS[computerSelection];
}
    const result = document.querySelector('.result-Container'); 
    const draw = document.createElement('h1');
    draw.classList.add('draw');

function playRound(computerSelection, playerSelection){
    //if selections are the same its a draw
    if(playerSelection === computerSelection){
        console.log("It's a draw, You both chose " + playerSelection);
        draw.textContent = "It's a draw, You both chose " + playerSelection;
        result.appendChild(draw);

    }
    //if any of these are true you win
    else if(playerSelection === "rock" && computerSelection === "scissor" 
    || playerSelection === "paper" && computerSelection === "rock" 
    || playerSelection === "scissors" && computerSelection === "paper"){
        console.log("You Win! "+ playerSelection +" beats " + computerSelection);
        draw.textContent = "You win! " + playerSelection +" beats "+ computerSelection;
        result.appendChild(draw);
        //givePoints(true);
    }
    //else you loses
    else {
        console.log("You lose! " + computerSelection + " beats " + computerSelection);
        //givePoints(false);
        draw.textContent = "You lose! " + computerSelection +" beats "+ playerSelection;
        result.appendChild(draw);
    }
}

/* Points system
function givePoints(playerWins){
    if(playerWins){
        playerPoints++
    }else{computerPoints++}
} */

/* Check how many rounds have been played
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
}*/

/* System for the game
function playGame(){
    let rounds = getRounds();
    for(let i = 0; i < rounds; i++){
        computerChoice = getComputerChoice();
        playerChoice = getPlayerChoice();
        
    }
    console.log("playerPoints: " +playerPoints+" Computer Points: "+ computerPoints)
    if(playerPoints === computerPoints){
        console.log("its a tie");
    }else if(playerPoints > computerPoints){
        console.log("You Win!")
    }else{
        console.log("You lose!")
    }
    playGame();
}*/

//let computerChoice;
//let playerChoice;