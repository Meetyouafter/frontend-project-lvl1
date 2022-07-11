#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { userName } from '../src/cli.js'

for (let i = 0; i < 3; i++) {
let randomNumber = Math.floor(Math.random() * 100);
let answer = readlineSync.question(`Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ${randomNumber}\n`)
if (answer === 'yes') {
    if (randomNumber % 2 === 0) {
        console.log('Your answer: ' + answer + '\nCorrect!')
    } else {
        console.log(`You answer: yes.\n'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`)
        break
    }
} else if (answer === 'no') {
    if (randomNumber % 2 !== 0) {
        console.log('Your answer: ' + answer + '\nCorrect!')
     } else {
        console.log(`You answer: no.\n'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`)
        break
     }
} else {
    console.log(`You answer: ${answer}.\n${answer} is wrong answer ;(.\nLet's try again, ${userName}!`)
    break
}
console.log(`Congratulations, ${userName}!`)
}
