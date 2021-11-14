import React, { useEffect, useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import Arrow from "./../product/Arrow";
import Product from "./../product/Product";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Products() {
  const [selected, setSelected] = useState([]);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const idToken = sessionStorage.getItem("token");

    const requestBody = {
      query: `
          query {
            products {
       rating
        title
        _id
              name
              size
              color
              category
               img
              description
              price
              gender
             brand
            }
          }
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
        setProducts(resData.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="my-4 p-4">
      <p className="text-2xl font-semibold border-b-2 m-4 p-2 uppercase  font-serif text-teal-900">
        Top of this week
      </p>

      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {products.map((product) => (
          <Product
            itemId={product.title}
            title={product.title}
            key={product.title}
            product={product}
          />
        ))}
      </ScrollMenu>
    </div>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      <ArrowBackIosIcon />
    </Arrow>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
      <ArrowForwardIosIcon />
    </Arrow>
  );
}

export default Products;
