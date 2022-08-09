import readlineSync from 'readline-sync';

const initGame = (description, getLogicAndRulesForGame) => {
  const maxRoundCount = 3;

  console.log('brain-games\nWelcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(description);

  for (let roundCount = 0; roundCount < maxRoundCount; roundCount += 1) {
    const [question, rightAnswer] = getLogicAndRulesForGame();
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      break;
    } else {
      console.log('Correct!');
    }

    if (roundCount === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default initGame;
