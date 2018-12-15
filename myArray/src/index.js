import myArr from './myArr.js';

window.myArr = new myArr();


const arr = new myArr(1,2,3,4,5);
let obj = {name:'sdsas'};
arr.push(obj)
console.log(arr);

arr.pop();

console.log(arr);
