import readlineSync from 'readline-sync';
import { userName } from '../src/cli.js';

const foo = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = Math.floor(Math.random() * 10);
    const randomNumber2 = Math.floor(Math.random() * 10);
    const mask = Math.floor(Math.random() * 10);
    const endOfProgression = randomNumber1 + 9 * randomNumber2;
    const sum = [];
    let argument = 0;

    const sequenceSum = (firstNumber, progressionEnd, secondNumber) => {
      for (let j = firstNumber; j <= progressionEnd; j += secondNumber) sum.push(j);
      argument = sum[mask];
      sum[mask] = '..';
      return sum;
    };

    const answer = i === 0 ? readlineSync.question(`What number is missing in the progression?\nQuestion: ${sequenceSum(randomNumber1, endOfProgression, randomNumber2).join(' ')}\nYour answer: `) : readlineSync.question(`Question: ${sequenceSum(randomNumber1, endOfProgression, randomNumber2).join(' ')}\nYour answer: `);

    if (answer != argument) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${argument}'.\nLet's try again, ${userName}!`);
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