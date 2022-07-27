import engine from '../engine.js';
import getRandomNumber from '../helper.js';

const descriptoin = 'What number is missing in the progression?';
const mask = Math.floor(Math.random() * (getRandomNumber(5, 10) - 1));
const sum = [];
const sequenceSum = (firstNumber, lastNumber, stepForProgression) => {
  for (let j = firstNumber; j <= lastNumber; j += stepForProgression) {
    sum.push(j);
  }

  return sum;
};
const result = sequenceSum()[mask];
console.log(sum);
console.log(result);

sequenceSum()[mask] = '..';

const gameFunction = () => {
  const randomNumber1 = getRandomNumber(0, 10);
  const randomNumber2 = getRandomNumber(0, 10);
  const endOfProgression = randomNumber1 + getRandomNumber(5, 10) * randomNumber2;
  const question = `${sequenceSum(randomNumber1, endOfProgression, randomNumber2).join(' ')}`;
  const rightAnswer = String(result);
  return [question, rightAnswer];
};

const progressionGame = () => {
  engine(descriptoin, gameFunction);
};

export default progressionGame;
