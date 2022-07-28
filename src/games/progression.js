import engine from '../engine.js';
import getRandomNumber from '../helper.js';

const descriptoin = 'What number is missing in the progression?';
const sequenceSum = (firstNumber, lastNumber, step) => {
  const sum = [];
  for (let j = firstNumber; j <= lastNumber; j += step) {
    sum.push(j);
  }
  return sum;
};

const gameFunction = () => {
  const randomNumber1 = getRandomNumber(0, 10);
  const randomNumber2 = getRandomNumber(0, 10);
  const endOfProgression = randomNumber1 + getRandomNumber(5, 10) * randomNumber2;
  const mask = Math.floor(Math.random() * (getRandomNumber(5, 10) - 1));
  const progression = sequenceSum(randomNumber1, endOfProgression, randomNumber2);
  const result = progression[mask];
  progression[mask] = '..';
  const question = `${progression.join(' ')}`;
  const rightAnswer = String(result);
  return [question, rightAnswer];
};

const progressionGame = () => {
  engine(descriptoin, gameFunction);
};

export default progressionGame;
