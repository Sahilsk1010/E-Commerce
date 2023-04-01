const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const { route } = require('./auth');

router.post("/",async(req,res)=>{
    const newCart = new Cart(req.body);
    try{
        const savedcart = await newCart.save();
        res.json(savedcart);
    }catch(err){
        console.log(err);
    }
});
router.put("/:id",async(req,res)=>{
  
    try{
        const updatedcart = await Cart.findByIdAndUpdate(req.params,{$set:req.body},{new:true});
        res.json(updatedcart);

    }catch(err){
        console.log(err);
    }
    
});

router.delete("/product/:id",async(req,res)=>{
    try{
        const deletedcart = await Cart.findByIdAndDelete(req.params.id);
        res.json(deletedcart);
    }catch(err){
        console.log(err);
    }
});

router.get("/products/:userid",async(req,res)=>{
    try{
        const fcart = await Cart.findOne({_id:req.params.userid});
        res.json(fproduct);
    }catch(err){
        console.log(err);
    }
});



module.exports = router;