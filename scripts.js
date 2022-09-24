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

//define function to create a new user for game
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

// int main(void) {
//   declare number variable numberOfRounds and call and store output of getRounds()
//   create new User instance userOne
//   create new User instance userTwo
//   
// }

// We need to have a way to indicate whether the user is supposed to be a human or the computer
// We need to have a way to specify rounds
// We need to keep track of scores across rounds
// We need to have a way to initiate a new round
// We need to get the choice of user one
// We need to get the choice of user two
// We need to have a way to generate a random choice if one or both users are the computer
// We need to have a way to determine a winner within a round
// If we are playing multiple games (best x ot of 5) we need to keep track of the winners across games 

