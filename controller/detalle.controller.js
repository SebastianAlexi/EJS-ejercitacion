
module.exports =  (req,res)=>{
const products= require('../data/products')
const productId = req.params.id;
const searchId = products.find((product)=> product.id == productId);
res.render('detalleMenu',{product: searchId})
}
