import React, { useState, useEffect } from "react";

import {
  FavoriteBorder,
  MenuOutlined,
  ShoppingCart,
} from "@mui/icons-material";
import styles from "./Topbar.module.css";
import CartDropdown from "../cartDropdown/CartDropdown";
import UserMenu from "../../../admin/adminDashboard/header/UserMenu";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../../../redux/actions/action";
import AutoSearch from "./AutoSearch";

const Topbar = () => {
  const [cartDropdown, setCartDropdown] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const store = useSelector((state) => state.store);

  return (
    <div class={styles.topbar}>
      <div class={styles.left_top}>
        <div class={styles.menu_icon} onClick={() => dispatch(toggleMenu())}>
          <MenuOutlined fontSize="large"></MenuOutlined>
        </div>
        <p class={styles.logo} onClick={() => history.push("/home")}>
          Jem's
        </p>
      </div>

      <div class={styles.searchOption}>
        <AutoSearch>/</AutoSearch>
      </div>
      <div class={styles.right_top}>
        <div className={styles.wishlist}>
          <p className={styles.wish_count}>{store?.favoriteProduct?.length} </p>{" "}
          <div className={styles.wishlist_icon}>
            <FavoriteBorder fontSize="large"></FavoriteBorder>
          </div>
        </div>
        <div
          className={styles.cart}
          onMouseEnter={() => setCartDropdown(true)}
          onMouseLeave={() => setCartDropdown(false)}
        >
          {" "}
          <p className={styles.cart_count}>{store?.cartProduct?.length} </p>
          <div className={styles.cart_icon}>
            <ShoppingCart fontSize="large"></ShoppingCart>

            {cartDropdown && (
              <div>
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: "20px solid transparent",
                    borderRight: "20px solid transparent",
                    borderBottom: "20px solid #0F172A",
                  }}
                ></div>

                <CartDropdown></CartDropdown>
              </div>
            )}
          </div>
        </div>
        <div className={styles.account}>
          <UserMenu user={store.user} />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
