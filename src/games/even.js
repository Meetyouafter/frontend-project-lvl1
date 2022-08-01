import initGame from '../engine.js';
import getRandomNumber from '../helper.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (randomNumber) => randomNumber % 2 === 0;

const gameFn = () => {
  const secretNumber = getRandomNumber(0, 100);
  const rightAnswer = isEvenNumber(secretNumber) ? 'yes' : 'no';
  return [secretNumber, rightAnswer];
};

const startEvenGame = () => {
  initGame(description, gameFn);
};

export default startEvenGame;
