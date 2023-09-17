import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Detail = (props) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteProduct=(id) =>{
    axios.delete(`http://localhost:8000/api/products/${id}`)
    .then( res => {
        console.log(res.data);
        navigate("/products")
        
    })
    .catch( err => console.log(err) );

}
  return (
    <div>
      <h3>{product.title}</h3>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <button onClick={ (e) => deleteProduct(product._id)}>Delete</button>
    </div>
  );
};
export default Detail;
