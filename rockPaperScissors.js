const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "scissors" ||
    userInput === "paper"
  ) {
    return userInput;
  } else {
    console.log("ERROR");
  }
};

const getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "scissors";
  } else if (choice === 1) {
    return "paper";
  } else {
    return "rock";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "The game was a tie";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer wins";
    } else {
      return "The user wins";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer wins";
    } else {
      return "The user wins";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer wins";
    } else {
      return "The user wins";
    }
  }
};

const playGame = () => {
  let userChoice = getUserChoice("Rock");
  console.log(userChoice);
  let computerChoice = getComputerChoice();
  console.log(computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
