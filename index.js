let userScore = 0;
let CompScore = 0;

const choices = document.querySelectorAll(".choices");
const msg = document.querySelector("#msg");
const Compserpara = document.querySelector("#comp");
const userserpara = document.querySelector("#user");


const genrateCompChoice = ()=>{
 let option = ["rock","paper","scissors"];
 let randomidx = Math.floor(Math.random()*3);
 return option[randomidx];
}

const drawgame=()=>{
    console.log("game was draw");
    msg.innerText = "Game Was Draw. play again.";
    msg.style.backgroundColor = "#081b31"
}

const playgame = (userChoice) =>{
    console.log("user choice  =",userChoice);
    // genrating computer choice
    const compChoice = genrateCompChoice();
    console.log("comp Choice =" , compChoice);
    if(userChoice === compChoice){
        //draw game
        drawgame();



    }else{
        let userWin = true;

        if(userChoice === "rock"){
            //scissor,paper
          userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            // scissor,rock
            userWin = compChoice === "scissor" ? false : true;
        }else{
            // paper , rock
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}

choices.forEach((choice)=>{
 choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id")
    playgame(userChoice)
 })
})  



const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
        userScore++;
        userserpara.innerText = userScore;
        

    }else{
        msg.innerText = `You lost! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red"
        CompScore++;
        Compserpara.innerText = CompScore;

    }
}