import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ProductForm from "./ProductForm";
import DeleteButton from "./DeleteButton";


const ProductUpdate = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const updateProduct = () => {
    axios
      .patch(`http://localhost:8000/api/products/edit/${id}`,product)
      .then((res) => {
        console.log(res);
        navigate("/products");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Update a Product</h1>{
      loaded && <ProductForm  
      initialTitle={product.title} 
      initialPrice={product.price} 
      initialDescription={product.description} 
        onSubmitProp={updateProduct}  
      />
    }
    <DeleteButton productId ={id} successCallback ={() => navigate("/products")}/>
      </div>
  );
};
export default ProductUpdate;
