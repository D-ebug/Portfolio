//1

let age = 19,
    requied = 18;
function checkAge(age, requied) {
    if (age >= requied) {
        result = 'major.'
    }
    else {
        result = 'minor.'
    }
    return(result);
}
console.log('You are a '+ checkAge(age, requied));

//2

let password = 'jqueryismyjam'

function checkPassword(psw) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    if (psw === ADMIN_PASSWORD) {
        message = 'Logged in';
    }
    else {
        message = 'Wrong password';
    }
    return(message);
}
console.log(checkPassword(password));

//3

function checkStorage(avaliable, ordered) {
    if (ordered <= avaliable) {
        message = 'The order is accepted, our manager will contact you'
    }
    else {
        message = 'Your order is too large, not enough goods in stock!'
    }
    return(message);
}
console.log(checkStorage(100, 99))
