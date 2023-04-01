// const express = require('express');
// const bodyParser = require('body-parser');
// const dotenv = require('dotenv');
// dotenv.config();

// const app = express();
// app.use(bodyParser.urlencoded({extended:true}));

// const mongoose = require('mongoose');

// app.use(express.static('public'));
// mongoose.connect('mongodb://127.0.0.1:27017/shoppingdb');
// // app.use("/api",userr
// const auth = require('./router/auth');
// const bodyParser = require('body-parser');
// const express = require('express');
// const app = express();

// const mongoose = require('mongoose');

// app.use(bodyParser.urlencoded({extended:true}));

// app.use(express.json());


// mongoose.connect('mongodb://127.0.0.1:27017/shoppingdbs?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0')
// mongoose.connection.on('connected', () => {
//     console.log('Connected to MongoDB!');
//   });

// app.use("/api/auth",auth);
// app.use("/api",userrst);


// app.listen(3000,()=>{
//     console.log("Server is running at port 3000");
// });

// const userrst = require("./router/users");
// const auth = require('./router/auth');
// const bodyParser = require('body-parser');
// const express = require('express');
// const app = express();

// const mongoose = require('mongoose');

// app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.json());

// mongoose.connect('mongodb://127.0.0.1:27017/shoppingdbs?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0');
// mongoose.connection.on('connected', () => {
//   console.log('Connected to MongoDB!');
// });

// app.use("/api/auth",auth);
// app.use("/api",userrst);

// app.listen(3000,() => {
//   console.log("Server is running at port 3000");
// });

const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors')

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

const userrst = require("./router/users");
const auth = require('./router/auth');
const product = require('./router/product');
const cart = require('./router/Cart');


const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shoppingdb').then(()=>console.log("Database Connected Successful")).catch((err)=>console.log(err));

app.use(express.static('public'));
app.use(express.json());
app.use(cors());
app.use("/api/auth", auth);
app.use("/api", userrst);
app.use("/api",product);
app.use("/cart",cart);

app.listen(5000,()=>{
    console.log("Server is running at port 5000");
});
