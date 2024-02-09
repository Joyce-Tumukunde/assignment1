
const today = new Date();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const day = days[today.getDay()];

console.log(`Today is: ${day}`);
