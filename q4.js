
function isInRange(num) {
    return num >= 50 && num <= 99;
}

const num1 = parseInt(prompt("Enter the first number:"));
const num2 = parseInt(prompt("Enter the second number:"));
const num3 = parseInt(prompt("Enter the third number:"));
const result = isInRange(num1) || isInRange(num2) || isInRange(num3);
console.log(`Are any of the numbers (${num1}, ${num2}, ${num3}) in the range 50..99? ${result}`);
