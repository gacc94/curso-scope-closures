function greeting(){

} 
let num = 10;

const increaseNumber = () => num++;
const increasePassedNumber = number => number++;

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1); // 🤔
console.log(num2); // 🤔


console.log(num++)

nameOfDog("Elmo"); 
function nameOfDog(name) { console.log(name); }; 
const fruits = () => { if (true) { var fruit1 = 'apple'; const fruit2 = 'banana'; let fruit3 = 'kiwi'; } }