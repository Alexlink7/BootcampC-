console.log(isNaN('sdf'));
console.log(isNaN('123'));
console.log(isNaN(NaN));
console.log(Number.isNaN(NaN));
console.log(typeof NaN);

console.log(Number.isFinite(NaN));
console.log(Number.isFinite('1'));
console.log(isFinite('1'));
console.log(isFinite(NaN));
console.log(isFinite('a'));
console.log(isFinite(1));

console.log(Number.parseInt(' 12 2asfd1111'));
console.log(typeof Number.parseInt(' 12 2asfd1111'));

console.log(Number.parseFloat("1e3"));  // 1000
console.log(Number.parseFloat("10.5"));

console.log(Number.isInteger(1));
console.log(Number.isInteger(1.2));

let value = 1.2;
console.log(`переменная value ${value} является 'number': ${typeof value === 'number'}`);
