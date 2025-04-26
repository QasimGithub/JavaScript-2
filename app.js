let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const genComChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game Draw, Please Try Again!";
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin , userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win!, your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore.innerText = +1;
        
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose!,  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        userScore.innerText = -1;
    }
}
const playGame = (userChoice) => {
    const compChoice = genComChoice();
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice); 
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})