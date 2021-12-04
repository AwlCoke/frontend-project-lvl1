import readLineSync from 'readline-sync';

export const askName = () => {
    const name = readLineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
}