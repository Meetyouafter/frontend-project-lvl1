import engine from '../engine.js';
import getRandomNumber from '../helper.js';

const descriptoin = 'Answer "yes" if the number is even, otherwise answer "no".';

const even = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  } if (number % 2 !== 0) {
    return 'no';
  }
  return 'It is wrong';
};

const gameFunction = () => {
  const randomNumber = getRandomNumber(0, 100);
  const question = `${randomNumber}`;
  const rightAnswer = even(randomNumber);
  return [question, rightAnswer];
};

const evenGame = () => {
  engine(descriptoin, gameFunction);
};

export default evenGame;
