import React, { useState } from "react";
import { Link } from "react-router-dom";
import colors from "tailwindcss/colors";
import {
  AccountCircle,
  FavoriteBorder,
  MenuOutlined,
  Search,
  ShoppingCart,
} from "@mui/icons-material";
import styles from "./Topbar.module.css";
import CartDropdown from "./../cartDropdown/CartDropdown";
import UserMenu from "./../../admin/adminDashboard/header/UserMenu";

const category = [{ name: "mens" }, { name: "woman" }, { name: "kids" }];
const Topbar = () => {
  const [searchDropdown, setSearchDropdown] = useState(false);
  const [cartDropdown, setCartDropdown] = useState(false);
  return (
    <div class={styles.topbar}>
      <div class={styles.left_top}>
        <div class={styles.menu_icon}>
          <MenuOutlined fontSize="large"></MenuOutlined>
        </div>
        <p class={styles.logo}> Jem's </p>
      </div>

      <div class={styles.searchOption}>
        <div
          class={styles.dropdown}
          onMouseEnter={() => setSearchDropdown(true)}
          onMouseLeave={() => setSearchDropdown(false)}
        >
          <button class={styles.dropdown_btn}> All categories</button>
          {searchDropdown && (
            <div class={styles.dropdown_content}>
              {category.map((dp) => (
                <Link class={styles.dropdown_link}> {dp.name} </Link>
              ))}
            </div>
          )}
        </div>

        <input
          class={styles.searchInput}
          type="text"
          placeholder="what you are looking for"
        />

        <div class={styles.searchIcon}>
          {" "}
          <Search> </Search>
        </div>
      </div>
      <div class={styles.right_top}>
        {" "}
        <div className={styles.wishlist}>
          <FavoriteBorder></FavoriteBorder>{" "}
        </div>
        <div
          className={styles.cart}
          onMouseEnter={() => setCartDropdown(true)}
          onMouseLeave={() => setCartDropdown(false)}
        >
          {" "}
          <ShoppingCart></ShoppingCart>
          {cartDropdown && <CartDropdown></CartDropdown>}
        </div>
        <div className={styles.account}>
          <UserMenu />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
