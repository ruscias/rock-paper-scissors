class User { 
  constructor(isHuman) { 
  this.isHuman = isHuman; 
  this.wins = 0; 
  } 
} 

const userOne = new User(true);
const userTwo = new User(false);

let roundsPlayed = 0;

function getWinner(){
  return 0;
};

//main()


// buttons is a node list. It looks and acts much like an array.
const userSelectionButtons = document.querySelectorAll('button.selection');
const userOneDisplay = document.getElementById('user-one-selection');

userSelectionButtons.forEach( (button) => {
  button.addEventListener('click', playGame)
}
);

function playGame() {
  //backup in case user keeps trying to play
  if (roundsPlayed === 5) {
    return 0;
  }
  
  const userOneRoundSelection = this.id;
  console.log(userOneRoundSelection);
  
  
  
  
  //increment roundsPlayed
  roundsPlayed++;
  //update the div displaying rounds-played
  document.getElementById('rounds-played').innerText = roundsPlayed;
}


//set string variable roundWinner to tie
//set string variable roundComputerChoice to empty

//identify when userOne clicks mark or tom or travis button and capture button clicked


//check if roundsPlayed === 5;
  //if yes, break
//make random choice for userTwo
//map computer choice from number to string and store in roundComputerChoice
//display userTwo choice in userTwo section by updating id of div.selection-computer to mark or tom or travis
//determine winner and record either userOne, userTwo, or tie
// if there was a tie, ignore the round and await new input
  //else increment the roundsPlayed variable
  //update the div#rounds-played to the new value of roundsPlayed
//if userOne had the win, update div#user-one-wins-display 
  //else update div#user-two-wins-display
//check if roundsPlayed === 5 

  //if yes, 
    //display winner 
    //apply game-over class to div#winner

