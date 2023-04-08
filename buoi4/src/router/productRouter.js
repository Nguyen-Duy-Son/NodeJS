const express = require("express");
const {getProduct,getProductId,createProduct,deleteProductById,updateProductId } = require("../controller/product.Controller");
const router = express.Router();
router.get('/product', getProduct);
router.get('/product/:productId',getProductId);
router.post('/',createProduct);
router.put('/product/:productId',updateProductId);
router.delete('/product/:productId',deleteProductById)
module.exports = router;