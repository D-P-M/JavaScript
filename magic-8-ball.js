userName = 'Alice';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

const userQuestion = 'What should I do today?';
console.log(`${userName} asks, ${userQuestion}`);

const randomNumber = Math.floor(Math.random() *8);

let eightBall = '';
  switch (randomNumber) {
  case 0:
    eightBall = 'See a movie';
    break;
  case 1:
    eightBall = 'Go shopping';
    break;
  case 2:
    eightBall = 'Play an instrument';
    break;
  case 3:
    eightBall = 'Read a book';
    break;
  case 4:
    eightBall = 'Go to the beach';
    break;
  case 5:
    eightBall = 'Call a friend';
    break;
  case 6:
    eightBall = 'Practice coding';
    break;
  case 7:
    eightBall = 'Study a new language';
    break;
  case 8:
    eightBall = 'Be awesome!';
    break;
}

console.log(`The ball foretells: ${eightBall}`);


