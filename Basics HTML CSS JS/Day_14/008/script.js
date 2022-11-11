//A:
var arrayOne = [10, 20, 30, 40];
arrayOne.shift(0);
arrayOne.unshift(50);
console.log(arrayOne);

//B:
var arrayTwo = [60, 70, 80, 90, 100];
arrayTwo.pop();
var newele = 140;
arrayTwo.push(newele);
var a = arrayTwo[3];
// console.log(a);
arrayTwo[3] = newele;
// console.log(arrayTwo[2]);
arrayTwo[4] = a;
console.log(arrayTwo);

//C:
var concon = arrayOne.concat(arrayTwo);
console.log(concon);
