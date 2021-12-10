import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import AdditionalInformation from "./additionalInformation/AdditionalInformation";
import ProductDetails from "./ProductDetails/ProductDetails";
const SingleProduct = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  useEffect(() => {
    const requestBody = {
      query: `
         
  query {
    
      dynamicSearch(searchObject:{topic:"_id",value:"${id}"}){
      name
      rating
      title
      size
      color
      category
       img
      description
      price
      gender
     brand
     material
     reviews{reviewer comment rating date}
     discount{discountMessage discountAmount discountPercentage}
     
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
        setProduct(resData.data.dynamicSearch[0]);
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
