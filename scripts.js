class User { 
  constructor(isHuman) { 
  this.isHuman = isHuman; 
  this.wins = 0; 
  } 
} 

const userOne = new User(true);
const userTwo = new User(false);

console.log(userOne);
console.log(userTwo);