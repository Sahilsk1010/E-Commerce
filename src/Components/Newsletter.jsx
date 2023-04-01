
import React from "react";
import styled from "styled-components";
import mobile from "../responsive";
const Container = styled.div`
height:60vh;
display:flex;
background-color:#fcf5f5;
justify-content:center;
align-items:center;
flex-direction:column;
${mobile({height:"40vh"})}

`
const Title = styled.h1`
font-size:60px;
${mobile({fontSize:"30px"})};
`;
const Des = styled.p`
margin:10px;
font-size:18px;
${mobile({fontSize:"10px"})}
`;
const Info = styled.div`
display:flex;
justify-content:center;
align-items:center;
border:1.5px solid;
height:30px;
margin:10px;



`;
const Input = styled.input`
width:300px;
padding:3px;

flex:8;
${mobile({width:"120px"})}
`;
const Button = styled.button`
border:none;
flex:1;
`;


const Newsletter = ()=>{
    return <Container>
    <Title>Newsletter</Title>
    <Des>Submit your email for regular updates</Des>
    
    <Info>
        <Input type="text" placeholder="Your Email"></Input>
        <Button>Submit</Button>
    </Info>
   



    </Container>
}
export default Newsletter;