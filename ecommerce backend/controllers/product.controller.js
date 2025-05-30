
const productModel= require('../models/product.model');
const addProduct=async(req,res)=>{
    console.log(req.body);
    res.send('product uploaded')
    

}





module.exports={addProduct}