const container = document.querySelector('.container');
console.log(container);

const h1 = document.querySelector('h1');
console.log(h1);
// console.log(h1.textContent);

// let message = h1.innerHTML = 'I am a message.';

function greetingCard() {
    const container = document.createElement('container');
    console.log('container');

    const divCard = document.createElement('div');
    divCard.setAttribute('class', 'card text-center col-md-6');
    console.log('divCard');

    const divHello = document.createElement('div');
    divHello.setAttribute('class', 'col-md-4');

    const h1 = document.createElement('h1');
    console.log('h1');

    const image = document.createElement('img');
    image.setAttribute('class', 'img-responsive');
    image.setAttribute('src','../butterfly.jpg');
    image.setAttribute('alt', 'Open Sign');
    console.log(image);

    const pTag = document.createElement('p');
    console.log('p');

    
    container.appendChild(h1);
}

greetingCard();









//jacques js
const container = document.querySelector('.container');
const button = button























// function globalListItems() {
//     //create an ul/ol, create li with any classes or atrributess or ids needed

//     //create ul
//     const ul = document.createElement('ul');
//     console.log(ul);
//     //create li
//     const li = document.createElement('li');
//     // console.log(li);
//     //attributes/classes/id
//     li.className = 'list-group-item', 'list-group-item-info';
//     // console.log('li with classes', li);
//     li.innerText = 'I am a list item.';
//     li.id = 'mySpecialListItem';

//     const image = document.createElement('img');
//     image.setAttribute('alt', 'I am an empty image');
//     console.log(image);
    
//     //append to container=>ul=>li
//     ul.appendChild(li);
//     // console.log('complete ul', ul);

//     container.appendChild(ul);
//     // console.log('conatiner');
// }

// globalListItems();
