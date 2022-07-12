#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { userName } from '../src/cli.js'




for (let i = 0; i < 3; i++) {

let randomNumber1 = Math.floor(Math.random() * 100);
let randomNumber2 = Math.floor(Math.random() * 100);


let answer = i === 0 ? readlineSync.question(`Find the greatest common divisor of given numbers.\nQuestion: ${randomNumber1} ${randomNumber2}\nYour answer: `) : readlineSync.question(`Question: ${randomNumber1} ${randomNumber2}\nYour answer: `)

let qsd = (randomNumber1, randomNumber2) => {
    if (randomNumber1 == 0)
    return randomNumber2

    while (randomNumber2 != 0) {
        if (randomNumber1 > randomNumber2) 
        randomNumber1 = randomNumber1 - randomNumber2
        else
        randomNumber2 = randomNumber2 - randomNumber1
        }
        return randomNumber1
    }



if (answer != qsd(randomNumber1, randomNumber2)) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${qsd(randomNumber1, randomNumber2)}'.\nLet's try again, ${userName}!`)
    break
    } else {
        console.log('Correct!')
    }
    if (i === 2)
    console.log(`Congratulations, ${userName}!`)
    }

