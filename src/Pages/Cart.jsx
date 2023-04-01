import React, { useState } from "react";
import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import mobile from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, decreaseQuantity, delecart, deleteproduct,increaseQuantity,increasequantity, updateprice, updatepricei } from "../redux/cartRedux";
import { useNavigate } from "react-router-dom";
import { set } from "mongoose";
import StripeCheckout from 'react-stripe-checkout';

const KEY = process.env.REACT_APP_STRIPE;



const Container = styled.div``;
const Wrapper = styled.div`

`;
const Title = styled.h1`
text-align:center;
${mobile({fontSize:"22px",margin:"10px"})}
`;
const Top = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
`;
const Button = styled.button`
margin:10px;
border:2px solid teal;
height:30px;
background-color:${props=>props.bg};
color:${props=>props.color};
cursor:pointer;
`;
const Containes = styled.div`
display:flex;


`;
const Cart1 = styled.span`
margin-right:10px;
${mobile({display:"none"})}
`;
const YourWhislist = styled.span`
${mobile({display:"none"})}
`;
const Product = styled.div`
display:flex;
align-items:space-evenly;
padding:10px;
${mobile({flexDirection:"column"})};

`;
const Details = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;
const Image = styled.img`
height:170px;
${mobile({width:"120px"})}

`;
const Productdetails = styled.div`
flex:2;
display:flex;


`;
const Name = styled.span`
margin:"10px"

`;
const Id = styled.span`
${mobile({marginRight:"7px"})}
`;


const Bottom = styled.div`
display:flex;
${mobile({flexDirection:"column"})};

justify-content:space-between;
`;
const Info = styled.div`
flex:1;
margin:10px;
`;
const Summary = styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
border:2px solid grey;


margin:20px;

`
const Pricedetails = styled.div`
flex:4;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
${mobile({margin:"5px 10px" })}
`;
const Pricet = styled.div`
display:flex;
justify-content:space-around;

`;
const Add = styled.p`
font-size:30px;
cursor:pointer;
${mobile({marginRight:"10px" })}
`


const Quantity = styled.p`
font-size:30px;
`;
const Minus = styled.p`
font-size:30px;
cursor:pointer;
${mobile({marginLeft:"10px" })}
`;
const Price = styled.p`
margin:10px;
font-size:30px;
`
const SummaryTitle = styled.h1``;
const Summaies = styled.div`
display:flex;
justify-content:space-between;

`;
const SummaryText = styled.p``;
const Hr  = styled.hr`
background-color:grey;
font-size:${props=>props.fs};
margin:30px;
`

const Cart = ()=>{
     let index;
     const [stripeToken,setStripeToken] = useState(null);
     const onToken = (token)=>{
      setStripeToken(token);

     }
     console.log(stripeToken);
    const navigate = useNavigate();
    const cart = useSelector(state=>state.cart);
    
    
    const dispatch = useDispatch();
    
     const KEY = "pk_test_51Ms1AESCYaXx8rc7H17ZGbeKhFEirqD6buuAQwiWvIpo9Q0n3phdn0oOPMA373QxlyHz35CLq8wG20EUtT744qhy00Gijp8fob";
    
      const handel = ()=>{
        navigate("/");
      }
      const handell = ()=>{
        navigate("/");
      }
    
    
    //     cart.quantity = cart.quantity - 1;
    // }
    
    return <Container>
    <Announcement/>
        <Navbar/>
        <Wrapper>
        <Title>Your Cart</Title>
        <Top>
            <Button bg="white" color="black" onClick={handell}>Continue Shopping</Button>
           
           
            <Containes>
                <Cart1>Your Cart-(2)</Cart1>
                <YourWhislist>Your Wishlist-(0)</YourWhislist>
            </Containes>
            <Button bg="black" color="white" onClick={handel}>Checkout</Button>
            </Top>
            <Bottom>
                <Info> 
                {cart.products.map(product=>(
                    
                        <Product>
                        <Productdetails>
                            <Image src={product.img}></Image>
                            <Details>
                                <Name><b>Product:</b> {product.title}</Name>
                                <Id><b>ID: </b>{product._id}</Id>

                            </Details>
                        </Productdetails>
                      <Pricedetails>
                      <Pricet>
                        <Add  onClick={()=>{
                             const id = product._id;
                          const index = cart.products.findIndex(product => product._id === id);
                          dispatch(
                            increaseQuantity(index)

                          )
                          dispatch(
                            updatepricei(cart.products[index].price)
                          )
                        }}><b>+</b></Add>
                        <Quantity>{product.quantity}</Quantity>
                        <Minus onClick={()=>{
                            const id = product._id;
                          const index = cart.products.findIndex(product => product._id === id);
                          dispatch(
                            decreaseQuantity(index)

                          )
                          dispatch(
                            updateprice(cart.products[index].price)
                          )
                        
                            
                        }}>-</Minus>
                        </Pricet>
                        <Price>₹ {product.price*product.quantity}</Price>
                        <Hr/>
                      </Pricedetails>
                   
                    </Product>
                   
                    
                    ))}

            
                    {/* <Product>
                        <Productdetails>
                            <Image src="https://th.bing.com/th/id/OIP.vGbSmoQ1OhqQX6gB2NyY6gHaFj?pid=ImgDet&rs=1"></Image>
                            <Details>
                                <Name><b>Product:</b> Bhagwa Flag</Name>
                                <Id><b>ID: </b>7589307389</Id>

                            </Details>
                        </Productdetails>
                      <Pricedetails>
                      <Pricet>
                        <Add><b>+</b></Add>
                        <Quantity>2</Quantity>
                        <Minus>-</Minus>
                        </Pricet>
                        <Price>₹ 2000</Price>
                      </Pricedetails>
                    </Product> */}
                </Info>
                <Summary>
                    <SummaryTitle>Order Summary</SummaryTitle>
                    <Summaies>
                        <SummaryText><b>Subtotal</b></SummaryText>
                        <SummaryText>₹ {cart.total}</SummaryText>
                    </Summaies>
                    <Summaies>
                        <SummaryText><b>Estimated Delivary Shipping</b></SummaryText>
                        <SummaryText>₹ 150</SummaryText>
                    </Summaies>
                    <Summaies>
                        <SummaryText><b>Taxex</b></SummaryText>
                        <SummaryText>{cart.total*0.18}</SummaryText>
                    </Summaies>
                    <hr/>
                    <Summaies>
                        <SummaryText fs="25px"><b>Total</b></SummaryText>
                        <SummaryText>₹ {cart.total}</SummaryText>
                    </Summaies>
                    <StripeCheckout
                    name="Om"
                    image="https://th.bing.com/th?id=OIP.dMpgFI92WrBdqOZBDIOqgAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    billingAddress
                    shippingAddress
                    description={`Your total is ₹${cart.total}`}
                    amount = {cart.total}
                    token={onToken}
                    stripeKey={KEY}>
                       <Button bg="black" color="white"
                        >Checkout</Button>
                    </StripeCheckout>

                </Summary>
                </Bottom>
                </Wrapper>
                </Container>
}

export default Cart;

  {/* <Product>
                <ImageeContainer>
                    <Image src="https://th.bing.com/th/id/OIP.vGbSmoQ1OhqQX6gB2NyY6gHaFj?pid=ImgDet&rs=1"></Image>
                </ImageeContainer>
                <Productdetails>
                    <Name>Product: Bhagwa Flag</Name>
                    <Id>Id: 890136892</Id>
                </Productdetails>
                <Pricenquantity>
                <Quantity>
                    <Add>+</Add> 
                    <Quantity1>2</Quantity1>
                    <Minus>-</Minus>
                    </Quantity>
                   <Price> ₹45</Price>
                </Pricenquantity>
            </Product> */}