const mongoose = require('mongoose');

const Paymentschema = new mongoose.Schema({
    userId:{
        type:String,
        
    },
    cardNumber:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model("Pay",Paymentschema);