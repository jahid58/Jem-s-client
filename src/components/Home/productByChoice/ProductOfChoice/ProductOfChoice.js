import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { orders } from "../../../../redux/actions/action";
import ProductCard from "../../../globalComponents/publicReviews/ProductCard";

function ProductOfChoice() {
  const [products, setProducts] = useState([]);
  const loc = useLocation();
  const history = useHistory();

  // const [requestBody,setRequestBody] = useState([])

  useEffect(() => {
    const pathname = history.location.pathname.split("/");
    let pathStartBy = pathname[1];
    if (pathStartBy === "type") {
      pathStartBy = "name";
    }
    const value = pathname[2]?.toLowerCase();

    let requestBody = {};

    if (pathStartBy === "gender" || "name" || "price" || "size" || "color") {
      requestBody = {
        query: `
      query {
        dynamicSearch(searchObject:{topic:"${pathStartBy}",value:"${value}"}){
          _id
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
    } else {
      requestBody = {
        query: `
      query {
        products{
          _id
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
    }

    fetch("https://jems-server1.herokuapp.com/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())

      .then((resData) => {
        setProducts(resData.data.dynamicSearch);
        console.log(products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loc.pathname]);

  return (
    <div className="my-4 flex flex-wrap  overflow-y-scroll">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}

export default ProductOfChoice;
