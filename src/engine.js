import readlineSync from 'readline-sync';

const engine = (descriptoin, gameFunction) => {
  const roundCount = 3;
  console.log('brain-games\nWelcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(descriptoin);

  for (let i = 0; i < roundCount; i += 1) {
    const [question, rightAnswer] = gameFunction();
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    const trueTypeOfAnswer = String(answer);
    if (trueTypeOfAnswer !== rightAnswer) {
      console.log(`'${trueTypeOfAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      break;
    } else {
      console.log('Correct!');
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
export default engine;
