import initGame from '../engine.js';
import getRandomNumber from '../helper.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcdForGivenNumbers = (firstNumber, secondNumber) => {
  if (secondNumber > firstNumber) return findGcdForGivenNumbers(secondNumber, firstNumber);
  if (!secondNumber) return firstNumber;

  return findGcdForGivenNumbers(secondNumber, firstNumber % secondNumber);
};

const getQuestionAndAnswerForGame = () => {
  const firstRandomNumber = getRandomNumber(0, 100);
  const secondRandomNumber = getRandomNumber(0, 100);

  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  const rightAnswer = String(findGcdForGivenNumbers(firstRandomNumber, secondRandomNumber));

  return [question, rightAnswer];
};

const startGcdGame = () => {
  initGame(description, getQuestionAndAnswerForGame);
};

export default startGcdGame;
