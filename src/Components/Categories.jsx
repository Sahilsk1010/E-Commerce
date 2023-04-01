import React from 'react';
import categories from './data';
import styled from 'styled-components';
import CategoriesItem from './CategoriesItem';
import mobile from '../responsive';
const Container = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-between;
align-items:center;
${mobile({padding:"0px",marginTop:"13px",flexDirection:"column"})};
`;


const Categories = ()=>{
    return <Container>
    {categories.map(items=>{
        return <CategoriesItem item = {items}/>

    })}

    </Container>


}
export default Categories;