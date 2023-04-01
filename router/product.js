const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { route } = require('./auth');

router.post("/product",async(req,res)=>{
    const newproduct = new Product(req.body);
    try{
        const savedproduct = await newproduct.save();
        res.json(savedproduct);
    }catch(err){
        console.log(err);
    }
});
router.put("/:id",async(req,res)=>{
  
    try{
        const updatedproduct = await Product.findByIdAndUpdate(req.params,{$set:req.body},{new:true});
        res.json(updatedproduct);

    }catch(err){
        console.log(err);
    }
    
});

router.delete("/product/:id",async(req,res)=>{
    try{
        const deletedproduct = await Product.findByIdAndDelete(req.params.id);
        res.json(deletedproduct);
    }catch(err){
        console.log(err);
    }
});

router.get("/products/:id",async(req,res)=>{
    try{
        const fproduct = await Product.findById(req.params.id);
        console.log(fproduct)
        res.json(fproduct);
    }catch(err){
        console.log(err);
    }
});
// router.get("/products",async(req,res)=>{
//     const qNew = req.query.new;
//     const qCategory = req.query.category
//     try{
//         let products;
//         if(qNew){
//             products = await Product.find().sort({createdAt:-1}).limit(1);
//         }else if(qCategory){
//             products = await Product.find({categories:{
//                 $in:[qCategory]
//             }})
//         }else{
//             products = await Product.find();
//         }
//         res.json(products);

//     }catch(err){
//         console.log(err);
//     }
    
// })


router.get("/products",async(req,res)=>{
    const qCategory = req.query.category;
    console.log(qCategory);
    try{
        let products;
        if(qCategory){
            products = await Product.find({categories:qCategory});
        }
        else{
            products = await Product.find({});
        }
        res.status(200).json(products);
    }catch(err){
        console.log(err);
    }
    

});



module.exports = router;