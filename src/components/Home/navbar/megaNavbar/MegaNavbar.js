import { KeyboardArrowDown } from "@mui/icons-material";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { megabarData } from "./MegabarItem";
import styles from "./MegaNavbar.module.css";
import { useSelector, useDispatch } from "react-redux";

const MegaNavbar = () => {
  const isMenuOpen = useSelector((state) => state.store.isMenuOpen);

  const [megaMenu, setMegaMenu] = useState([]);
  const [newArrival, setNewArrival] = useState(false);
  const [men, setMen] = useState(false);
  const [woman, setWoman] = useState(false);
  const [accessories, setAccessories] = useState(false);
  const [special, setSpecial] = useState(false);
  const [brands, setBrands] = useState(false);
  useEffect(() => {
    setMegaMenu(megabarData);
  }, []);

  return (
    <div>
      <div class={styles.megabar}>
        <div class={styles.megabar_menu}>
          {megaMenu.length &&
            isMenuOpen &&
            megaMenu.map((menuItem) => {
              if (menuItem.title === "New Arrival") {
                return (
                  <div
                    class={styles.menu}
                    onMouseEnter={() => setNewArrival(true)}
                    onMouseLeave={() => setNewArrival(false)}
                  >
                    <p class={menuItem.class}>
                      {menuItem.title} <KeyboardArrowDown />
                    </p>
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
                        ))}
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
                    <p class={menuItem.class}>
                      {menuItem.title} <KeyboardArrowDown />
                    </p>
                    <div class={styles.dropdown}>
                      {men &&
                        menuItem.items &&
                        menuItem.items.map((item) => (
                          <div class={styles.dropdown_item}>
                            <img src={item.img} alt="" />
                            <h6>{item.title}</h6>
                            <div>
                              {item.items &&
                                item.items.map((it) => (
                                  <div class={styles.dropdown_item_data}>
                                    <Link to={`/type/${it}`}>{it}</Link>
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
                    <p class={menuItem.class}>
                      {menuItem.title} <KeyboardArrowDown />
                    </p>
                    <div class={styles.dropdown}>
                      {" "}
                      {woman &&
                        menuItem.items &&
                        menuItem.items.map((item) => (
                          <div class={styles.dropdown_item}>
                            <img src={item.img} alt="" />
                            <h6>{item.title}</h6>
                            <div class=" p-2">
                              {item.items &&
                                item.items.map((it) => (
                                  <div class={styles.dropdown_item_data}>
                                    <Link to={`/type/${it}`}>{it}</Link>
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
                    <p class={menuItem.class}>
                      {menuItem.title} <KeyboardArrowDown />
                    </p>
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
                    <p class={menuItem.class}>
                      {menuItem.title} <KeyboardArrowDown />
                    </p>
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
                    <p class={menuItem.class}>
                      {menuItem.title} <KeyboardArrowDown />
                    </p>
                    <div class={styles.dropdown}>
                      {brands &&
                        menuItem.items &&
                        menuItem.items.map((item) => (
                          <div class={styles.dropdown_item}>
                            <p class={styles.dropdown_item_data}>
                              {item.title}
                            </p>
                          </div>
                        ))}
                    </div>
                  </div>
                );
              }
            })}
        </div>

        {isMenuOpen && (
          <div className="flex items-center cursor-pointer overflow-hidden">
            <button className="lg:text-xl text-sm font-normal lg:font-bold cursor-pointer md:block hidden hover:text-white hover:bg-gray-900 bg-gray-200 text-gray-900 p-2 m-2 rounded-2xl font-sch">
              <Link to="/admin"> Go to Super Admin</Link>{" "}
            </button>
            <svg
              className="flex-shrink-0 mr-2 sm:mr-3"
              width="36"
              height="36"
              viewBox="0 0 36 36"
            >
              <circle fill="#24292E" cx="18" cy="18" r="18" />
              <path
                d="M18 10.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V24c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"
                fill="#FFF"
              />
            </svg>
            <svg
              className="flex-shrink-0 mr-2 sm:mr-3"
              width="36"
              height="36"
              viewBox="0 0 36 36"
            >
              <circle fill="#1DA1F2" cx="18" cy="18" r="18" />
              <path
                d="M26 13.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H10c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z"
                fill="#FFF"
                fillRule="nonzero"
              />
            </svg>
            <svg
              className="flex-shrink-0 mr-2 sm:mr-3"
              width="36"
              height="36"
              viewBox="0 0 36 36"
            >
              <circle fill="#EA4335" cx="18" cy="18" r="18" />
              <path
                d="M18 17v2.4h4.1c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C21.6 11.7 20 11 18.1 11c-3.9 0-7 3.1-7 7s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H18z"
                fill="#FFF"
                fillRule="nonzero"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default MegaNavbar;
