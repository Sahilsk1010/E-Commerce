const express = require('express');
const router = express.Router();
const User = require('../models/user');
const session = require('express-session');
const passport = require('passport');

const passportlocalmongoose = require('passport-local-mongoose');


router.use(session({
  secret:"Sahil Sanjeev Kulkarni",
  resave:false,
  saveUninitialized:false
}));


router.use(passport.initialize());
router.use(passport.session());
passport.use(User.createStrategy());

passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, {
        id: user.id,
        username: user.username,
        picture: user.picture
      });
    });
  });
  
  passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, user);
    });
  });

  router.post("/register",(req,res)=>{
    User.register({username:req.body.username,email:req.body.email},req.body.password,function(err,user){
      if(err){
        console.log(err);
      }else{
        passport.authenticate("local")(req,res,function(){
          res.json({message:"Authentication Successful"});
        })
      }
    })
  });
 

  router.post("/login",(req,res)=>{
    const newuser = new User({
      username:req.body.username,
      password:req.body.password
    });
    req.login(newuser,function(err){
      if(err){
        console.log(err);
      }else{
        passport.authenticate("local")(req,res,function(){
          res.send("Congrats You have your account");
         
        });
      }
    });

  });
module.exports = router;



