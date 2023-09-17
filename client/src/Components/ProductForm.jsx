import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductForm = (props) => {
  const { updated, setUpdated } = props;
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/products", {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setUpdated(!updated);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <p>
        <label>Title</label>
        <br />
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
      </p>
      <p>
        <label>Age</label>
        <br />
        <input type="number" onChange={(e) => setPrice(e.target.value)} />
      </p>
      <p>
        <label>Description</label>
        <br />
        <input type="text" onChange={(e) => setDescription(e.target.value)} />
      </p>
      <input type="submit" />
    </form>
  );
};
export default ProductForm;
