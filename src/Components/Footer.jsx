import React from "react";
import styled from "styled-components";
import mobile from "../responsive";
const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:#FFF4E0;

`;
const Contact = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`;
const Titile = styled.h1`
margin:15px;
${mobile({fontSize:"20px"})}
`;
const Desc = styled.p`
margin:10px;
padding:10px;
width:30%;
${mobile({width:"80%",fontSize:"12px"})}
`;
const SocialMediam = styled.div`
display:flex;
align-items:center;
justify-content:center;
margin:15px;
`;
const SocialIcons = styled.div`
margin:15px;
`

const Footer = ()=>{
    return <Container>
        <Contact>
        <Titile>Address</Titile>
        <i class="fa-solid fa-location-dot" ></i>

           
            <Desc>Street:  391, Parnakutir, S.v Road, Vile Parle(w)

City:   Bangalore

State/province/area:    Karnataka

Phone number  02226141147

Zip code  400056

Country calling code  +91

Country  India</Desc>
        </Contact>
        <SocialMediam>
            <SocialIcons>
            <i class="fa-brands fa-facebook"></i>

            </SocialIcons>
            <SocialIcons>
            <i class="fa-brands fa-instagram"></i>
                
            </SocialIcons>
            <SocialIcons>
            <i class="fa-brands fa-twitter"></i>
                
            </SocialIcons>
        </SocialMediam>
    </Container>
}
export default Footer;