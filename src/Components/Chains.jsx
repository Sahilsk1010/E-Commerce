import React from "react";
import Navbar from "../Components/Navbar";
import styled from "styled-components";
import mantaps from "./mantapdata";
import Product from "./Product";
import Footer from "./Footer";
import Newsletter from "./Newsletter";
import Lockets from "./lockets";


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


const Chains = ()=>{
    return (
        <div>
        <Heading>Lockets</Heading>
        <Container>
        
      
       
        {Lockets.map(mantap=>{
            return <Product item = {mantap} key={mantap.id}/>
        })}
      
        
        </Container>
        </div>
    )

}
export default Chains;