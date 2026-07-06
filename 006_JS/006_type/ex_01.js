//Преобразование к строке
let num = 10;
let toStr = String(num);
console.log(typeof num);
console.log(typeof toStr);

//Преобразование к числу
let str = '10';
console.log(typeof Number(str));
console.log(typeof Number(10 == 10)); //1

//Преобразование к логическому типу
let strFl = ".";
console.log(Boolean(strFl));
let strEmpt = "";
console.log(Boolean(strEmpt));

//Неявное преобразование
let implicitConversion = 10 + '20';
console.log(implicitConversion);// '1020'

//Неявное преобразование при сравнении
let numImplicit = 10;
let strImplicit = '10';
console.log(numImplicit == strImplicit);// True
console.log(numImplicit === strImplicit);// False
