
const side1 = 5;
const side2 = 6;
const side3 = 7;

const semiPerimeter = (side1 + side2 + side3) / 2;

const area = Math.sqrt(semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3));

console.log(`Area of the triangle with side lengths ${side1}, ${side2}, and ${side3} is: ${area}`);
