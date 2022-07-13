#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { userName } from '../src/cli.js'


for (let i = 0; i < 3; i++) {

let randomNumber1 = Math.floor(Math.random() * 10);
let randomNumber2 = Math.floor(Math.random() * 10);
let mask = Math.floor(Math.random() * 10);
let endOfProgression = randomNumber1 + 9 * randomNumber2
let sum = []
let argument = 0

const sequenceSum = (randomNumber1, endOfProgression, randomNumber2) => {
    for (let i = randomNumber1; i <= endOfProgression; i += randomNumber2) sum.push(i);
    argument =  sum[mask]
    sum[mask] = '..'
    return sum
}

let answer = i === 0 ? readlineSync.question(`What number is missing in the progression?\nQuestion: ${sequenceSum(randomNumber1, endOfProgression, randomNumber2).join(' ')}\nYour answer: `) : readlineSync.question(`Question: ${sequenceSum(randomNumber1, endOfProgression, randomNumber2).join(' ')}\nYour answer: `)

if (answer != argument) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${argument}'.\nLet's try again, ${userName}!`)
break
} else {
    console.log(`Correct!`)
}
if (i === 2)
console.log(`Congratulations, ${userName}!`)
    }





