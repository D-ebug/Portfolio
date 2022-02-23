const addToCounter = document.querySelector('.Add-to-counter');
const subFromCounter = document.querySelector('.Subtract-from-counter');
const counter = document.querySelector('.Counter');
let count = 0;
addToCounter.addEventListener('click', () => {
    count++;
    console.log('+')
    counter.textContent = count;
});
subFromCounter.addEventListener('click', () => {
    count--;
    console.log('-')
    counter.textContent = count;
});