//Name: andrei Bila
//Date Created: 30.1.2021
//Most Recent Version:

// Variables:
var luckySevensGame = document.forms["luckySevensGame"];
var startBet = document.getElementById("startingBet");
var results = document.getElementById("results");
var resetButton = document.getElementById("replayButton");
var playButton = document.getElementById("playButton");

//Functions:

// function to simulate a 6 sided die:
function dieSix(){
  return Math.ceil(Math.random() * 6);
}

//function to play the lucky sevens game:
function luckySevens(){

  luckySevensGame.className = "needs-validation";
  if (!luckySevensGame.checkValidity()) {
      luckySevensGame.className = "was-validated";
      return false;
  }

  var money = parseInt(startBet.value,10);
  var currentRoll = 0;
  var highestWin = 0;
  var highestRoll = 0;

  //while loop to play the game:
  while(money>0){
    currentRoll++;
    var roll1=dieSix();
    var roll2=dieSix();
    var totalRoll = roll1 + roll2;

    if(totalRoll == 7){
      money = money+4;
      if (money>highestWin){
        highestWin = money;
        highestRoll = currentRoll;
      }
    }else{
      money = money-1;
    }
  }

  //updating the results table :
  document.getElementById("resultsTableStartBet").innerText =parseInt(startBet.value,10);
  document.getElementById("resultsTableRolls").innerText =currentRoll;
  document.getElementById("resultsTableWin").innerText =highestWin;
  document.getElementById("resultsTableWinRolls").innerText =highestRoll;

  //projecting the results table and the reset button:
  results.style.display = "block";
  resetButton.style.display = "block";
  playButton.style.display = "none";
  return false;
}

function resetView(){
  luckySevensGame.className = "needs-validation";
  results.style.display = "none";
  resetButton.style.display = "none";
  playButton.style.display = "block";
}
