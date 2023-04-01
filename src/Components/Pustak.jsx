import React from "react";
import Navbar from "../Components/Navbar";
import styled from "styled-components";
import mantaps from "./mantapdata";
import Product from "./Product";
import Footer from "./Footer";
import Newsletter from "./Newsletter";
import Murtis from "./Murti";
import books from "./books";

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

const Books = ()=>{
    return <div>
    <Heading>Murtis</Heading>
    <Container>
        {books.map(murti=>{
            return <Product item={murti} key={murti.id}/>
        })}
    </Container>
    </div>
    
}
export default Books;

