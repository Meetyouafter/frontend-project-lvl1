#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { userName } from '../src/cli.js';

for (let i = 0; i < 3; i += 1) {
  const randomNumber = Math.floor(Math.random() * 100);
  const answer = i === 0 ? readlineSync.question(`Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ${randomNumber}\nYour answer: `) : readlineSync.question(`Question: ${randomNumber}\nYour answer: `);
  if (answer === 'yes') {
    if (randomNumber % 2 === 0) {
      console.log('Correct!');
    } else {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
      break;
    }
  } else if (answer === 'no') {
    if (randomNumber % 2 !== 0) {
      console.log('Correct!');
    } else {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
      break;
    }
  } else {
    console.log(`'${answer}' is wrong answer ;(.\nLet's try again, ${userName}!`);
    break;
  }
  if (i === 2) {
    console.log(`Congratulations, ${userName}!`);
  }
}
