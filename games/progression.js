import readlineSync from 'readline-sync';
import { userName } from '../src/cli.js';

const foo = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = Math.floor(Math.random() * 10);
    const randomNumber2 = Math.floor(Math.random() * 10);
    const stepForProgression = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    const endOfProgression = randomNumber1 + stepForProgression(5, 10) * randomNumber2;
    const mask = Math.floor(Math.random() * (stepForProgression(5, 10) - 1));
    let result = 0;
    const startQuestion = 'What number is missing in the progression?\nQuestion: ';

    const sequenceSum = (firstNumber, lastNumber, step) => {
      const sum = [];
      for (let j = firstNumber; j <= lastNumber; j += step) {
        sum.push(j);
      }
      result = sum[mask];
      sum[mask] = '..';
      return sum;
    };

    const answer = i === 0 ? readlineSync.question(`${startQuestion}${sequenceSum(randomNumber1, endOfProgression, randomNumber2).join(' ')}\nYour answer: `) : readlineSync.question(`Question: ${sequenceSum(randomNumber1, endOfProgression, randomNumber2).join(' ')}\nYour answer: `);

    if (answer != result) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`);
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
