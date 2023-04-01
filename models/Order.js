const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId:{type:String,required:true},
    products:[
        {
            productsId:{type:String,required:true},
            quantity:{type:Number,required:true,default:true}
        },
        
    ],
    amount:{type:Number,required:true},
    address:{type:String,required:true}
});
module.exports = OrderSchema;