import initGame from '../engine.js';
import getRandomNumber from '../helper.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcdForTwoNumber = (firstNumber, secondNumber) => {
  if (secondNumber > firstNumber) return findGcdForTwoNumber(secondNumber, firstNumber);
  if (!secondNumber) return firstNumber;

  return findGcdForTwoNumber(secondNumber, firstNumber % secondNumber);
};

const getLogicForGcdGame = () => {
  const firstRandomNumber = getRandomNumber(0, 100);
  const secondRandomNumber = getRandomNumber(0, 100);

  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  const rightAnswer = String(findGcdForTwoNumber(firstRandomNumber, secondRandomNumber));

  return [question, rightAnswer];
};

const startGcdGame = () => {
  initGame(description, getLogicForGcdGame);
};

export default startGcdGame;
