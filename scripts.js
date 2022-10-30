// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');
const userOneDisplay = document.getElementById('user-one-selection');
const userTwoDisplay = document.getElementById('user-two-selection');

let activeUser = 0;

// we use the .forEach method to iterate through each button
buttons.forEach( (button) => {
    button.addEventListener('click', updateUserInput)
  }
);


function updateUserInput() {
  console.log(activeUser);
  if (activeUser === 0) {
    userOneDisplay.innerText = this.id;
    userTwoDisplay.innerText = "";
    activeUser = 1;
  } else {
    userOneDisplay.innerText = ""
    userTwoDisplay.innerText = this.id;
    activeUser = 0;
  }
}