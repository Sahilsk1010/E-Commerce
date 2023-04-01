const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    
    },
    des:{
        type:String,
        required:true,
    
    },
    img:{
        type:String,
        required:true,

    },
    categories:{
        type:String
    },
    price:{
        type:Number,
        required:true
    },
   
});

module.exports = mongoose.model("Product",ProductSchema);