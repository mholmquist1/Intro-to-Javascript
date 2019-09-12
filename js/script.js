const container = document.createElement('main');



container.classList.add('container');
document.body.appendChild(container);
container.innerHTML = '<h1>Hello</h1>';

console.log(container);

function movieQuote() {
    alert('I know what you did last summer...');
}

let timer;

function callQuote() {
    timer = setInterval(movieQuote, 3000);
}

function stopFromRunning() {
    clearInterval = clearInterval(timer, 1000);
}


const button = document.createElement('button');
button.setAttribute('onclick', 'callQuote()');
button.innerText = 'Click For A Movie Quote';
button.className = 'btn btn-primary btn-lg';
container.appendChild(button);

const stopButton = document.createElement('button');
stopButton.className = 'alert alert-danger border-danger border';
stopButton.setAttribute('onclick', 'stopFromRunning()');
stopButton.innerText = 'STOP';

button.addEventListener('click', () => {
    container.appendChild(stopButton);
});


//Session Storage
sessionStorage.setItem('TEMPORARY', 'Every problem is temporary');
sessionStorage.getItem('TEMPORARY');
localStorage.setItem('DEATH', 'Except for death - Grace');
localStorage.getItem('DEATH');