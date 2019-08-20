// const exampleString = 'I am a string.';
// const exampleObjectString = new String(1);
// const anotherString = `I am a string.`;
const H1 = document.getElementById('greeting');

// function checkExamples() {
//     // if (exampleString == exampleObjectString) {
//     //     console.log(`Yes, ${exampleString} and ${exampleOjectString} do loosly equal.`);
//     // } else {
//     //     console.log(`Sorry, they do not equal at all.`);
//     // }
//     if (exampleString != anotherString) {
//         console.log(`Yes, ${exampleString} and ${anotherString} are not equal.`);
//     } else {
//         console.log(`Sorry, they do not equal at all.`);
//     }
// }

// checkExamples() ;

// const luckyNumber = 7;
// if(luckyNumber < 5 || luckyNumber > 1) {
//     console.log(`Sorry, your number is not lucky to me.`);
// } else {
//     console.log(`Hey your lucky number ${luckyNumber}`);
// 

// const luckyNumber = 5;

// if(luckyNumber === 5 || luckyNumber == 3) {
//     console.log(`Sorry, your number is not lucky to me.`);
// } else {
//     console.log(`Hey your lucky number ${luckyNumber}`);
// }

// const luckyNumber = 9;
// const luckyNumber = new String(9);

// if (luckyNumber === 9 || luckyNumber == 6) {
//     console.log(`Sorry,`)
// }

// let a = 10;
// // let b = 2;

// let result = 0;
// // let result = a + b;
// // console.log(result);

// // let result = a - b;
// // console.log(result);

// // let result = a += b;
// // console.log(result);

// console.log(result *= a);

// let result = 0;
// result ++;
// console.log(result);

// let a = `5.99`;
// let b = 2;
// let testModulo = 10 % 2;
// console.log(testModulo);
// let testNan = isNaN(true);
// console.log(testNan)

// let result = a += b;
// let transformMe = parseInt(a);
// let transformMe = parseFloat(a, 2);
// console.log(`Before: ${a}, after:${transformMe}`, typeof(a), typeof(transformMe));

// console.log(result);

// let hello = ` Hello `;
// let there = `there`;
// let sentence = hello += there;
// console.log(sentence);


// let valueNan = `I am indeed NaN`;
// let testNan = isNaN(valueNan);

// testNan ? console.log(`THIS IS TRUE`) : console.log(`THIS IS FALSE`);

// Let valueNan = 1;
// let testNan = isNan(valueNan);

// if(testNan === false) {
//     let result = `Yup, this is true.`;
//     console.log(`Yup, this is true.`);
//     H1.innerHTML = result;
// } else {
//     let result = `Nope, this is false`;
//     console.log(`Nope, this is false`);
//     H1.innerHTML = result;
// }


//********************** */ take home

const askColor = prompt(`Pick one of the following colors: red, blue, or orange. Await teh following response...`);

switch(askColor) {
    case `red`:
        H1.innerHTML = `You chose ${askColor}.. which reminds me of the song Lady In Red.. IS DANCING WITH ME....`;
    break;
    case `blue`:
        H1.innerHTML = `You chose ${askColor}... I'm blue Im a dee Im a da.`;
    break;
    case `orange`:
        H1.innerHTML = `You chose ${askColor}... only thing that comes to mind is Halloween.`;
    break;
    default:
        H1.innerHTML = `You did not follow the rules fam`;
}