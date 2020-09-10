//console.log("hello world");
let randomNumber;
let scorePlayer = 0;
let scoreComputer = 0;
let playerChoice= "";
let computerChoice = "";

document.getElementById("rock").addEventListener("click", function(){
    console.log("player picks rock");
    playerChoice = "rock";
    document.getElementById("choice-player").innerText = "Player picks " + playerChoice;

})

document.getElementById("paper").addEventListener("click", function(){
    console.log("player picks paper");
    playerChoice = "paper";
    document.getElementById("choice-player").innerText = "Player picks " + playerChoice;
})

scissors = document.getElementById("scissors").addEventListener("click", function(){
    console.log("player picks scissors");
    playerChoice = "scissors";
    document.getElementById("choice-player").innerText = "Player picks " + playerChoice;
})


 document.getElementById("computerChoice").addEventListener("click", function(){
     randomNumber = Math.floor(Math.random()*3)+1;
    if (randomNumber==1){
        computerChoice = "rock";
        document.getElementById("choice-computer").innerText = "Computer picks " + computerChoice;
        console.log(" computer picks rock");
    }
    else if(randomNumber==2){
         computerChoice = "paper";
        document.getElementById("choice-computer").innerText = "Computer picks " + computerChoice;
        console.log(" computer picks paper");

    }
    else if(randomNumber==3){
        computerChoice ="scissors";
        document.getElementById("choice-computer").innerText = "Computer picks " + computerChoice;
        console.log(" computer picks scissors");
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
    //console.log("Computer has " + scoreComputer + " wins");
    //console.log("Player has " + scorePlayer + " wins");

    document.getElementById("target-comp").innerText = "Computer has " + scoreComputer + " wins";
    document.getElementById("target-you").innerText = "Player has " + scorePlayer + " wins";
}
document.getElementById("reset").addEventListener("click", function(){
    scorePlayer=0;
    scoreComputer=0;
    console.log("reset scores");
})




