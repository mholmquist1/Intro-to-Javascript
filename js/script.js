//create 3 variables of prompt value
const taskOne = prompt(`Give me your first task to do.`);

const taskTwo = prompt(`Give me a second task you need to do?`);

const taskThree = prompt(`Give me the last task you need to do`);

let arrayOfTasks = [taskOne, taskTwo, taskThree];
let secondArrayOfTasks = [
        [taskOne],
        [taskTwo],
        [taskThree]
];

console.log(arrayOfTasks);
console.log(`second one:`, secondArrayOfTasks);


const limit = 3;
for(j = 0; j < secondArrayOfTasks.length; j++) {
        secondArrayOfTasks[j].push(`this will take ${Math.floor(Math.random()* 15)}`);
        console.log(arrayOfTasks[j]);
}