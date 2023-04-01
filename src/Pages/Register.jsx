// import React from "react";
// import styled from "styled-components";
// import mobile from "../responsive";
// const Container = styled.div`

// width:100vw;
// height:100vh;
// display:flex;
// justify-content:center;
// align-items:center;
// background:linear-gradient(
//     rgba(255,255,255,0.5),
//     rgba(255,255,255,0.5)
//     ),
//     url("https://th.bing.com/th/id/OIP.WiicS-dPjsBcmbkqn60eBQHaEK?w=281&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7");



// `;
// const Wrapper = styled.div`

// display:flex;
// flex-direction:column;
// justify-content:center;
// align-items:center;
// border:5px solid teal;
// ${mobile({height:"90vh"})};



// `;

// const Title = styled.h1`
// font-weight:200;
// color:#674188;
// `;
// const Input = styled.input`
// margin:15px;
// border:1px solid;
// height:30px;
// width:90%;
// `;
// const Button = styled.button`
// height:35px;
// padding:10px;
// margin-bottom:10px;
// width:40%;
// `;

// const register = ()=>{
//     return <Container>
//         <Wrapper>
//             <Title>Create An Account</Title>
//             <Input placeholder="First Name"></Input>
//             <Input placeholder="Last Name"></Input>
//             <Input placeholder="Email"></Input>
//             <Input placeholder="Address"></Input>
//             <Input placeholder="Password"></Input>
//             <Input placeholder="Confirm Password"></Input>
//             <Button>Submit</Button>
//         </Wrapper>
//     </Container>
// }
// export default register;

import React, { useState } from "react";
import styled from "styled-components";
import mobile from "../responsive";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://th.bing.com/th/id/OIP.WiicS-dPjsBcmbkqn60eBQHaEK?w=281&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7");
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 5px solid teal;
  ${mobile({ height: "90vh" })};
`;

const Title = styled.h1`
  font-weight: 200;
  color: #674188;
`;

const Input = styled.input`
  margin: 15px;
  border: 1px solid;
  height: 30px;
  width: 90%;
`;

const Button = styled.button`
  height: 35px;
  padding: 10px;
  margin-bottom: 10px;
  width: 40%;
`;

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", formData);
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Create An Account</Title>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          ></Input>
          <Input
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          ></Input>
          <Input
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          ></Input>
          <Input
            placeholder="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          ></Input>
           <Input
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          ></Input>
          <Input
            placeholder="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          ></Input>
          <Input
            placeholder="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
          ></Input>
          <Button type="submit">Submit</Button>
        </form>
      </Wrapper>
    </Container>
  );
};

export default Register;
