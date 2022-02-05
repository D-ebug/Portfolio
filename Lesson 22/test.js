console.log(9 % 6);
console.log(10 % 2);
console.log(3 % 0);

console.log('\n');

console.log(2 ** 3);
console.log(5 ** 8);
console.log(4 ** 7);

console.log('\n')

let age = 16,
adult = 18;

if 
(age >= 18) {
    console.log('You are an adult');
}
else 
{
    console.log('You are a minor');
}

console.log('\n');

let totalSpent = 4999,
    GOLD_DISCOUNT = 0.1,
    SILVER_DISCOUNT = 0.05,
    BRONZE_DISCOUNT = 0.02,
    BASE_DISCOUNT = 0;
if 
(totalSpent >= 50000) {
    console.log(totalSpent + (totalSpent*GOLD_DISCOUNT));
}
else if 
(totalSpent >= 20000) {
    console.log(totalSpent + (totalSpent*SILVER_DISCOUNT));
}
else if 
(totalSpent >= 5000) {
    console.log(totalSpent + (totalSpent*BRONZE_DISCOUNT));
}
else
{
    console.log(totalSpent);
}


