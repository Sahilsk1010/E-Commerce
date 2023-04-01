
// import React, { useState } from "react";
// import styled from "styled-components";
// import Navbar from "../Components/Navbar";
// import Announcement from "../Components/Announcement";
// import CategoriesItem from "../Components/Products";
// import Newsletter from "../Components/Newsletter";
// import Footer from "../Components/Footer";
// import mobile from "../responsive";
// import { useLocation } from "react-router-dom";
// const Container = styled.div`

// `;
// const Filter = styled.div`
// display:flex;

// `;
// const FilterText = styled.p`
// font-weight:600;
// ${mobile({fontSize:"12px"})}
// `;
// const FilterContainer = styled.div`
// margin:20px 10px; 
// display:flex;
// align-items:space-between;
// justify-content:space-between;

// `;


// const Select = styled.select`
// ${mobile({width:"50px"})}
// `;
// const Options = styled.option`
// ${mobile({fontSize:"10px"})}
// `
// const CategoriesItem = ({ item }) => {
//     const history = useHistory();
  
//     const handleShopNow = () => {
//       history.push(`/products/${item.categories}`);
//     };
  
//     return (
//       <Container>
//         <Link to={`/products/${item.categories}`}>
//           <Image src={item.img} />
//           <Info>
//             <Title>{item.title}</Title>
//             <Button onClick={handleShopNow}>Shop Now</Button>
//           </Info>
//         </Link>
//       </Container>
//     );
//   };
// export default PageList;

import React from "react";
import { useLocation } from "react-router-dom";
import CategoriesItem,{cats} from "../Components/CategoriesItem";
import ProductsList from "../Components/Products";
import Announcement from "../Components/Announcement";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import styled from "styled-components";


const Container = styled.div`
  /* your styling here */
`;

const PageList = ({item}) => {
  const location = useLocation();
  console.log(location.pathname);
  const  category = location.pathname.split("/")[2];
  console.log(category)
 
  return (
    <Container>
      <Announcement />
      <Navbar />
      {category ? <ProductsList category={category} /> : <CategoriesItem />}
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default PageList;
