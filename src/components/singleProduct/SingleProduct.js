import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { store } from "./../../app/store";
import AdditionalInformation from "./additionalInformation/AdditionalInformation";
import ProductDetails from "./ProductDetails/ProductDetails";
const SingleProduct = () => {
  const { id } = useParams();
  const state = store.getState();
  const { user } = state;
  const [product, setProduct] = useState({});
  useEffect(() => {
    const requestBody = {
      query: `
         
  query {
    productById(_id:"${id}") {
      name
      rating
      title
      size
      color
      category
       img
      description
      price
      department
     brand
}}
                `,
    };

    fetch("https://jems-server1.herokuapp.com/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())

      .then((resData) => {
        setProduct(resData.data.productById);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <ProductDetails product={product} key={id} />
      <AdditionalInformation product={product} key={id} />
    </div>
  );
};

export default SingleProduct;
