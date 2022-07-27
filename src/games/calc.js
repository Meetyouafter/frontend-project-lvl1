import engine from '../engine.js';
import getRandomNumber from '../helper.js';

const descriptoin = 'What is the result of the expression?';

const calculator = (firstNumber, secondNumber, mathSign) => {
  if (mathSign === '+') {
    return firstNumber + secondNumber;
  } if (mathSign === '-') {
    return firstNumber - secondNumber;
  } if (mathSign === '*') {
    return firstNumber * secondNumber;
  }
  return 'It is wrong';
};

const gameFunction = () => {
  const mathSign = ['+', '-', '*'];
  const randomMathSign = mathSign[getRandomNumber(0, 2)];
  const numberOne = getRandomNumber(0, 10);
  const numberTwo = getRandomNumber(0, 10);
  const question = `${numberOne} ${randomMathSign} ${numberTwo}`;
  const rightAnswer = String(calculator(numberOne, numberTwo, randomMathSign));
  return [question, rightAnswer];
};

const calculatorGame = () => {
  engine(descriptoin, gameFunction);
};

export default calculatorGame;
