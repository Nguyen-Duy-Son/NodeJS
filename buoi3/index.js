const express = require('express')
const app = express()
const port = 4000
var path = require('path'); 
app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index1.html');
})
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/dangnhap.html');
})
app.get('/dangki', (req, res) => {
    res.sendFile(__dirname + '/dangki.html');
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})