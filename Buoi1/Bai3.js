let users = [
    { id: 1, name: 'Hung', age: 17, role: 'admin' },
    { id: 32, name: 'HungThu2', age: 71, role: 'admin' },
    { id: 65, name: 'Dung', age: 21, role: 'user' },
    { id: 87, name: 'Quy', age: 99, role: 'user' },
    { id: 123, name: 'Chi', age: 8, role: 'user' },
];

// const tmp=[{...users.id},{...users}]
// console.log(...tmp);
// // const array = Object.keys(users);
// // console.log(array);
// // const array1 = Object.values(users);
// // console.log(array1);

// // const array2 = Object.entries(users);
// // console.log(array2);
// let users = [
//     { id: 1, name: 'Hung', age: 17, role: 'admin' },
//     { id: 32, name: 'HungThu2', age: 71, role: 'admin' },
//     { id: 65, name: 'Dung', age: 21, role: 'user' },
//     { id: 87, name: 'Quy', age: 99, role: 'user' },
//     { id: 123, name: 'Chi', age: 8, role: 'user' },
// ];
let arr=[];
for(let i=0; i<users.length; i++) {
    let tmp={};
    tmp[users[i].id.toString()]= users[i];
    arr.push(tmp);
}
console.log(arr);