import React from "react";
import Navbar from "../Components/Navbar";
import Announcement  from "../Components/Announcement";
import Slides from "../Components/Slides";
import Categories from "../Components/Categories";

import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import { useSelector } from "react-redux";

const Home = ()=>{
    
    return <div>
        <Announcement/>
        <Navbar/>
        <Slides/>
        <Categories/>
        
        <Newsletter/>
        <Footer/>
        
    </div>
    
}
export default Home;