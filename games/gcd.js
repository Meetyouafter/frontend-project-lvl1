import readlineSync from 'readline-sync';
import { userName } from '../src/cli.js';

const foo = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = Math.floor(Math.random() * 100);
    const randomNumber2 = Math.floor(Math.random() * 100);

    const answer = i === 0 ? readlineSync.question(`Find the greatest common divisor of given numbers.\nQuestion: ${randomNumber1} ${randomNumber2}\nYour answer: `) : readlineSync.question(`Question: ${randomNumber1} ${randomNumber2}\nYour answer: `);

    const qsd = (firstNumber, secondNumber) => {
      if (firstNumber == 0 || secondNumber == 0) {
        return 0;
      }

      while (secondNumber != 0) {
        if (firstNumber > secondNumber) {
          firstNumber -= secondNumber;
        } else {
          secondNumber -= firstNumber;
        }
      }
      return firstNumber;
    };

    if (answer != qsd(randomNumber1, randomNumber2)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${qsd(randomNumber1, randomNumber2)}'.\nLet's try again, ${userName}!`);
      break;
    } else {
      console.log('Correct!');
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
export default foo;
