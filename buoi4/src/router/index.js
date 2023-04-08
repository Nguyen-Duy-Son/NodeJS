const express = require("express");
const { getproduct, add, addproduct, getproducts } = require("../controller/product.Controller");
const router = express.Router();
// app.get('/', (req, res) => {
//     res.sendFile(__dirname+'/index1.html');
// })
// app.get('/login', (req, res) => {
//     res.sendFile(__dirname + '/dangnhap.html');
// })
// app.get('/dangki', (req, res) => {
//     res.sendFile(__dirname + '/dangki.html');
// })
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })
// router.get('/',gethome1);
router.get('/product', getproduct);
router.get('/product/:productId', getproducts);
router.get('/add',addproduct);
router.post('/product', add);

module.exports = router;