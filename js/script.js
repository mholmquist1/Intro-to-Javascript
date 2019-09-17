
// //https://dog.ceo/api/breeds/list/all
// //after breeds teh data will change to whatever I want

// function playWithApi() {
//     const url = 'https://dog.ceo/api/breeds/list/all';
//     fetch(url)
//     .then(function(resp) {
//         return resp.json()
//     })
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(function() {

//     });
// };

// playWithApi();

// div.className = 'container';
// const row = document.createElement('div');
// row.className = 'row';
// const wrapper = document.createElement('div');
// wrapper.className = 'col-md-8 col-me-offset-2';
// row.appendChild(wrapper);
// div.appendChild(row);
// document.body.appendChild(div);

// const exampleJson = ' { "name": "Jacque", "age": 32}';
// const exampleTwo = ' {"random": 7, "phrase": "This is supa cool"} ';
// const exampleParse = JSON.parse(exampleJson);
// wrapper.innerText = exampleParse.name;
// const exampleStringify = JSON.stringify(exampleTwo);
// wrapper.innerText = exampleStringify;

// console.log(exampleTwo);



// function practiceScope() {
//     let random = 'Inside scope';

//     const phrase = function () {
//         console.log('This is super cool, Jax');
//     }
//     return phrase();
// }

// let practiceOutside = practiceScope();


// const example = [1,2,3];
// const exampleBreakdown = example.forEach( (val) => {
//     return val + 5;
// });
// console.log(exampleBreakdown);


// class AboutMe {
//     constructor(name, age, petName, petBreed){
//     this.name = name;
//     this.age = age;
//     this.petName = petName;
//     this.petBreed = petBreed;
//     }
// }

// AboutMe.prototype.myDog = function () {
//     const url = `https://dog.ceo/api/breed/${this.petBreed}/images/random`;
//     fetch(url)
//     .then( (transformJson) => {
//         return transformJson.json();
//     })

//     .then ( (breedData) => {
//         console.log(breedData);
//         const image = document.createElement('img');
//         image.setAttribute('src', breedData.message);
//         wrapper.appendChild(image);
//     })
//     .catch( (err) => {
//         console.log(err);
//     })
// }


// const jacque = new AboutMe('Jacque', 26, 'Smeagol', 'bulldog');


// jacque.myDog();


class Produce {
    constructor(name, price, organic) {
        this.name = name;
        this.price = price;
        this.organic = organic;
    }
}

const cherry = new Produce('Cherry',2.99, false);
console.log(cherry);

const produce = ' { "Cherry": { "price": 2.99, "organic": false}, "Orange": { "price": 1.99, "organic": true}}';

const parsed = JSON.parse.parse(produce);
console.log(parsed.Cherry);
console.log(parsed.Orange);