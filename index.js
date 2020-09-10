//console.log("hello world");
let randomNumber;
let scorePlayer = 0;
let scoreComputer = 0;
let playerChoice= "";
let computerChoice = "";

document.getElementById("rock").addEventListener("click", function(){
    console.log("player picks rock");
    playerChoice = "rock";

})

document.getElementById("paper").addEventListener("click", function(){
    console.log("player picks paper");
    playerChoice = "paper";
})

scissors = document.getElementById("scissor").addEventListener("click", function(){
    console.log("player picks scissors");
    playerChoice = "scissors";
})


 document.getElementById("computerChoice").addEventListener("click", function(){
     randomNumber = Math.floor(Math.random()*3)+1;
    if (randomNumber==1){
        computerChoice = "rock";
        console.log(" computer picks rock");
    }
    else if(randomNumber==2){
         computerChoice = "paper";
        console.log(" computer picks paper");

    }
    else if(randomNumber==3){
        let computerChoice ="scissors";
        console.log(" computer picks scissors");
    }
})

if


console.log(scoreComputer);
 console.log(scorePlayer);

