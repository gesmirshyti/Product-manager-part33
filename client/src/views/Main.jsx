import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductForm from "../Components/ProductForm";
import ProductsList from "../Components/ProductsList";
// import DisplayAll from "../Components/DisplayAll";

const Main = (props) => {
  // const [products, setProducts] = useState([]);
  const [updated, setUpdated] = useState(false);
  const [productList, setProductList] = useState([]);
  

    useEffect(()=>{
      axios
      .get('http://localhost:8000/api/products/')
      .then(res=> {setProductList(res.data)})
      .catch(err=>console.log(err))
    },[])
  const removeFromDom = productId =>{
    axios
    .delete('http://localhost:8000/api/products/' + productId)
    .then((res)=>{
      console.log(res);
      setProductList(productList.filter(product => product._id !== productId));
    })
    .catch((err)=>console.log(err));
  }

  const createProduct = productParam =>{
    axios
    .post("http://localhost:8000/api/products/",productParam)
    .then(res=>{
      console.log(res.data);
      setProductList(...productList,res.data);
      setUpdated(!updated);
    })
    .catch((err)=>console.log(err))
  }

  return (
    <>
      <ProductForm
        // products={products}
        // setProducts={setProducts}
        setUpdated={setUpdated}
        updated={updated}
        onSubmitProp={createProduct}
        initialTitle=""
        initialPrice=""
        initialDescription=""
      />
      <hr />
      <hr />
      <ProductsList
        // products={products}
        // setProducts={setProducts}
        // setUpdated={setUpdated}
        // updated={updated}
      />
    </>
  );
};
export default Main;
