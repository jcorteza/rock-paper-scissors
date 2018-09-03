/* declare variables */
var getRockDiv = document.getElementById("rockDiv");
var getPaperDiv = document.getElementById("paperDiv");
var getScissorsDiv = document.getElementById("scissorsDiv");
var getUserText = document.getElementById("userShootText");
var getUserImg = document.getElementById("userShootImg");
var getCompText = document.getElementById("compShootText");
var getCompImg = document.getElementById("compShootImg");
var getChoicesDiv = document.getElementById("choicesDiv");
var getOutcomeText = document.getElementById("gameOutcome");
var getOutcomeDiv = document.getElementById("outcomeDiv");
var getUserScore = document.getElementById("userScore");
var getCompScore = document.getElementById("compScore");
var gameChoices = ["rock", "paper", "scissors"];
var compChoice;
var userChoice;

/* computer selects random choice */
function computerChooses() {
    var choice = Math.floor(Math.random() * Math.floor(gameChoices.length));
    switch (choice) {
        case 0:
            choice = "rock";
            getCompText.textContent = choice;
            getCompImg.setAttribute("src", "./assets/images/rock.jpg");
            getCompImg.setAttribute("alt", "a rock");
            return choice;
        case 1:
            choice = "paper";
            getCompText.textContent = choice;
            getCompImg.setAttribute("src", "./assets/images/paper.jpg");
            getCompImg.setAttribute("alt", "a sheet of crumpled paper");
            return choice;
        case 2:
            choice = "scissors";
            getCompText.textContent = choice;
            getCompImg.setAttribute("src", "./assets/images/scissors.jpg");
            getCompImg.setAttribute("alt", "a pair of metal scissors");
            return choice;
    }
}

/* function to update user shootDiv to reflect user's choice in the game */
function updateUserDiv(userChoice) {
    switch(userChoice) {
        case "rock":
            getUserText.textContent = "rock";
            getUserImg.setAttribute("src", "./assets/images/rock.jpg");
            getUserImg.setAttribute("alt", "a rock");
            break;
        case "paper":
            getUserText.textContent = "paper";
            getUserImg.setAttribute("src", "./assets/images/paper.jpg");
            getUserImg.setAttribute("alt", "a sheet of crumpled paper");
            break;
        case "scissors":
            getUserText.textContent = "scissors";
            getUserImg.setAttribute("src", "./assets/images/scissors.jpg");
            getUserImg.setAttribute("alt", "a pair of metal scissors");
            break;
    }
}

/* function that adds 1 to the users score */
function userWon(getUserScore){
    var score = parseInt(getUserScore.innerHTML);
    score = score + 1;
    getUserScore.innerHTML = score;
}

/* function that adds 1 to the computers score */
function compWon(getCompScore){
    var score = parseInt(getCompScore.innerHTML);
    score = score + 1;
    getCompScore.innerHTML = score;
}

/* function that figures out who won the round and updates the web page to let the winner know */
function whoWon(userChoice, compChoice, getOutcomeDiv) {
    if (userChoice === compChoice) {
        //console.log("tie");
        getOutcomeText.innerText = "both tied";
        getOutcomeDiv.setAttribute("class", "col-md border border-dark pt-2 display-4");
        return;
    }
    else if (userChoice === "rock") {
        if (compChoice === "scissors") {
            //console.log("user won");
            getOutcomeText.innerText = "won";
            getOutcomeDiv.setAttribute("class", "col-md border border-dark pt-2 display-4");
            userWon(getUserScore);
            return;
        }
        else {
            //console.log("user lost");
            getOutcomeText.innerText = "lost";
            getOutcomeDiv.setAttribute("class", "col-md border border-dark pt-2 display-4");
            compWon(getCompScore);
            return;
        }
    }
    else if(userChoice === "paper") {
        if (compChoice === "rock") {
            //console.log("user won");
            getOutcomeText.innerText = "won";
            getOutcomeDiv.setAttribute("class", "col-md border border-dark pt-2 display-4");
            userWon(getUserScore);
            return;
        }
        else {
            //console.log("user lost");
            getOutcomeText.innerText = "lost";
            getOutcomeDiv.setAttribute("class", "col-md border border-dark pt-2 display-4");
            compWon(getCompScore);
            return;
        }
    }
    else if (userChoice === "scissors") {
        if (compChoice === "paper") {
            //console.log("user won");
            getOutcomeText.innerText = "won";
            getOutcomeDiv.setAttribute("class", "col-md border border-dark pt-2 display-4");
            userWon(getUserScore);
            return;
        }
        else {
            //console.log("user lost");
            getOutcomeText.innerText = "lost";
            getOutcomeDiv.setAttribute("class", "col-md border border-dark pt-2 display-4");
            compWon(getCompScore);
            return;
        }
    }
}

/* on load event */
window.onload = function() {

/* on click events for the game to function*/
getRockDiv.onclick = function() {
    userChoice = "rock";
    updateUserDiv(userChoice);
    compChoice = computerChooses();
    getChoicesDiv.setAttribute("class", "row mb-3");
    whoWon(userChoice, compChoice, getOutcomeDiv);
}
getPaperDiv.onclick = function() {
    userChoice = "paper";
    updateUserDiv(userChoice);
    compChoice = computerChooses();
    getChoicesDiv.setAttribute("class", "row mb-3");
    whoWon(userChoice, compChoice, getOutcomeDiv);
}
getScissorsDiv.onclick = function() {
    userChoice = "scissors";
    updateUserDiv(userChoice);
    compChoice = computerChooses();
    getChoicesDiv.setAttribute("class", "row mb-3");
    whoWon(userChoice, compChoice, getOutcomeDiv);
}
}
