function add(number1,number2){
	return number1 + number2;
}
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

function substract(number1,number2) {
  return number1 - number2;
}

function multiply (number1,number2) {
  return number1*number2;
}
function modulus (number1, number2) {
  return number1 % number2;
}
const result = modulus(number1,number2)
alert(result)