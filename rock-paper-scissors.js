
/*
Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there’s a tie, then the game ends in a draw.
If the player draws bomb, they automatically win!
*/

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper'|| userInput === 'scissors' || userInput === 'bomb'){
      return userInput;
    } else {
      console.log("Error")
    }
  };
  
  // console.log(getUserChoice('paper'));
  // console.log(getUserChoice('fork'));
  
  
  const getComputerChoice = () =>{
    const randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber){
      case 0:
      return 'rock';
      case 1:
      return 'paper';
      case 2:
      return 'scissors';
    }
  };
  
  // console.log(getComputerChoice());
  // console.log(getComputerChoice());
  // console.log(getComputerChoice());
  
  const determineWinner = (userChoice, computerChoice) =>{
    if (userChoice === computerChoice){
      return 'This game is a tie!';
    }
      if (userChoice === 'rock'){
        if(computerChoice === 'paper'){
        return 'Sorry, computer won!'
        } else {
          return 'Congrats! You won!';
        }
      }
  
      if (userChoice === 'paper'){
        if(computerChoice === 'scissors'){
        return 'Sorry, computer won!'
        } else {
          return 'Congrats! You won!';
        }
      }
  
    if (userChoice === 'scissors'){
          if(computerChoice === 'rock'){
          return 'Sorry, computer won!'
          } else {
            return 'Congrats! You won!';
          }
        }
  
    if (userChoice === 'bomb'){
      return 'Congrats! You bombed the computer!!!';
    }
        
    };
  
    // console.log(determineWinner('rock','scissors'));
    // console.log(determineWinner('scissors','rock'));
    // console.log(determineWinner('paper','paper'));
  
  const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log('You threw: '+ userChoice);
    console.log('The computer threw: '+ computerChoice)
  
    console.log(determineWinner(userChoice, computerChoice))
  }
  
  playGame();
  