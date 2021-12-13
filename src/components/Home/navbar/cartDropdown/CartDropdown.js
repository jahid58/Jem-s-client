import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CartDropdown = () => {
  const [products, setProducts] = useState([]);
  const { cartProduct } = useSelector((state) => state.store);
  const [totalCount, setTotalCount] = useState({});
  useEffect(() => {
    const total = cartProduct.reduce((total, pd) => (total += pd.price), 0);
    setTotalCount({
      subTotal: total,
      tax: total * 0.01,
      total: total + total * 0.1,
    });
  }, [cartProduct, products]);

  return (
    <div className=" max-width-full absolute  mt-2  md:right-4 shadow right-2 z-50  bg-gray-900 text-gray-100 rounded-md">
      <div className="h-full flex flex-col  shadow-xl ">
        <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6 px-2">
          <h4 className="text-lg font-medium ">Shopping cart</h4>

          <div className="mt-8 overflow-hidden h-52 overflow-y-scroll">
            <div className="flow-root">
              <ul role="list" className="-my-4 divide-y divide-gray-200">
                {cartProduct?.map((product) => (
                  <li key={product._id} className="py-6 flex ">
                    <div className="flex-shrink-0 w-20 h-20 border border-gray-200 rounded-md overflow-hidden">
                      <img
                        src={product.img}
                        alt=""
                        className="w-full h-full object-center object-cover"
                      />
                    </div>

                    <div className="mx-4 flex-1 flex flex-col">
                      <div>
                        <div className="flex justify-between  font-medium  ">
                          <p>
                            <a href="">{product.name}</a>
                          </p>
                          <p className="ml-4">{product.price} $</p>
                        </div>
                      </div>
                      <div className="mr-auto">
                        {" "}
                        <p className="mt-1 text-sm  ">{product.color[0]}</p>
                      </div>
                      <div className="flex-1 flex items-end justify-between text-sm">
                        <p className="">Qty : {product.quantity}</p>

                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium  hover:text-indigo-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
          <div className="flex justify-between text-base font-medium ">
            <p>Subtotal</p>
            <p>{totalCount.subTotal} $</p>
          </div>
          <div className="flex justify-between text-base font-medium ">
            <p>Tax</p>
            <p>{totalCount.tax?.toFixed(0)} $</p>
          </div>
          <div className="flex justify-between text-base font-medium ">
            <p>Total</p>
            <p>{totalCount.total?.toFixed(0)} $</p>
          </div>
          <p className="mt-0.5 text-sm ">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-4 flex justify-between">
            <Link
              to="/viewCart"
              className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Continue shopping
            </Link>

            <Link
              to="/viewCart"
              className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              View Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartDropdown;
