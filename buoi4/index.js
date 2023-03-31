const express = require('express');
const app = express()
const port = 4000
const path = require('path'); 
const router = require("./src/router/index");
// app.get('/', (req, res) => {
//     res.sendFile(__dirname+'/index1.html');
// })
// app.get('/dangki', (req, res) => {
//     res.sendFile(__dirname + '/dangki.html');
// })
app.use('/static',express.static(path.join(__dirname,"src/public")));
app.use(express.static(path.join(__dirname, "src/public")));
app.set("views",path.join(__dirname,"src/views"));
app.set("view engine","ejs");
app.use(router);
app.listen(port,()=>{
    console.log("Alo");
})