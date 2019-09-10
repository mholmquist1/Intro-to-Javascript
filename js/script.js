//Create a taco recipe using Prototypes. First to create what will be needed for the recipe itself.

function TacoRecipe(meat, seasonings, vegetables, tortilla) {
    this.meat = meat;
    this.seasonings = seasonings;
    this.vegetables = vegetables;
    this.tortilla = tortilla;
}

TacoRecipe.prototype.prepIngredients = function ()  {
console.log(`Get two pounds of ${this.meat} and add to pan. In a seperate bowl collect ${this.seasonings}. Make sure to get your ${this.vegetables} ready to be washed and cut. Then dip the ${this.tortilla} in some oil and ready to fry in the pan.`);
}

TacoRecipe.prototype.eatingIt = function ()
{
    console.log(`hold the ${this.meat} in you hands, take out all of the ${this.vegetables}, then throw away the ${this.tortilla} and then shove the rest in your mouth!`);
}


//Random non prototype function

// function Test(phrase) {
//     this.phrase = phrase;
// }
// function exampleTest(phrase) {
//     Test.call(this, phrase);
//     this.random = 'I am iRobot';
// }

// console.log(new exampleTest('I FAIL AT LIFE'));


const asadaTaco = new TacoRecipe('carne asada', ['garlic powder', 'cumin', 'onion', 'salt & pepper'], ['lemon', 'tomatoes', 'onion', 'lettuce/cabbage', 'raddish'], 'corn tortilla');

const carnitas = new TacoRecipe('carniatas', 'salt', 'pico de gallo', 'corn tortilla');
asadaTaco.prepIngredients(); carnitas.prepIngredients();
asadaTaco.eatingIt();