const H1 = document.getElementById('greeting');


let firstName = prompt("What is your name?");
console.log(` ${firstName}`);

const askColor = prompt(`What is your favorite color? Red, orange, yellow, green, blue, pink, purple, black, white, or grey?`);


switch(askColor) {
    case `red`:
        H1.innerHTML = `You chose ${askColor}... ${firstName}, Hmm, that reminds me it is that time of the month!`;
    break;
    case `orange`:
        H1.innerHTML = `You chose ${askColor}... ${firstName}, Why dont oranges do well in school? Because only orange juice can concentrate.`;
    break;
    case `yellow`:
        H1.innerHTML = `You chose ${askColor}... ${firstName}, Yellow cars have the highest crash rate according to a recent pole`;
    break;
    case `green`:
        H1.innerHTML = `You chose ${askColor}... ${firstName}, I think I want to recycle this can`;
    break;
    case `blue`:
        H1.innerHTML = `You chose ${askColor}... ${firstName}, Why is the ocean always blue? Because the shore never waves back.`;
    break;
    case `pink`:
        H1.innerHTML = `You chose ${askColor}... ${firstName}, Keep calm and buy pink stuff!`;
    break;
    case `purple`:
        H1.innerHTML = `You chose ${askColor}... ${firstName}, What is a cat's favorite color? "Purr"ple`;
    break;
    case `black`:
        H1.innerHTML = `You chose ${askColor}... ${firstName}, What color is the sun?
        I looked at it for a couple of minutes and I think it is black.`;
    break;
    case `white`:
        H1.innerHTML = `You chose ${askColor}... ${firstName}, White is pure and simple and matches with everything.`
    break;
    case `grey`:
        H1.innerHTML = `You chose ${askColor}... ${firstName}, Grey hair? That's ok. Free!`
    break;
    default:
        H1.innerHTML = `Chose again ${firstName},!`;
}
