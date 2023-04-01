import React from "react";
import Navbar from "../Components/Navbar";
import Announcement  from "../Components/Announcement";
import Slides from "../Components/Slides";
import Categories from "../Components/Categories";
import Products from "../Components/Products";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import Mantap from "../Components/Mantaps";
import Books from "../Components/Pustak";
import { useSelector } from "react-redux";
const Pustakss=()=>{
    
    return(
        <div>
            <Announcement/>
            <Navbar/>
            <Books/>
            <Newsletter/>
            <Footer/>

            
        </div>
    )
}
export default Pustakss;