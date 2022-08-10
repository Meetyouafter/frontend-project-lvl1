import initGame from '../engine.js';
import getRandomNumber from '../helper.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (randomNumber) => randomNumber % 2 === 0;

const getQuestionAndAnswerForGame = () => {
  const numberForGame = getRandomNumber(0, 100);

  const rightAnswer = isEvenNumber(numberForGame) ? 'yes' : 'no';

  return [numberForGame, rightAnswer];
};

const startEvenGame = () => {
  initGame(description, getQuestionAndAnswerForGame);
};

export default startEvenGame;
