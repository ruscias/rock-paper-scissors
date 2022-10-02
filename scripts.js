// Play RPS
// Initialize program
// Define class user
class User { 
  constructor(isHuman) { 
  this.isHuman = isHuman; 
  this.wins = 0; 
  } 
} 

// define function to getRounds from user
function getRounds() { 
  let numberOfRounds = 0; 
  let keepGoing = true; 
  while (keepGoing) { 
  userRoundsString = prompt('Please indicate the number of rounds desired: '); 
  numberOfRounds = parseInt(userRoundsString); 
  if (isNaN(numberOfRounds) === false && numberOfRounds > 0 ) { 
      keepGoing = false; 
    } 
  } 
  return numberOfRounds;
}

// define function to create a new user for game
function createNewUser() {
  let userIsHuman = false; 
  let keepGoing = true; 
  // prompt user to indicate whether or not userOne is human using y or n ONLY 
  while (keepGoing) {
    userIsHuman = prompt('Will player one be a human? Please enter ONLY the single lowercase letter y for YES or the single lowercase letter n for NO: '); 
    if (userIsHuman === 'y' || userIsHuman === 'n') { 
      keepGoing = false; 
    } 
  }  
  
  // check if user should be human or not and create new user instance 
  if (userIsHuman === 'y') { 
    return new User(true); 
  } else { 
    return new User(false); 
  }
}

// define function getRandomChoice to return a whole positive number between 0 and 2 

// define function getChoice() to get input for round
//   if user is human 
//     prompt for choice of rock, paper, or scissors and require they give me one of these 
//     map user string to int rock = 0, paper = 1, scissors = 2
//   else 
//     get random number with getRandomChoice

// define function getRoundWinner(userOneChoice,userTwoChoice) to identifty round winner

// define function updateUserWins(roundWinner) to update the total wins of the user who won the round

// define function playRound() 


// We need to have a way to indicate whether the user is supposed to be a human or the computer - done
// We need to have a way to specify rounds - done
// We need to keep track of scores across rounds - done by User class I believe
// We need to have a way to initiate a new round - this will be a for loop
// define a function getRandomChoice to return a whole number between 0 and 2.
// We need to be able to play a round
// A round will happen as follows:
//   getChoice() from userOne. Store as number in value userOneChoice 
//   getChoice from userTwo. Store as number in value userTwoChoice
//   determine who won with function getRoundWinner(). return will be store in a number variable roundWinner 
//   increment the wins property for the user who won with updateUserWins()
//
// We need to get the choice of user one - done
// We need to get the choice of user two - done
// We need to have a way to generate a random choice if one or both users are the computer - done
// We need to have a way to determine a winner within a round - done
// If we are playing multiple games (best x ot of 5) we need to keep track of the winners across games - done 

/*
function main() {
  let numberOfRounds = getRounds(); 
  console.log(numberOfRounds); 
  let userOne = new User(true); 
  console.log(userOne); 
  let userTwo = new User(false); 
  console.log(userTwo);
  
  for (let i = 0 ; i < numberOfRounds ; i++ ) {
    playRound();
  }
  
  getWinnerOverall();

} 

main();
*/