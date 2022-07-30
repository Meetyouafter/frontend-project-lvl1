import engine from '../engine.js';
import getRandomNumber from '../helper.js';

const descriptoin = 'Find the greatest common divisor of given numbers.';

const gcd = (firstNumber, secondNumber) => {
  if (firstNumber === 0) {
    return secondNumber;
  }

  if (secondNumber === 0) {
    return firstNumber;
  }

  let firstNumberForWhile = firstNumber;
  let secondNumberForWhile = secondNumber;

  while (secondNumberForWhile !== 0) {
    if (firstNumberForWhile > secondNumberForWhile) {
      firstNumberForWhile -= secondNumberForWhile;
    } else {
      secondNumberForWhile -= firstNumberForWhile;
    }
  }
  return firstNumberForWhile;
};

const gameFunction = () => {
  const numberOne = getRandomNumber(0, 100);
  const numberTwo = getRandomNumber(0, 100);
  const question = `${numberOne} ${numberTwo}`;
  const rightAnswer = String(gcd(numberOne, numberTwo));
  return [question, rightAnswer];
};

const gcdGame = () => {
  engine(descriptoin, gameFunction);
};

export default gcdGame;
