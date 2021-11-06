import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styles from "./ProductDetails.module.css";
import {
  CropSquareSharp,
  HomeOutlined,
  LocationOn,
  LoopOutlined,
  MoneyOff,
  MoneyRounded,
} from "@mui/icons-material";

const ProductDetails = ({ product }) => {
  return (
    <div>
      {product && (
        <div className={styles.container}>
          <div className={styles.img_box}>
            <img src={product.img} alt="Products" />
          </div>
          <div className={styles.second_box}>
            {" "}
            <p className={styles.title}>{product.title}</p>
            <div className={styles.short_info_box}>
              <div className={styles.rating}>
                {Array(product.rating)
                  .fill()
                  .map((_, i) => (
                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 text-yellow-400 my-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </p>
                  ))}
              </div>
              <p className={styles.short_info}>{product.rating}</p>
              <p className={styles.short_info}>Brand: {product.brand}</p>
              <p className={styles.short_info}>{product.brand}</p>
            </div>
            <p className={styles.price}>$ {product.price} </p>
            <div className={styles.quantity}>
              quantity :
              <select>
                <option value="1" defaultValue>
                  1
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="2">8</option>
                <option value="3">9</option>
                <option value="4">10</option>
                <option value="5">11</option>
                <option value="6">12</option>
                <option value="7">13</option>
                <option value="5">14</option>
                <option value="6">15</option>
                <option value="7">16</option>
                <option value="2">17</option>
                <option value="3">18</option>
                <option value="4">19</option>
                <option value="5">20</option>
              </select>
            </div>
            <div className={styles.color_container}>
              <p className={styles.color_heading}>Colors</p>
              <div className={styles.colors_box}>
                {product.color?.map((cl) => (
                  <div className={styles.common_box}>{cl}</div>
                ))}
              </div>
            </div>
            <div className={styles.size_container}>
              <p className={styles.size_heading}>Size</p>
              <div className={styles.sizes_box}>
                {product.size?.map((sz) => (
                  <div className={styles.common_box}>{sz}</div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.third_box}>
            <div className={styles.delivery_details}>
              <p className={styles.delivery_heading}>Delivery options</p>
              <div className={styles.option_boxes}>
                <div className={styles.location_box}>
                  {" "}
                  <LocationOn className={styles.delivery_box_icons} />{" "}
                  <p>Location</p>{" "}
                </div>
                <div class={styles.home_delivery_box}>
                  <div>
                    <div className={styles.home_delivery_title}>
                      {" "}
                      <HomeOutlined
                        className={styles.delivery_box_icons}
                      />{" "}
                      <p>Home Delivery</p>
                    </div>
                    <p className={styles.home_delivery_time}>7-8 days </p>
                  </div>
                  <p className={styles.home_delivery_fees}>$ 35</p>
                </div>
                <div className={styles.cash_on_delivery}>
                  <MoneyRounded className={styles.delivery_box_icons} />{" "}
                  <p>Cash on delivery available</p>
                </div>
              </div>
            </div>
            <div className={styles.total_cost}>
              <p>Total estimated cost : </p> <p>$ 234</p>
            </div>
            <div class={styles.return_warranty_box}>
              <p className={styles.return_warranty_title}>
                {" "}
                Return and warranty
              </p>

              <div className={styles.return_time_box}>
                <div className={styles.return_time}>
                  <LoopOutlined className={styles.delivery_box_icons} />{" "}
                  <h6>7 Days Returns</h6>{" "}
                </div>
                <p className={styles.change_off_mind}>
                  {" "}
                  change of mind not available
                </p>
              </div>
              <div className={styles.warranty_time_box}>
                <CropSquareSharp className={styles.delivery_box_icons} />{" "}
                <p> Warranty not available</p>
              </div>
            </div>{" "}
            <div className={styles.delivery_option_btns}>
              <button className={styles.buy_now_btn}> Buy Now</button>
              <button className={styles.add_cart_btn}>Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
