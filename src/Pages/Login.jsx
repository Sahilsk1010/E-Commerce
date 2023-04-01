import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Container = styled.div`

width:100vw;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
background:linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
    ),
    url("https://th.bing.com/th/id/OIP.WiicS-dPjsBcmbkqn60eBQHaEK?w=281&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7");



`;
const Wrapper = styled.div`

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border:5px solid teal;



`;

const Title = styled.h1`
font-weight:200;
color:#674188;
`;
const Input = styled.input`
margin:15px;
border:1px solid;
height:30px;
width:90%;
color:lightgrey;
`;
const Button = styled.button`
height:35px;
padding:10px;
margin-bottom:10px;
width:40%;
`;
const Form = styled.form`
`;

const Login = ()=>{
    const cart = useSelector(state=>state.cart);
    const navigate = useNavigate();
    const [formdata,setformdata] = useState({
        username:"",
        password:""
    });
    const handelchange = (event)=>{
        const {name,value} = event.target;
        setformdata({...formdata,[name]:value})

    };
    const handelsubmit = async (event)=>{
        event.preventDefault();
        try{
            const res = await axios.post("api/auth/login",formdata);
            console.log(res.data);
            navigate("/");
          
            alert("Thank you");
        }catch(err){
            console.log(err);
            alert("Wrong Credentials\n");
            navigate("/login");

        }

    }
    
    return <Container>
    <Wrapper>
    <form onSubmit={handelsubmit}>
        <Title>Create An Account</Title>
       
        {/* <Input placeholder="Username" onChange={handelchange} value={formdata.username}></Input>
      
        <Input placeholder="Password" onChange={handelchange} value={formdata.password}></Input> */}
        <Input placeholder="Username" name="username" onChange={(event) => handelchange(event)} value={formdata.username}></Input>
<Input placeholder="Password" name="password" onChange={(event) => handelchange(event)} value={formdata.password}></Input>

      
        <Button type="submit">Submit</Button>
        </form>
        <a href="/register">Not have an account</a>
    </Wrapper>
</Container>
}
export default Login;