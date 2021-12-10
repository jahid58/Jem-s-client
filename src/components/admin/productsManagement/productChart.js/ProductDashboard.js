import React, { useState, useEffect } from "react";

// Import utilities
import { tailwindConfig } from "../../../../utils/Utils";
import AddProduct from "../addProduct/AddProduct";
import ProductChart from "./ProuductChart";

function ProductDashboard() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const requestBody = {
      query: `
          query {
            products {
              title
              name
           
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
  const data = [];
  const chartData = {
    labels: [
      "12-01-2020",
      "01-01-2021",
      "02-01-2021",
      "03-01-2021",
      "04-01-2021",
      "05-01-2021",
    ],
    datasets: [
      // Light blue bars
      {
        label: "Total items",
        data: [800, 1600, 900, 1300, 1950, 1700],
        backgroundColor: tailwindConfig().theme.colors.blue[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.blue[500],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      // Blue bars
      {
        label: "Total stocked product",
        data: [4900, 2600, 5350, 4800, 5200, 4800],
        backgroundColor: tailwindConfig().theme.colors.indigo[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="flex justify-between px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">
          Total items VS total stocked product
        </h2>
      </header>

      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <ProductChart data={chartData} width={595} height={248} />
    </div>
  );
}

export default ProductDashboard;
