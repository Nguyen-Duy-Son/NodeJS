// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res) => res.json())
//     .then((result) => console.log(result))
//     .catch((err) => console.error(err));
//const response = await fetch(resource[, options]);
// var api ='https://jsonplaceholder.typicode.com/users';
async function get(){
    
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');// phản hồi
        // fetch()-> trả về promise   
        const data = await response.json();
        // .json(): phương thức của phản hồi -> trả về promise .(KIỂU DỮ LIỆU JS)
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}
get();