
const data = require("../data/fileData");

// const getproduct = (req, res) => {
//     // console.log(data);

//     let products = data;
//     if(req.query.price) {
//         products = data.filter((item) => item.price <= +req.query.price);
//     }
//     console.log(products);
//     // res.render('products.ejs', { data: products });
//     res.json({
//         products,
//     })
// }
// const getproducts = (req, res) => {
//     // console.log(data);
//     const productId = req.params.productId;
//     console.log(req.params.productId);
//         // truy vaans tim 
//     let products = data;
//     if (req.params.productId) {
//         products = data.filter((item) => item.id == req.params.productId);
//     }
//     // res.render('products.ejs', { data: products });
//     res.json({products})
// }
// const addproduct = (req, res) => {
//     res.render('add-product.ejs');
// }
// const add = (req, res) => {
//     const product = req.body;
//     console.log(product);
//     res.json({
//         product: product
//     });
// }
// module.exports = {
//     getproduct, add, addproduct, getproducts
// }

const getProduct = (req, res) => {
    let product = data;
    console.log(data);
    // http://localhost:3000/product?price=55.99
    // http://localhost:3000/product?price=55.99&operator=lt
    if (req.query.price) {
        product = data.filter((item) => item.id > req.query.price);
    }
    res.json({ product })
}
const createProduct =(req,res) =>{
    let dataProduct = data;
    const {
        title = "null",
        price = 0,
        description = "null",
        category = "null",
        image = "null",
        rate = 0,
        count = 0
    } = req.body;
    const newProduct = { id: data.length + 1, title,price,description,category,image,rate,count};
    dataProduct.push(newProduct);
    res.json({dataProduct});
}
const getProductId = (req, res) => {
    // console.log(data);
    console.log(req.params.productId);
    let products = data;
    if (req.params.productId) {
        products = data.filter((item) => item.id == req.params.productId);
    }
    // res.render('products.ejs', { data: products });
    res.status(200).json({products})
}
const updateProductId = (req,res) =>{
    let products = data;
    let indexProduct = products.indexOf((item) => item.id == req.params.productID);
    const {
        title,
        price,
        description,
        category,
        image,
        rate,
        count
    } = req.body;
    if(indexProduct ==-1) {
        products[indexProduct] = {...products[indexProduct],title,price,description,category,image,rate,count};
        res.json(products);
    }
    else{
        res.status(404).json({message:"Product not found"});
    }
}
const deleteProductById = (req, res) => {
    let products = data;
    products = products.filter((item) => item.id !== req.params.productId);
    res.json(products);
};
module.exports = {
    getProduct,getProductId,createProduct,deleteProductById,updateProductId
}