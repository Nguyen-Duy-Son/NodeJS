let arrA=[1,7,4,2,3];
let arrB = [5, 2, 6, 1, 3];
let arrC = arrA.concat(arrB);
let arrD = arrA.filter((value,index)=>{
    return arrA.indexOf(value) != -1 && arrB.indexOf(value) != -1
})
console.log(arrD);