#!/usr/bin/env node
/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable eqeqeq */
/* eslint-disable import/extensions */

import readlineSync from 'readline-sync';
import { userName } from '../src/cli.js';

for (let i = 0; i < 3; i += 1) {
  const randomNumber1 = 0;
  const randomNumber2 = Math.floor(Math.random() * 100);

  const answer = i === 0 ? readlineSync.question(`Find the greatest common divisor of given numbers.\nQuestion: ${randomNumber1} ${randomNumber2}\nYour answer: `) : readlineSync.question(`Question: ${randomNumber1} ${randomNumber2}\nYour answer: `);

  const qsd = (randomNumber1, randomNumber2) => {
    if (randomNumber1 == 0) {
      return randomNumber1;
    }

    if (randomNumber2 == 0) {
      return randomNumber2;
    }

    while (randomNumber2 != 0) {
      if (randomNumber1 > randomNumber2) {
        randomNumber1 -= randomNumber2;
      } else {
        randomNumber2 -= randomNumber1;
      }
    }
    return randomNumber1;
  };

  // eslint-disable-next-line eqeqeq
  if (answer != qsd(randomNumber1, randomNumber2)) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${qsd(randomNumber1, randomNumber2)}'.\nLet's try again, ${userName}!`);
    break;
  } else {
    console.log('Correct!');
  }
  if (i === 2) {
    console.log(`Congratulations, ${userName}!`);
  }
}
