
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../Components/Navbar';
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Newsletter from '../Components/Newsletter';
import mobile from '../responsive';
import Product from '../Components/Product';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { addProduct } from '../redux/cartRedux';
import { useDispatch, useSelector } from 'react-redux';

const Container = styled.div
``;
const Wrapper = styled.div`
display:flex;
align-items:center;
justify-content:center;
${(mobile({flexDirection:"column"}))};

`;
const ImageContainer = styled.div``;
const Image = styled.img`
height:90vh;
`;
const Info = styled.div``;
const Title = styled.h1`
font-weight:200;
${mobile({fontSize:"25px",textAlign:"center"})};
`;
const Desc = styled.p`
margin:10px;
font-size:18px;
${(mobile({textAlign:"center"}))};
`;
const AddItem = styled.div`
margin:15px 10px;
display:flex;
align-items:center;
justify-content:space-evenly;
${mobile({flexDirection:"column",justifyContent:"space-around"})};
`;
const Price = styled.h4`
font-size:21px;
font-weight:200;
${mobile({fontSize:"16px"})};
`;
const Button = styled.button`
height:50px;
width:90px;
border:2px solid teal;
${mobile({height:"30px",margin:"12px"})};

`;
const Prc = styled.div`
display:flex;
${mobile({margin:"12px"})};

`
const Para = styled.div`
font-size:20px;
${mobile({fontSize:"16px"})};
`;
const Noitems = styled.div`
display:flex;
align-items:center;
justify-content:space-evenly;
$

`
const Minus = styled.p`
font-weight:600;
font-size:23px;
cursor:pointer;

`;
const Plus = styled.p`
font-weight:600;
font-size:19px;
cursor:pointer;

`;
const Quantity = styled.p`
font-weight:600;

margin:auto;

`;
const M = styled.div`
height:30px;
width:30px;
border-radius:50%;

background-color:gray;

`

const Productitem = ()=>{
    const cart = useSelector(state=>state.cart);
    console.log(cart.quantity);
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const [item,setItem] = useState(null);
    const [quantity,setquantity] = useState(1);
    const dispatch = useDispatch();
    console.log(item)
    const handelclick = (type)=>{
        if(type === "dec"){
           quantity>1 && setquantity(quantity - 1);
        }
        else{
            setquantity(quantity + 1);
        }
    }

    const handelcart = ()=>{
        dispatch(
            addProduct({...item,quantity})
        )
        
        
    }
        useEffect(()=>{
            const fetchdata = async ()=>{
                const response = await axios.get(`http://localhost:5000/api/products/${id}`);
                console.log(response.data)
                setItem(response.data);
            }
            if(!item){
                fetchdata();
        }
        },[item])

        

    

    

    return <Container>
    <Announcement/>
    <Navbar/>
    <Wrapper>
        {(item===null)?null:(
            <>
        <ImageContainer>
            <Image src={item.img}></Image>
        </ImageContainer>
            <Info>
            <Title>{item.title}</Title>
            <Desc>{item.des}</Desc>
            <AddItem>
            <Noitems>
                <M><Minus onClick={()=>handelclick("dec")}>-</Minus></M>
                <Quantity>{quantity}</Quantity>
                <M><Plus onClick={()=>handelclick("inc")}>+</Plus></M>
            </Noitems>

            <Prc>
            <Para >Price:</Para>
            <Price>₹{item.price}</Price>
            </Prc>
           
                
                <Button onClick={handelcart}>Add To Cart</Button>
               
            </AddItem>
           
        </Info>
        </>
        )}
    </Wrapper>
    <Newsletter/>
    <Footer/>
    
        
    </Container>
}
export default Productitem 