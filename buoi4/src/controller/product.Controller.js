// const data = require("../data/fileData");

// const gethome = (req, res) => {
//     // console.log(data);
//     res.render('products.ejs',{data});
// }
const gethome1 = (req, res) => {
    res.render('add-product.ejs');
}
module.exports = {
    gethome1
}