import React from "react";
import styles from "./AdditionalInformation.module.css";
import PublicReviews from "./../../glabalComponents/publicReviews/PublicReviews";
const AdditionalInformation = ({ product }) => {
  return (
    <div className={styles.main_container}>
      <p className={styles.additionalInformation_title}>
        Additional Information
      </p>
      <div className={styles.product_info_box}>
        <h1>{product.product_title}</h1>

        <div className={styles.product_short_info}>
          <p> - Product Type:{product.name} </p>
          <p> - Gender : {product.category}</p>
          <p> - Main Material : {product.brand}</p>
          <p> - Color : </p>
        </div>
        <div className={styles.product_description}>
          {" "}
          Product Description : {product.description}
        </div>
      </div>
      <div className={styles.product_reviews_box}>
        <h1> Rating and Reviews of {product.name}</h1>

        <div className={styles.rating}>
          <p> {product.rating} / 5 </p>
          <div className={styles.rating_star}>
            {Array(product.rating)
              .fill()
              .map((_, i) => (
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 text-yellow-400 my-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </p>
              ))}
          </div>
          <p>{product?.total_rating} Ratings</p>
        </div>
        <div className={styles.product_description}>{product.description}</div>
      </div>
      <div>
        {product.reviews?.map((review) => (
          <PublicReviews review={review} />
        ))}
      </div>
    </div>
  );
};

export default AdditionalInformation;
