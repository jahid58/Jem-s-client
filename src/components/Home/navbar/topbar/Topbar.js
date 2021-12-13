import React, { useState, useEffect } from "react";

import {
  FavoriteBorder,
  MenuOutlined,
  Search,
  ShoppingCart,
} from "@mui/icons-material";
import styles from "./Topbar.module.css";
import CartDropdown from "../cartDropdown/CartDropdown";
import UserMenu from "../../../admin/adminDashboard/header/UserMenu";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../../../redux/actions/action";

const Topbar = () => {
  const [searchedInput, setSearchedInput] = useState("");
  const [cartDropdown, setCartDropdown] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();
  const store = useSelector((state) => state.store);

  const handleSearch = (data) => {
    history.push(`/type/${data}`);
  };
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
        <input
          class={styles.searchInput}
          type="text"
          placeholder="what you are looking for"
          onMouseMove={(e) => setSearchedInput(e.target.value)}
        />

        <div
          class={styles.searchIcon}
          onClick={() => handleSearch(searchedInput)}
        >
          {" "}
          <Search> </Search>
        </div>
      </div>
      <div class={styles.right_top}>
        <div className={styles.wishlist}>
          <FavoriteBorder></FavoriteBorder>
        </div>
        <div
          className={styles.cart}
          onMouseEnter={() => setCartDropdown(true)}
          onMouseLeave={() => setCartDropdown(false)}
        >
          <p className={styles.cart_count}>{store.cartProduct?.length} </p>
          <div className={styles.cart_icon}>
            <ShoppingCart></ShoppingCart>
            {cartDropdown && <CartDropdown></CartDropdown>}
          </div>
        </div>
        <div className={styles.account}>
          <UserMenu user={store} dispatch={dispatch} />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
