import { menuItemClasses } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { megabarData } from "./MegabarItem";
import styles from "./MegaNavbar.module.css";
const MegaNavbar = () => {
  const [megaMenu, setMegaMenu] = useState([]);
  const [newArrival, setNewArrival] = useState(false);
  const [men, setMen] = useState(false);
  const [woman, setWoman] = useState(false);
  const [accessories, setAccessories] = useState(false);
  const [special, setSpecial] = useState(false);
  const [brands, setBrands] = useState(false);
  useEffect(() => {
    setMegaMenu(megabarData);
    return () => {};
  }, []);
  return (
    <div class={styles.megabar}>
      {megaMenu.length &&
        megaMenu.map((menuItem) => {
          if (menuItem.title === "New Arrival") {
            return (
              <div
                class={styles.menu}
                onMouseEnter={() => setNewArrival(true)}
                onMouseLeave={() => setNewArrival(false)}
              >
                <p class={menuItem.class}>{menuItem.title}</p>
                <div class={styles.dropdown}>
                  {" "}
                  {newArrival &&
                    menuItem.items &&
                    menuItem.items.map((item) => (
                      <div class={styles.dropdown_item}>
                        {" "}
                        <p>{item.title}</p>
                        <img src={item.menImg} alt="" />
                        <img src={item.womanImg} alt="" />
                        <img src={item.shopImg} alt="" />
                      </div>
                    ))}{" "}
                </div>
              </div>
            );
          }

          if (menuItem.title === "Mens") {
            return (
              <div
                class={styles.menu}
                onMouseEnter={() => setMen(true)}
                onMouseLeave={() => setMen(false)}
              >
                <p class={menuItem.class}>{menuItem.title}</p>
                <div class={styles.dropdown}>
                  {men &&
                    menuItem.items &&
                    menuItem.items.map((item) => (
                      <div class={styles.dropdown_item}>
                        <img src={item.img} alt="" />
                        <h6 class="">{item.title}</h6>
                        <div class=" p-2">
                          {item.items &&
                            item.items.map((it) => (
                              <div class="m-2 hover:underline">
                                <Link to={it}>{it}</Link>
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            );
          }
          if (menuItem.title === "Womans") {
            return (
              <div
                class={styles.menu}
                onMouseEnter={() => setWoman(true)}
                onMouseLeave={() => setWoman(false)}
              >
                <p class={menuItem.class}>{menuItem.title}</p>
                <div class={styles.dropdown}>
                  {" "}
                  {woman &&
                    menuItem.items &&
                    menuItem.items.map((item) => (
                      <div class={styles.dropdown_item}>
                        <img src={item.img} alt="" />
                        <h6 class="">{item.title}</h6>
                        <div class=" p-2">
                          {item.items &&
                            item.items.map((it) => (
                              <div class="m-2 hover:underline">
                                <Link to={it}>{it}</Link>
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            );
          }
          if (menuItem.title === "Accessories") {
            return (
              <div
                class={styles.menu}
                onMouseEnter={() => setAccessories(true)}
                onMouseLeave={() => setAccessories(false)}
              >
                <p class={menuItem.class}>{menuItem.title}</p>
                <div class={styles.dropdown}>
                  {" "}
                  {accessories &&
                    menuItem.items &&
                    menuItem.items.map((item) => (
                      <div class={styles.dropdown_item}>
                        <img src={item.Img} alt="" />
                        <p> {item.title}</p>
                      </div>
                    ))}{" "}
                </div>
              </div>
            );
          }
          if (menuItem.title === "Special Offers") {
            return (
              <div
                class={styles.menu}
                onMouseEnter={() => setSpecial(true)}
                onMouseLeave={() => setSpecial(false)}
              >
                <p class={menuItem.class}>{menuItem.title}</p>
                <div class={styles.dropdown}>
                  {" "}
                  {special &&
                    menuItem.items &&
                    menuItem.items.map((item) => (
                      <div class={styles.dropdown_item}>{item.title}</div>
                    ))}{" "}
                </div>
              </div>
            );
          }
          if (menuItem.title === "Brands") {
            return (
              <div
                class={styles.menu}
                onMouseEnter={() => setBrands(true)}
                onMouseLeave={() => setBrands(false)}
              >
                <p class={menuItem.class}>{menuItem.title}</p>
                <div class={styles.dropdown}>
                  {" "}
                  {brands &&
                    menuItem.items &&
                    menuItem.items.map((item) => (
                      <div class={styles.dropdown_item}>{item.title}</div>
                    ))}{" "}
                </div>
              </div>
            );
          }
        })}
    </div>
  );
};

export default MegaNavbar;
