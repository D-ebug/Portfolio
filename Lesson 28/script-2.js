const addToCounter = document.querySelector('.Add-to-counter');
const subFromCounter = document.querySelector('.Subtract-from-counter');
const Counter = document.querySelector('.Counter');
let Count = 0;
addToCounter.addEventListener('click', () => {
    Count++;
    console.log('+')
    Counter.textContent = Count;
});
subFromCounter.addEventListener('click', () => {
    Count--;
    console.log('-')
    Counter.textContent = Count;
});