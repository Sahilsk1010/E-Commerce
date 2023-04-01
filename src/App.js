import React from "react";

import Home from './Pages/Home'
import PageList from "./Pages/PageList";
import Productitem from "./Pages/Productitem";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import Mantap from "./Components/Mantaps";
import { BrowserRouter as Router, Routes, Route,Navigate } from  "react-router-dom";
import Mantaps from "./Pages/Mantap";
import bphoto from "./Components/bphoto";


import Rendring from "./Pages/Pages";
import CategoriesItem from "./Components/Products";
import ProductsList from "./Components/Products";
import Payment from "./Pages/Payment";


const App = (item)=>{
  const user = true
  const id=1;
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products/:category" element={<PageList/>}/>
      <Route exact path="/" component={PageList} />
      {/* <Route path="/products/:category" component={CategoriesItem} /> */}
      <Route path="/productitem" element={<Productitem/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/products/Mantaps" element={<Mantap/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/product/:id" element={<Productitem />}/>
      

      


      
      
      
      
    </Routes>
  </Router>
  )
      

}
export default App;