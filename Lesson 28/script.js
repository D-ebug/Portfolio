const addBgColor = document.querySelector('.body-color-add');
const resetBgColor = document.querySelector('.body-color-reset');
const setBgColor = document.querySelector('.body-color-set');
const removeBgColor = document.querySelector('.body-color-remove');
const body = document.body;
function getRandomHexColor() {
    return `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, 0)}`; 
}
function colorChange() {
    body.style.backgroundColor = getRandomHexColor(); 
    console.log('changed bg color');
}

addBgColor.addEventListener('click', () => {
    setBgColor.addEventListener('click', colorChange);
});

removeBgColor.addEventListener('click', () => {
    setBgColor.removeEventListener('click', colorChange);
});

resetBgColor.addEventListener('click', () => {
    body.style.backgroundColor = 'white';
    console.log('bg color reset');
});