// const mongoose = require('mongoose');

// const passportLocalMongoose = require('passport-local-mongoose');

// // const userSchema = new mongoose.Schema({
// //   username: String,
// //   email: String,
// //   password: String
// // });

// // Add passport-local-mongoose plugin to user schema



// const userschema = new mongoose.Schema({
//     username:{
//         type:String,
//         required:true,
//         unique:true
//     },
//     email:{
//         type:String,
//         required:true,
//         unique:true
//     },
//     password:{
//         type:String,
//         required:true,
//         unique:true

//     }
// });
// userschema.plugin(passportLocalMongoose);


// const User = mongoose.model('User', userschema);

// module.exports = User;

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
 username:{
  type:String,
  required:true

 },
  email: {
    type: String,
    required: true,
  
  },
  password: {
    type: String
 
  }
});

userSchema.plugin(require('passport-local-mongoose'));

module.exports = mongoose.model('User', userSchema);
