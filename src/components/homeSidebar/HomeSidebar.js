import React, { useState } from "react";
import { items } from "./sidebarItem";
import styles from "./HomeSidebar.module.css";
import { Link } from "react-router-dom";
import {
  BlockTitle,
  BlockHeader,
  List,
  ListItem,
  Range,
} from "tailwind-mobile/react";
const HomeSidebar = () => {
  const [price, setPrice] = useState(150);

  return (
    <div className={styles.sidebar_container}>
      {items.map((item) => (
        <div className={styles.sidebar_criteria}>
          {item.title === "COLLECTIONS" && (
            <div>
              {" "}
              <p className={styles.sidebar_criteria_title}>{item.title}</p>
              {item.collection.map((data) => (
                <p className={styles.sidebar_criteria_items}>{data}</p>
              ))}
            </div>
          )}
          {item.title === "PRODUCT TYPE" && (
            <div>
              <p className={styles.sidebar_criteria_title}>{item.title}</p>
              {item.collection.map((data) => (
                <p className={styles.sidebar_criteria_items}>{data}</p>
              ))}
            </div>
          )}

          {item.title === "COLOR" && (
            <div class="  mb-3">
              <p className={styles.sidebar_criteria_title}>{item.title}</p>

              <ul class="flex flex-row justify-center items-center my-4 space-x-2">
                {item.collection.map((color) => (
                  <Link to={color}>
                    {" "}
                    <li
                      class={`bg-${color}-600 h-8 w-8 rounded-2xl cursor-pointer`}
                    ></li>
                  </Link>
                ))}
              </ul>
            </div>
          )}

          {item.title === "SIZE" && (
            <div>
              <p className={styles.sidebar_criteria_title}>{item.title}</p>
              {item.collection.map((data) => (
                <p className={styles.sidebar_criteria_items}>{data}</p>
              ))}
            </div>
          )}
          {item.title === "PRICE" && (
            <div>
              <p className={styles.sidebar_criteria_title}>{item.title}</p>

              <BlockTitle className="text-teal-600"> ${price}</BlockTitle>

              <List>
                <ListItem
                  innerClassName="flex space-x-4"
                  innerChildren={
                    <>
                      <span>$0</span>
                      <Range
                        value={price}
                        step={1}
                        min={0}
                        max={20000}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                      <span>$20000</span>
                    </>
                  }
                />
              </List>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HomeSidebar;
