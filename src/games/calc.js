import initGame from '../engine.js';
import getRandomNumber from '../helper.js';

const description = 'What is the result of the expression?';

const getMathSignForCalculatorGame = (firstNumber, secondNumber, mathSign) => {
  switch (mathSign) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return 'It is wrong sign';
  }
};

const gameFn = () => {
  const mathSign = ['+', '-', '*'];
  const randomMathSign = mathSign[getRandomNumber(0, 2)];
  const numberOne = getRandomNumber(0, 10);
  const numberTwo = getRandomNumber(0, 10);
  const question = `${numberOne} ${randomMathSign} ${numberTwo}`;
  const rightAnswer = String(getMathSignForCalculatorGame(numberOne, numberTwo, randomMathSign));
  return [question, rightAnswer];
};

const startCalculatorGame = () => {
  initGame(description, gameFn);
};

export default startCalculatorGame;
