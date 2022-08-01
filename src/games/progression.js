import initGame from '../engine.js';
import getRandomNumber from '../helper.js';

const description = 'What number is missing in the progression?';

const getProgression = (length) => {
  const sum = [];
  const firstNumber = getRandomNumber(0, length);
  const step = getRandomNumber(0, length);
  const lastNumber = firstNumber + getRandomNumber(5, 10) * step;
  for (let i = firstNumber; i <= lastNumber; i += step) {
    sum.push(i);
  }
  return sum;
};

const hideRandomArrayElement = (arr) => {
  const newArr = [...arr];
  const index = Math.floor(Math.random() * (arr.length - 1));
  newArr[index] = '..';
  return [newArr, String(arr[index])];
};

const gameFn = () => {
  const progression = getProgression(getRandomNumber(5, 10));
  const [progressionWithSecret, rightAnswer] = hideRandomArrayElement(progression);
  const question = progressionWithSecret.join(' ');
  return [question, rightAnswer];
};

const startProgressionGame = () => {
  initGame(description, gameFn);
};

export default startProgressionGame;
