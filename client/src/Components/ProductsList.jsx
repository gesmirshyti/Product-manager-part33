import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";

const ProductsList = (props) => {
  const [ products, setProducts ] = useState([]);
  const { updated, setUpdated } = props;

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/")
      .then((res) => setProducts(res.data));
  }, [updated]);

  const removeFromDom =productId =>{
    setProducts(products.filter(product=> product._id !== productId))
    
  }
  // const deleteProduct = (id) => {
  //   axios
  //     .delete(`http://localhost:8000/api/products/${id}`)
  //     .then((res) => {
  //       console.log(res.data);
  //       setUpdated(!updated);
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <div>
      <h2>All Products</h2>
      {products &&
        products.map((product, index) => {
          return (
            <div key={index}>
              <Link to={`/products/${product._id}`}>{product.title}</Link>
              <Link to={`/products/edit/${product._id}`}>
                <button>Edit</button>
              </Link>
              <DeleteButton productId={product._id} 
              successCallback = {() => removeFromDom(product._id)}>
                Delete
              </DeleteButton>
            </div>
          );
        })}
    </div>
  );
};
export default ProductsList;
