import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { addFavorite, orders } from "../../redux/actions/action";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(orders(product));
  };
  const handleAddToFavorite = (product) => {
    dispatch(addFavorite(product));
  };
  const history = useHistory();
  return (
    <div class=" m-2  w-64  flex justify-center  text-gray-900">
      {product && (
        <div class="  shadow-lg rounded-xl p-4">
          <div class="flex flex-col">
            <div class="">
              <div
                class="w-full mb-3 cursor-pointer"
                onClick={() => history.push(`/singleProduct/${product._id}`)}
              >
                <img
                  src={product.img}
                  alt="product img"
                  className="w-56 h-44"
                />
              </div>
              <div class="flex-auto justify-evenly">
                <div class="flex flex-wrap ">
                  <div class=" flex-none text-sm flex items-center text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 text-yellow-400 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span class=" whitespace-nowrap mr-3">
                      {product.rating}
                    </span>
                    <span class="mr-2 ">India</span>
                  </div>
                  <div class="flex items-center justify-between  ">
                    <h2 class="text-lg mr-auto cursor-pointer text-yellow-200 hover:text-purple-500 truncate "></h2>
                    <div class="flex items-center bg-green-400 text-white text-xs px-2 py-1 ml-3 rounded-lg">
                      INSTOCK
                    </div>
                  </div>
                </div>
                <div
                  class="text-lg text-teal-700 hover:text-red-500 cursor-pointer hover:underline font-normal mt-1"
                  onClick={() => history.push(`/singleProduct/${product._id}`)}
                >
                  {product.title.slice(0, 50)}....
                </div>
                <div class="lg:flex  p-2  text-sm ">
                  <div class="flex-1 inline-flex ">
                    <span class="text-secondary whitespace-nowrap mx-1">
                      Size:
                    </span>
                    <div class="cursor-pointer ">
                      <span class="hover:text-yellow-500 p-1 py-0">S</span>
                      <span class="hover:text-yellow-500 p-1 py-0">M</span>
                      <span class="hover:text-yellow-500 p-1 py-0">L</span>
                      <span class="hover:text-yellow-500 p-1 py-0">XL</span>
                    </div>
                  </div>
                </div>
                <div class="flex  text-sm font-medium justify-around">
                  <button
                    class="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 "
                    onClick={() => handleAddToCart(product)}
                  >
                    <span>Add Cart</span>
                  </button>
                  <button class="transition ease-in duration-300 bg-gray-700 hover:bg-gray-800 border hover:border-gray-500 border-gray-700 hover:text-white  hover:shadow-lg text-gray-400 rounded-full w-9 h-9 text-center p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class=""
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </button>

                  <button
                    class="transition ease-in duration-300 bg-gray-700 hover:bg-gray-800 border hover:border-gray-500 border-gray-700 hover:text-white  hover:shadow-lg text-gray-400 rounded-full w-9 h-9 text-center p-1"
                    onClick={() => handleAddToFavorite(product)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
