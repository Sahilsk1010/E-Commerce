import React from "react";
import Navbar from "../Components/Navbar";
import Announcement  from "../Components/Announcement";
import Slides from "../Components/Slides";
import Categories from "../Components/Categories";
import Products from "../Components/Products";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import Mantap from "../Components/Mantaps";
import Chains from "../Components/Chains";
import Clothes from "../Components/Traditonalwe";
import CategoriesItem from "../Components/Products";

const Rendring=()=>{
    return(
        <div>
            <Announcement/>
            <Navbar/>
            <CategoriesItem/>
            <Newsletter/>
            <Footer/>

            
        </div>
    )
}

export default Rendring ;