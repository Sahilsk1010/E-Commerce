import React from "react";
import Navbar from "../Components/Navbar";
import styled from "styled-components";
import mantaps from "./mantapdata";
import Product from "./Product";
import Footer from "./Footer";
import Newsletter from "./Newsletter";
import T_shirts from "./T-shirts";


const Container = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-between;
align-items:center;
`
const Heading = styled.h1`
text-align:center;
color:red;
padding:22px;
font-size:43px;
`
const TShirts = ()=>{
    return(
        <div>
        <Heading>T-Shirts</Heading>
        <Container>
        {T_shirts.map((tshirt)=>{
            return <Product item={tshirt} key={tshirt.key}/>
        })}

        </Container>

        </div>
        
    )
}
export default TShirts;