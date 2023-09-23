import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductForm = (props) => {
  const { updated, setUpdated,initialTitle,initialPrice,initialDescription, onSubmitProp } = props;
  const [title, setTitle] = useState(initialTitle);
  const [price, setPrice] = useState(initialPrice);
  const [description, setDescription] = useState(initialDescription);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({title,price,description})
    // axios
    //   .post("http://localhost:8000/api/products", {
    //     title,
    //     price,
    //     description,
    //   })
      // .then((res) => {
      //   console.log(res);
      //   console.log(res.data);
      //   setUpdated(!updated);
      // })
      // .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <p>
        <label>Title</label>
        <br />
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </p>
      <p>
        <label>Price</label>
        <br />
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </p>
      <p>
        <label>Description</label>
        <br />
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </p>
      <input type="submit" />
    </form>
  );
};
export default ProductForm;
