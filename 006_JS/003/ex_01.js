let x = 10;
let y = 5;
console.log(`Сумма: ${x + y}`); //Сумма: 15
console.log(`Разность: ${x - y}`); //Разность: 5
console.log(`Произведение: ${x * y}`); //Произведение: 50;
console.log(`Частное: ${x / y}`); // Частное: 2
console.log(`Частное: ${10 / 4}`); //Частное: 2.5
console.log(`Остаток: ${x % y}`); //Остаток: 0
console.log(`Частное: ${10 % 4}`); //Остаток: 2

// Присваивание с арифметикой
let num = 5;
num += 3;
console.log(`Присваивание с добавлением: ${num}`);
num -= 2;
console.log(`Присваивание с вычитанием: ${num}`);
num *= 4;
console.log(`Присваивание с умножением: ${num}`);
num /= 4;
console.log(`Присваивание с делением: ${num}`);

let count = 10;
let newCount = 0;
console.log(`count: ${count}, newCount: ${newCount}`);
newCount = count++;
console.log(`count: ${count}, newCount: ${newCount}`);
newCount = ++count;
console.log(`count: ${count}, newCount: ${newCount}`);