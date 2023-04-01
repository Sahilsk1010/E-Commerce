
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Info = styled.div`
opacity:0;
width:100%;
height:100%;
position:absolute;
background-color:rgba(0,0,0,0.2);
top:0;
left:0;
z-index:3;
display:flex;
align-items:center;
justify-content:center;
transition:all 0.7s ease;
`;



const Container = styled.div`
flex:1;

margin:5px;
min-width:280px;
height:350px;
display:flex;
justify-content:center;
align-items:center;
background-color:#f5fbfd;
position:relative;
&:hover ${Info}{
    opacity:1;
}
`;
const Image = styled.img`
margin:5px;
height:60%;
background-color:#


`;
const Icon = styled.div`
width:40px;
height:40px;
display:flex;
border-radius:50%;
margin-right:10px;
background-color:white;
justify-content:center;
align-items:center;
transition:all 0.5sec ease;
&:hover{
    transform:scale(1.1);
}

`;

const Product = ({item})=>{
    return <Container>
        <Image src={item.img}/>
        <Info>
            <Icon>
            <a href="/api/Cart.jsx"><i class="fa-solid fa-cart-shopping"></i></a>

            </Icon>
            <Icon>
            <i class="fa-regular fa-heart"></i>
                    
            </Icon>
            <Icon>
            <Link to={"/product/"+item._id}><i class="fa-solid fa-magnifying-glass"></i></Link>
            </Icon>
        </Info> 
      
    </Container>

}
export default Product;