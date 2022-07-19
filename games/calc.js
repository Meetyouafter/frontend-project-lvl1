import readlineSync from 'readline-sync';
import { userName } from '../src/cli.js';

const foo = () => {
  for (let i = 0; i < 3; i += 1) {
    const mathSign = ['+', '-', '*'];
    const random = Math.floor(Math.random() * 3);
    const randomSign = mathSign[random];
    let result = 0;
    const randomNumber1 = Math.floor(Math.random() * 10);
    const randomNumber2 = Math.floor(Math.random() * 10);

    if (randomSign === '+') {
      result = randomNumber1 + randomNumber2;
    } else if (randomSign === '-') {
      result = randomNumber1 - randomNumber2;
    } else if (randomSign === '*') {
      result = randomNumber1 * randomNumber2;
    }

    const answer = i === 0 ? readlineSync.question(`What is the result of the expression?\nQuestion: ${randomNumber1} ${randomSign} ${randomNumber2}\nYour answer: `) : readlineSync.question(`Question: ${randomNumber1} ${randomSign} ${randomNumber2}\nYour answer: `);
    const trueTypeOfAnswer = Number(answer);
    if (trueTypeOfAnswer !== result) {
      console.log(`'${trueTypeOfAnswer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`);
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
