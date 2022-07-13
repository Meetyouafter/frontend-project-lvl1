#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { userName } from '../src/cli.js'

for (let i = 0; i < 3; i ++) {

let mathSign = ['+', '-', '*']
let random = Math.floor(Math.random() * 3);
let randomSign = mathSign[random]
let result = 0;
let randomNumber1 = Math.floor(Math.random() * 10);
let randomNumber2 = Math.floor(Math.random() * 10);

if (randomSign === '+') {
    result = randomNumber1 + randomNumber2
} else if (randomSign === '-') {
    result = randomNumber1 - randomNumber2
} else if (randomSign === '*') {
    result = randomNumber1 * randomNumber2
}

let answer = i === 0 ? readlineSync.question(`What is the result of the expression?\nQuestion: ${randomNumber1} ${randomSign} ${randomNumber2}\nYour answer: `) : readlineSync.question(`Question: ${randomNumber1} ${randomSign} ${randomNumber2}\nYour answer: `)
if (answer != result) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`)
break
} else {
    console.log(`Correct!`)
}
if (i === 2)
console.log(`Congratulations, ${userName}!`)
}