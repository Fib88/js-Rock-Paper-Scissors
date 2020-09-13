let randomNumber;
let scorePlayer = 0;
let scoreComputer = 0;
let playerChoice= "";
let computerChoice = "";

document.getElementById("rock").addEventListener("click", function(){
    console.log("player picks rock");
    playerChoice = "rock";
    document.getElementById("choice-player").innerText = "Trainer picks " + playerChoice;
    document.getElementById("pokéChangeLeft").src = "https://raw.githubusercontent.com/Fib88/js-Rock-Paper-Scissors/master/images/geodude.png";
})

document.getElementById("paper").addEventListener("click", function(){
    console.log("player picks paper");
    playerChoice = "paper";
    document.getElementById("choice-player").innerText = "Trainer picks " + playerChoice;
    document.getElementById("pokéChangeLeft").src ="https://raw.githubusercontent.com/Fib88/js-Rock-Paper-Scissors/master/images/bellsprout.png";
})

scissors = document.getElementById("scissors").addEventListener("click", function(){
    console.log("player picks scissors");
    playerChoice = "scissors";
    document.getElementById("choice-player").innerText = "Trainer picks " + playerChoice;
    document.getElementById("pokéChangeLeft").src = "https://raw.githubusercontent.com/Fib88/js-Rock-Paper-Scissors/master/images/krabby.png";
})

 document.getElementById("computerChoice").addEventListener("click", function(){
     randomNumber = Math.floor(Math.random()*3)+1;
    if (randomNumber==1){
        computerChoice = "rock";
        document.getElementById("choice-computer").innerText = "Rival picks " + computerChoice;
        console.log(" computer picks rock");
        document.getElementById("pokéChangeRight").src = "https://raw.githubusercontent.com/Fib88/js-Rock-Paper-Scissors/master/images/geodude.png";
    }
    else if(randomNumber==2){
         computerChoice = "paper";
        document.getElementById("choice-computer").innerText = "Rival picks " + computerChoice;
        console.log(" computer picks paper");
        document.getElementById("pokéChangeRight").src = "https://raw.githubusercontent.com/Fib88/js-Rock-Paper-Scissors/master/images/bellsprout.png";
    }
    else if(randomNumber==3){
        computerChoice ="scissors";
        document.getElementById("choice-computer").innerText = "Rival picks " + computerChoice;
        console.log(" computer picks scissors");
        document.getElementById("pokéChangeRight").src = "https://raw.githubusercontent.com/Fib88/js-Rock-Paper-Scissors/master/images/krabby.png";
    }

if(computerChoice==playerChoice){
    console.log("Its a tie")
    countingWins();
}
else if(playerChoice=="rock" && computerChoice == "paper"){
    console.log("computer wins");
    scoreComputer++;
    countingWins();
}
else if(playerChoice=="rock" && computerChoice== "scissors"){
    console.log("player wins");
    scorePlayer++;
    countingWins();
}
else if(playerChoice=="paper" && computerChoice=="rock"){
    console.log("player wins");
    scorePlayer++
    countingWins();
}
else if(playerChoice=="paper" && computerChoice=="scissors"){
    console.log("computer wins");
    scoreComputer++
    countingWins();
}
else if(playerChoice=="scissors" && computerChoice=="rock"){
    console.log("computer wins");
    scoreComputer++
    countingWins();
}
else if(playerChoice=="scissors" && computerChoice=="paper"){
    console.log("player wins");
    scorePlayer++
    countingWins();
}
 })
function countingWins() {
    document.getElementById("target-comp").innerText = "Rival has " + scoreComputer + " wins";
    document.getElementById("target-you").innerText = "Trainer has " + scorePlayer + " wins";
    document.getElementById("combatScoreLeft").innerText = scorePlayer;
    document.getElementById("combatScoreRight").innerText = scoreComputer;
}
document.getElementById("reset").addEventListener("click", function(){
    scorePlayer=0;
    scoreComputer=0;
    document.getElementById("choice-player").innerText = "Trainer has picked...";
    document.getElementById("choice-computer").innerText = "Rival has picked...";
    document.getElementById("target-you").innerText = "Trainer score";
    document.getElementById("target-comp").innerText = "Rival score";
    console.log("reset scores");
    document.getElementById("pokéChangeLeft").src = "https://raw.githubusercontent.com/Fib88/js-Rock-Paper-Scissors/master/images/pokeball_PNG24.png";
    document.getElementById("pokéChangeRight").src = "https://raw.githubusercontent.com/Fib88/js-Rock-Paper-Scissors/master/images/pokeball_PNG24.png";
    document.getElementById("combatScoreLeft").innerHTML = scorePlayer;
    document.getElementById("combatScoreRight").innerHTML = scoreComputer;
})









