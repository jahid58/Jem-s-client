import { Shield } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import styles from "./PublicReviews.module.css";
const PublicReviews = ({ review }) => {
  const reviewDate = review.date;

  return (
    <div className={styles.review_box}>
      <div className={styles.reviewer_profile}>
        {" "}
        <Avatar className={styles.reviewer_profile_avatar} />{" "}
        <p className={styles.reviewer}>{review.reviewer}</p>{" "}
        <Shield className={styles.reviewer_profile_shield} />{" "}
        <p>verified purchase </p>
      </div>
      <div className={styles.rating_star}>
        {Array(review.rating)
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
        <p className={styles.review_time}> {reviewDate}</p>
      </div>
      <p>{review.comment}</p>
    </div>
  );
};

export default PublicReviews;
