let arr = [1, 7, 4, 2, 3, 1, 2, 2, 9, 3];
const result1 = arr.filter((value, index) => index == arr.indexOf(value));
const result2 = result1.sort((a, b) => {
    return b-a;
});
console.log(result2);