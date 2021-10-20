import { Alert, AlertTitle } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import styles from "./Addproduct.module.css";

const AddProduct = () => {
  const [imageURL, setImageURL] = useState(null);
  const [imageURLStatus, setImageURLStatus] = useState();
  const [dbStatus, setDbStatus] = useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const handleSubmit = (e) => {
    const requestBody = {
      query: `mutation {
        createProduct(productInput:  {
          title:"${e.target.title.value}",
        name:"${e.target.name.value}",
        description:"${e.target.description.value}",
        size:"${e.target.size.value}",
        rating:${e.target.rating.value},
        category:"${e.target.category.value}",
        color:" ${e.target.color.value}",
        department:" ${e.target.department.value}",
        price: ${e.target.price.value},
        brand:" ${e.target.brand.value}",
        img: "${imageURL}",
        date:"${e.target.date.value}",
      }) {
          date 
          _id
        }
      }
      `,
    };
    // https://jems-server1.herokuapp.com/
    const url = `https://jems-server1.herokuapp.com/graphql`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((res) => res.json())
      .then((data) => {
        setDbStatus(data);
        console.log(data);
        if (data) {
          alert("Product added successfully.");
          // e.target.reset();
        }
      });

    e.preventDefault();
  };

  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "ca6c9c7b95b538d35b5137a6b8deb060");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        console.log(response.data.data.display_url);
        setImageURL(response.data.data.display_url);
        setImageURLStatus(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      {!showModal && (
        <div>
          <button
            className={styles.modal_button}
            type="button"
            onClick={() => setShowModal(true)}
          >
            {" "}
            + Add a new product
          </button>
        </div>
      )}

      {showModal ? (
        <>
          <div className={styles.modal_container}>
            {/*content*/}
            <div className="">
              {/*header*/}
              <div className={styles.modal_top}>
                <h3 className="text-3xl font-semibold">Add a new product</h3>
                <button
                  className={styles.modal_top_btn}
                  onClick={() => setShowModal(false)}
                >
                  <span>x</span>
                </button>
              </div>
              {/*body*/}

              <div className={styles.modal_body}>
                <section className="mx-10">
                  <div class="  ">
                    <form onSubmit={handleSubmit}>
                      <div class={styles.form_body}>
                        <div class="mb-4">
                          <label class={styles.form_input_labels} for="name">
                            Name
                          </label>
                          <input
                            class={styles.form_input}
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                          />
                        </div>
                        <div class="mb-4">
                          <label class={styles.form_input_labels} for="title">
                            Title
                          </label>
                          <input
                            class={styles.form_input}
                            type="text"
                            name="title"
                            placeholder="title"
                            required
                          />
                        </div>
                        <div class="mb-6">
                          <label
                            class={styles.form_input_labels}
                            for="category"
                          >
                            Category
                          </label>
                          <select
                            class={styles.form_input}
                            name="category"
                            id="cars"
                          >
                            <option value="None">None</option>
                            <option value="Man">Man</option>
                            <option value="Women">Women</option>
                          </select>
                          {/* <input
                                       class={styles.form_input}
                                        type="text"
                                        name="category"
                                        placeholder="Category"
                                    /> */}
                        </div>
                        <div class="mb-6">
                          <label
                            class={styles.form_input_labels}
                            for="department"
                          >
                            Department
                          </label>
                          <select
                            class={styles.form_input}
                            name="department"
                            id="cars"
                          >
                            <option value="Clothing">Clothing</option>
                            <option value="Grocery">Grocery</option>
                            <option value="Cooking">Cooking</option>
                            <option value="Phone">Phone</option>
                            <option value="Cosmetics">Cosmetics</option>
                            <option value="Computer">Computer</option>
                          </select>
                        </div>
                        <div class="mb-4">
                          <label class={styles.form_input_labels} for="rating">
                            Rating
                          </label>
                          <input
                            class={styles.form_input}
                            type="number"
                            name="rating"
                            placeholder="rating"
                            required
                          />
                        </div>
                        <div class="mb-4">
                          <label class={styles.form_input_labels} for="brand">
                            Brand
                          </label>
                          <input
                            class={styles.form_input}
                            type="text"
                            list="brand"
                            name="brand"
                            placeholder="Brand"
                          />
                          <datalist id="brand">
                            <option value="Easy" />
                            <option value="Nike" />
                            <option value="Adidas" />
                            <option value="Zodiac" />
                            <option value="Levi's" />
                          </datalist>
                        </div>
                        <div class="mb-6">
                          <label class={styles.form_input_labels} for="size">
                            Size
                          </label>
                          <select
                            class={styles.form_input}
                            name="size"
                            id="cars"
                          >
                            <option value="none">None</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                            <option value="XXL">XXXL</option>
                          </select>
                          {/* <input
                                      class={styles.form_input}
                                        type="text"
                                        name="size"
                                        placeholder="Size"
                                    /> */}
                        </div>
                        <div class="mb-6 ">
                          <label class={styles.form_input_labels} for="color">
                            Color
                          </label>
                          <input
                            class={styles.form_input}
                            type="color"
                            name="color"
                            required
                          />
                        </div>
                        <div class="mb-6">
                          <label class={styles.form_input_labels} for="price">
                            price
                          </label>
                          <input
                            class={styles.form_input}
                            type="number"
                            min="1"
                            name="price"
                            placeholder="price"
                          />
                        </div>{" "}
                        <div class="mb-6">
                          <label class={styles.form_input_labels} for="image">
                            Image
                          </label>
                          <input
                            class={styles.form_input}
                            onChange={handleImageUpload}
                            type="file"
                            name="image"
                            placeholder="image"
                            required
                          />
                          {imageURLStatus ? (
                            <small className="text-green-600">
                              Image Uploaded
                            </small>
                          ) : (
                            <small>Upload Image</small>
                          )}
                        </div>{" "}
                        <div class="mb-4">
                          <label
                            class={styles.form_input_labels}
                            for="datetime-local"
                          >
                            Date of product entry
                          </label>
                          <input
                            class={styles.form_input}
                            type="date"
                            name="date"
                            placeholder="date"
                            required
                          />
                        </div>
                        <div class="mb-6">
                          <label
                            class={styles.form_input_labels}
                            for="description"
                          >
                            Description
                          </label>
                          <input
                            class={styles.form_input}
                            type="textarea"
                            name="description"
                            placeholder="Description"
                          />
                        </div>
                      </div>
                      <div class="flex items-end justify-end">
                        <button
                          className={styles.form_submit_btn}
                          type="submit"
                        >
                          Submit
                        </button>

                        <button
                          className={styles.modal_close_btn}
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          close
                        </button>
                      </div>
                    </form>
                  </div>
                </section>
              </div>
            </div>
            {/*footer*/}
          </div>
        </>
      ) : null}
    </>
  );
};

export default AddProduct;
