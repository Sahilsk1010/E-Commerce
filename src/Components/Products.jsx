import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";
import { useParams } from "react-router-dom";

const ProductsList = ({ category }) => {
  const categorys = useParams();
    const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`http://localhost:5000/api/products?category=${category}`);
      setProducts(response.data);
    };
    fetchProducts();
  }, [category]);

  return (
    <div>
      <h2>Products of category "{category}"</h2>
      {products.map((product) => (
        <div key={product._id}>
        <Product item = {product}/>
          {/* <img src={product.img} alt={product.title} />
         
          <p>Price: ${product.price}</p> */}
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
