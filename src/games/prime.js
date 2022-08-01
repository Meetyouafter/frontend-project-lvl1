import initGame from '../engine.js';
import getRandomNumber from '../helper.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (number) => {
  for (let i = number - 1; i > 1; i -= 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const gameFn = () => {
  const numberForQuestion = getRandomNumber(0, 100);
  const rightAnswer = isPrimeNumber(numberForQuestion) ? 'yes' : 'no';
  return [numberForQuestion, rightAnswer];
};

const startPrimeGame = () => {
  initGame(description, gameFn);
};

export default startPrimeGame;
