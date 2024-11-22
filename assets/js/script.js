'use strict';

const click = [];

let clickCount = 0;

const button = document.querySelector('.click-button');
const display = document.querySelector('.click-count');

button.addEventListener('click', () => {clickCount++; display.innerText = `You clicked ${clickCount} times`;});