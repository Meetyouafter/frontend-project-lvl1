import readlineSync from 'readline-sync';
import { userName } from '../src/cli.js'

let randomNumber = Math.floor(Math.random() * 100);

//первый круг
let answer = readlineSync.question(`Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ${randomNumber}\n`)
if (answer === 'yes') {
    randomNumber % 2 === 0 ? console.log('Your answer: ' + answer + '\nCorrect!') : console.log(`You answer: yes.\n'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`)
} else if (answer === 'no') {
    randomNumber % 2 !== 0 ? console.log('Your answer: ' + answer + '\nCorrect!') : console.log(`You answer: no.\n'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`)
} else {
    console.log(`You answer: ${answer}.\n${answer} is wrong answer ;(.\nLet's try again, ${userName}!`)
}
