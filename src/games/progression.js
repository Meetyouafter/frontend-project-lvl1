import initGame from '../engine.js';
import getRandomNumber from '../helper.js';

const description = 'What number is missing in the progression?';

const getProgression = () => {
  const progressionLength = getRandomNumber(5, 10);
  const progression = [];
  const firstNumber = getRandomNumber(0, progressionLength);
  const step = getRandomNumber(1, progressionLength);
  const lastNumber = firstNumber + getRandomNumber(5, 10) * step;

  for (let i = firstNumber; i <= lastNumber; i += step) {
    progression.push(i);
  }
  return progression;
};

const hideRandomElement = (progression) => {
  const progressionWithHiddenElement = [...progression];
  const index = Math.floor(Math.random() * (progression.length - 1));
  progressionWithHiddenElement[index] = '..';

  return [progressionWithHiddenElement, String(progression[index])];
};

const getQuestionAndAnswerForGame = () => {
  const progression = getProgression();
  const [progressionWithSecret, rightAnswer] = hideRandomElement(progression);

  const question = progressionWithSecret.join(' ');

  return [question, rightAnswer];
};

const startProgressionGame = () => {
  initGame(description, getQuestionAndAnswerForGame);
};

export default startProgressionGame;
