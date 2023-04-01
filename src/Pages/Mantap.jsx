import React from "react";
import Navbar from "../Components/Navbar";
import Announcement  from "../Components/Announcement";
import Slides from "../Components/Slides";
import Categories from "../Components/Categories";
import Products from "../Components/Products";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import Mantap from "../Components/Mantaps";

const Mantaps=()=>{
    return(
        <div>
            <Announcement/>
            <Navbar/>
            <Mantap/>
            <Newsletter/>
            <Footer/>

            
        </div>
    )
}
export default Mantaps;