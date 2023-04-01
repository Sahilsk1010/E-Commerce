const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_KEY)
module.exports = router;


router.post("/payments",async(req,res)=>{
    stripe.charges.create({
        source:req.body.tokenId,
        amount:req.body.username,
        currency:"rupee",
    },(stripeErr,stripeRes)=>{
        if(stripeErr){
            res.status(500).json(stripeErr);
        }
        else{
            res.status(200).json(stripeRes);
        }
    })
})