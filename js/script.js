const body = document.body;
const container = document.createElement('div');
container.className = 'container text-center';

// let test = body.appendChild(container);
// console.log('my html: ', test);

const row = document.createElement('main');
row.className = 'row';

const content = document.createElement('div');
content.className = 'col-md-6 col-md-offset-2 content';

row.appendChild(content);
container.appendChild(row);
body.appendChild(container);


//form tag > input:email - input:subject - textarea - button:submit

// const labelGenerator = (forElement, text) => {
//     const label = document.createElement('label');
//     label.setAttribute('for', forElement);
//     label.innerText = text;
//     return label;
// }


// const loginForm = document.createElement('form');
// console.log(loginForm);

// const inputEmail = document.createElement('input');
// inputEmail.setAttribute('type','email');
// inputEmail.setAttribute('name','email');
// inputEmail.setAttribute('class', 'form-control');
// inputEmail.setAttribute('placeholder', 'My Input Email');
// console.log(inputEmail);

// const inputSubject = document.createElement('input');
// inputSubject.setAttribute('type','text');
// console.log(inputSubject);

// const inputTextArea = document.createElement('input');
// inputTextArea.setAttribute('type','text');
// console.log(inputTextArea);



// loginForm.appendChild(inputEmail);
// loginForm.appendChild(inputSubject);
// loginForm.appendChild(inputTextArea);
// // loginForm.appendChild(button);
// // button.appendChild(submit);
// content.appendChild(loginForm);
// body.appendChild(container);


// function globalFormElements(element, elementType, elementName, elementClass, elementPlaceholder, elementId) {
//     const newElement = document.createElement(element);
//     newElement.setAttribute('type', elementType);
//     newElement.className = elementClass;
//     newElement.setAttribute('name',elementName);
//     newElement.setAttribute('placeholder', elementPlaceholder);
//     newElement.id = elementId;
//     return newElement;
    
// };

// const textAreaElement = (name, placeholder, elementClass, elementId, cols, rows) => {
//     const element = document.createElement('textArea');
//     element.setAttribute('text', 'text');
//     element.className = elementClass;
//     element.setAttribute('name', name);
//     element.setAttribute('placeholder', placeholder);
//     element.setAttribute('cols', cols);
//     element.setAttribute('rows', rows);
//     element.id = elementId;
//     return element;
// };
//  console.log(globalFormElements('input', 'text', 'example', 'form-control bg-primary', 'Type your Name'));

//  console.log(globalFormElements('textareaa', 'text', 'message', 'bg-danger', 'Please, let us know your conerns here.'));




//*****jacque's work */
function globalFormElements(element, elementType, elementName, elementClass, elementPlaceholder, elementId) {
    //element : create the type of element you seek
    const newElement = document.createElement(element);
    newElement.setAttribute('type', elementType);
    newElement.className = elementClass;
    newElement.setAttribute('name', elementName);
    newElement.setAttribute('placeholder', elementPlaceholder);
    newElement.id = elementId;
    return newElement;
}
const textAreaElement = (name, placeholder, elementClass, elementId, cols = 4, rows = 2) => {
    const element = document.createElement('textarea');
    element.setAttribute('type', 'text');
    element.className = elementClass;
    element.setAttribute('name', name);
    element.setAttribute('placeholder', placeholder);
    element.setAttribute('cols', cols);
    element.setAttribute('rows', rows);
    element.id = elementId;
    return element;
}

const labelGenerator = (forElement, text) => {
    const label = document.createElement('label');
    label.setAttribute('for', forElement);
    label.innerText = text;
    return label; 
}
console.log(globalFormElements('input', 'text', 'example', 'form-control bg-primary', 'Type your example here'));

console.log(globalFormElements('textarea', 'text', 'message', 'bg-danger', 'Please, let us know your concerns here.' ));

const form = document.createElement('form');

form.setAttribute('method', 'GET');
form.setAttribute('action', 'js/form-submission.js');
form.setAttribute('name', 'myForm');


const inputEmail = globalFormElements('input', 'email', 'email', 'form-control', 'Enter email here');
const inputSubject = globalFormElements('input', 'text', 'subject', 'form-control', 'Enter Subject here');
const textArea = textAreaElement('message', 'Your message here...', 'form-control', 'message', 5, '');
const button = document.createElement('button');
button.className = 'btn-primary btn';
button.setAttribute('type', 'submit');
button.innerText = 'Submit Now';

form.appendChild(inputEmail);
form.appendChild(inputSubject);
form.appendChild(textArea);
form.appendChild(button);

content.appendChild(form);


content.appendChild(form);