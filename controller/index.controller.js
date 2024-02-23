const products= require('../data/products')
module.exports =(req,res)=>{
        res.render('index',{product: products,})
    }