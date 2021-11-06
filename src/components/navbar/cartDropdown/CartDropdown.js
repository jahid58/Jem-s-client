import { Fragment, useState } from "react";

import { Link } from "react-router-dom";
const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 3,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

const CartDropdown = () => {
  return (
    <div className="   max-width-full absolute  mt-2  md:right-4  right-2 z-50  bg-teal-900 text-white">
      <div className="h-full flex flex-col  shadow-xl ">
        <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6 px-2">
          <h4 className="text-lg font-medium ">Shopping cart</h4>

          <div className="mt-8 overflow-hidden h-52 overflow-y-scroll">
            <div className="flow-root">
              <ul role="list" className="-my-4 divide-y divide-gray-200">
                {products.map((product) => (
                  <li key={product.id} className="py-6 flex ">
                    <div className="flex-shrink-0 w-20 h-20 border border-gray-200 rounded-md overflow-hidden">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>

                    <div className="ml-4 flex-1 flex flex-col">
                      <div>
                        <div className="flex justify-between  font-medium  ">
                          <p>
                            <a href={product.href}>{product.name}</a>
                          </p>
                          <p className="ml-4">{product.price}</p>
                        </div>
                      </div>
                      <div className="mr-auto">
                        {" "}
                        <p className="mt-1 text-sm  ">{product.color}</p>
                      </div>
                      <div className="flex-1 flex items-end justify-between text-sm">
                        <p className="">Qty {product.quantity}</p>

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
            <p>$22.00</p>
          </div>
          <div className="flex justify-between text-base font-medium ">
            <p>Tax</p>
            <p>$284.00</p>
          </div>
          <div className="flex justify-between text-base font-medium ">
            <p>Total</p>
            <p>$262.00</p>
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
