import initGame from '../engine.js';
import getRandomNumber from '../helper.js';

const description = 'What is the result of the expression?';

const executeMathExpression = (firstNumber, secondNumber, mathSign) => {
  switch (mathSign) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return `${mathSign} - this mathsign doesn't use in this game`;
  }
};

const getLogicForCalculatorGame = () => {
  const mathSign = ['+', '-', '*'];
  const randomMathSign = mathSign[getRandomNumber(0, 2)];

  const numberOne = getRandomNumber(0, 10);
  const numberTwo = getRandomNumber(0, 10);

  const question = `${numberOne} ${randomMathSign} ${numberTwo}`;
  const rightAnswer = String(executeMathExpression(numberOne, numberTwo, randomMathSign));

  return [question, rightAnswer];
};

const startCalculatorGame = () => {
  initGame(description, getLogicForCalculatorGame);
};

export default startCalculatorGame;
