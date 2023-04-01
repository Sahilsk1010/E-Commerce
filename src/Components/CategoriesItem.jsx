
// import React,{useState,useEffect} from "react";
// import { Link,useNavigate,useParams} from "react-router-dom";


// import styled from "styled-components";
// import { useHistory } from "react-router-dom";

// const Container = styled.div`
// flex:1;
// min-width:280px;
// margin:7px;
// width:100%;
// height:70vh;
// display:flex;
// justify-content:center;
// align-items:center;

// position:relative;
// background-color:lightgrey;

// `


// const Image = styled.img`

// width:100%;
// height:100%;
// object-fit:cover;
// margin:5px;

// `
// const Info = styled.div`
// position:absolute;
// width:100%;
// height:100%;
// top:0;
// left:0;
// display:flex;
// flex-direction:column;
// align-items:center;
// justify-content:center;
// `
// const Title = styled.h1`
// color:#FF0032;
// margin-bottom:20px;
// `

// const Button = styled.button`
// border:none;
// height:35px;
// color:gray;
// cursor:pointer;
// `
// const CategoriesItem = ({ item }) => {
//     const navigate = useNavigate();
//     const [category, setCategory] = useState("");
//     const { categorySlug } = useParams();
    
//     // update the category state when categorySlug changes
//     useEffect(() => {
//       setCategory(categorySlug);
//     }, [categorySlug])
  
//     const handleShopNow = () => {
//       navigate(`/products/${item.categories}`);
//     };
  
//     return (
//     //   <Container>
//     //    <Link to={item.categories ? `/products/${item.categories}` : "/products"}>

//     //       <Image src={item.img} />
//     //       <Info>
//     //         <Title>{item.title}</Title>
//     //         <Button onClick={handleShopNow}>Shop Now</Button>
//     //       </Info>
//     //     </Link>
//     //   </Container>

    
//         <Container>
//           {category && (
//             <Link to={`/products/${category}`}>
//               <Image src={item.img} />
//               <Info>
//                 <Title>{item.title}</Title>
//                 <Button>Shop Now</Button>
//               </Info>
//             </Link>
//           )}
//         </Container>
      
      

//     );
//   };




    
    




// export default CategoriesItem;

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import axios from "axios";
import categories from "./data";

const Container = styled.div`
  flex: 1;
  min-width: 280px;
  margin: 7px;
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: lightgrey;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 5px;
`;

const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: #ff0032;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  height: 35px;
  color: gray;
  cursor: pointer;
`;


const CategoriesItem = ({item}) => {
  
  
 const cats = item.category;
 console.log(cats);

  return (
    <Container>
      
        <Link to={`/products/${cats}`}>
        {/* <Link to={`/products?category=${category.name.toLowerCase()}`}>{category.name} */}

          <Image src={item.img} />
          <Info>
            <Title>{item.title}</Title>
            <Button>Shop Now</Button>
          </Info>
          </Link>
    
    </Container>
      
  );
  
};

export default CategoriesItem;
