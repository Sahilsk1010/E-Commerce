const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    userId:{type:String,required:true},
    products:[
        {
            productsId:{type:String,required:true},
            quantity:{type:Number,required:true,default:true}
        },
        
    ]
});
module.exports = mongoose.model("Cart",CartSchema);