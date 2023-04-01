
import React, { useState } from "react";
import styled from "styled-components";
import mobile from "../responsive";

const Container = styled.div`

width:100%;
height:100vh;
display:flex;
@media only screen and (max-width:320px){
    display:none;
}
position:relative;
overflow:hidden;

`;
const Arrow = styled.div`
height:50px;
width:50px;
display:flex;
align-items:center;
justify-content:center;
background-color:gray;
border-radius:50%;
position:absolute;
top:0;
bottom:0;
right:${props=>props.direction==="right" && "10px"}
margin:auto;



z-index:2;
opacity:0.5;




`

const Wrapper = styled.div`
height:100%;
display:flex;
transition:all 1.5s ease;
transform:translateX(${props=>props.slideIndex*-100}vw);


`
const Slide = styled.div`
display:flex;
align-items:center;
width:100vw;
height:100vh;
background-color:#E4DCCF;



`
const ImageContainer = styled.div`
height:100%
flex:1;
`
const Image = styled.img`
height:80%;
padding:60px;
background-color:#E4DCCF

`
const InfoContainer = styled.div`
flex:1;
padding:70px

`
const Title = styled.h1`
font-size:60px;
color:red;



`
const Desc = styled.p`
font-size:20px;
margin-top:30px;
color:#0E8388;
`

const Slides = ()=>{
    const [slideIndex,slidedire]=useState(0);
    const handelclick = (direction)=>{
        if(direction === "left"){
            slidedire(slideIndex>0?slideIndex-1:2);

        }else{
            slidedire(slideIndex<2?slideIndex+1:0);
        }


    }
    return <Container>
     <div class="lefts" onClick={()=>handelclick("left")}>
    <i class="fa-solid fa-arrow-left"></i>
    </div>

    <div class="rights" onClick={()=>handelclick("right")}>
    <i class="fa-solid fa-arrow-right"></i>
    </div>
    
        <Wrapper slideIndex={slideIndex}>
            <Slide bg="lightgrey">
                <ImageContainer>
                <Image src="https://th.bing.com/th/id/OIP.lY4mh_38wttsw_HFp1q0swHaEt?w=184&h=117&c=7&r=0&o=5&dpr=1.3&pid=1.7"></Image>
               
                   
                </ImageContainer>
                <InfoContainer>
                    <Title>Dharmik Pustak</Title>
                    <Desc>Make your knoweldge divine by reading the most important books of India..</Desc>
                </InfoContainer>
            </Slide>
            <Slide >
                <ImageContainer>
                
               
                <Image src="https://clipground.com/images/bhagwa-png-10.jpg"/>
               
                </ImageContainer>
                <InfoContainer>
                    <Title>Bhagwa Flag</Title>
                    <Desc>Be a Bhagwadhari Hindu and have a flag in your house...</Desc>
                </InfoContainer>
            </Slide>
            <Slide bg="BE6DB7">
                <ImageContainer>
                
                <Image src="https://th.bing.com/th/id/OIP.zObt_FCvzGmQBShMu_1tRAHaF6?w=246&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>

                   
                </ImageContainer>
                <InfoContainer>
                    <Title>Ghanti</Title>
                    <Desc>Copper Ghanti for home use. For the divine experience for pooja at home..</Desc>
                </InfoContainer>
            </Slide>
        </Wrapper>


        
        
       
    </Container>

}
export default Slides;