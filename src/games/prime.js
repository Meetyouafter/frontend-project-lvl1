import engine from '../engine.js';
import getRandomNumber from '../helper.js';

const descriptoin = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const prime = (randomNumber) => {
  for (let i = randomNumber - 1; i > 1; i -= 1) {
    if (randomNumber % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const gameFunction = () => {
  const randomNumber = getRandomNumber(0, 100);
  const question = `${randomNumber}`;
  const rightAnswer = String(prime(randomNumber));
  return [question, rightAnswer];
};

const primeGame = () => {
  engine(descriptoin, gameFunction);
};

export default primeGame;
