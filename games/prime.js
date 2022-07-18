import readlineSync from 'readline-sync';
import { userName } from '../src/cli.js';

const foo = () => {
  for (let j = 0; j < 3; j += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    let prime = true;

    for (let i = randomNumber - 1; i > 1; i -= 1) {
      if (randomNumber % i === 0) {
        prime = false;
        break;
      }
    }

    const answer = readlineSync.question(`Answer "yes" if given number is prime. Otherwise answer "no".\nQuestion: ${randomNumber}\nYour answer: `);
    if (answer === 'no' && prime === true) {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
      break;
    } else if (answer === 'yes' && prime === false) {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
      break;
    } else if (answer !== 'yes' && answer !== 'no') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
      break;
    } else {
      console.log('Correct!');
    }
    if (j === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
export default foo;
