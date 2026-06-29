let num = 10;
console.log(typeof num);

let nullValue = null;
console.log(nullValue);
console.log(typeof nullValue); // object

let undefinedValue = undefined;
console.log(undefinedValue); //undefined
console.log(typeof undefinedValue); //undefined
// let undefinedValue <=> let undefinedValue = undefined;

let arr = [1, 2, 3, 4, 5];
console.log(arr); // [1, 2, 3, 4, 5]
console.log(typeof arr); // object

let sym = Symbol("Описание");
console.log(sym); //Symbol(Описание)
console.log(typeof sym); // symbol

const bigNumber = 123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890n;
const bigNumber2 = 123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890;
console.log(bigNumber);
console.log(typeof bigNumber); // bigint
console.log(bigNumber2); //1.2345678901234568e+119
console.log(typeof bigNumber2); // number
