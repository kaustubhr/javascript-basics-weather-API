console.log('hello');
//object
let person = {
    name: 'kaustubh',
    interestRate: 0.3
};
//bracket notation
let selection = 'interestRate';
person[selection] = 0.4
//dot notation
console.log(person.interestRate);

//dynamic array with string and number
let selectedColors = ['red','blue'];
selectedColors[2] = 1;
console.log(selectedColors[2]);
console.log(selectedColors.length);
//parameter
function greetings(name){
    console.log('inside greetings function ' + name);
    
}
//argument
greetings('john');

function square(num)
{
    return num * num ;
}

//let squareNumber = square(12);
console.log(square(12));