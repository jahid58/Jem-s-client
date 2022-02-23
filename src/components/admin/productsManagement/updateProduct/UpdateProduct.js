import { Alert, AlertTitle } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../addProduct/Addproduct.module.css";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
const UpdateProduct = ({ modalTitle }) => {
  const [imageURL, setImageURL] = useState(null);
  const [imageURLStatus, setImageURLStatus] = useState();
  const [product, setProduct] = useState({});

  const history = useHistory();

  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const { id } = useParams();
  const allColors = [
    "green",
    "khaki",
    "red",
    "blue",
    "gray",
    "light gray",
    "dark gray",
    "crimson",
    "yellow",
    "yellow green",
    "MediumVioletRed",
    "gainsboro",
    "chocolate",
    "aqua",
    "darkblue",
    "midnight blue",
    "dark red",
    "tan",
  ];
  const allSize = ["M", "L", "XL", "XXL", "XXXL"];
  let reviews = null;
  useEffect(() => {
    const requestBody = {
      query: `
         
      query {
        
          dynamicSearch(searchObject:{topic:"_id",value:"${id}"}){
            _id
          name
          rating
          title
          size
          color
          category
           img
          description
          price
          gender
         brand
         material
         reviews{reviewer comment rating date}
         discount{discountMessage discountAmount discountPercentage}
    }}
       `,
    };

    fetch("https://jems-server1.herokuapp.com/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())

      .then((resData) => {
        setProduct(resData.data.dynamicSearch[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleSubmit = (e) => {
    // request query for fetching products

    const requestBody = {
      query: `mutation {
        UpdateProduct(_id:"${id}",productInput:  {
          title:"${e.target.title.value}",
        name:"${e.target.name.value}",
        description:"${e.target.description.value}",
        size:"${sizes}",
        rating:${e.target.rating.value},
        category:"${e.target.category.value}",
        color:"${colors}",
        gender:"${e.target.gender.value}",
        price: ${e.target.price.value},
        brand:"${e.target.brand.value}",
        img: "${imageURL}",
       
        discount:{
           discountMessage: "${e.target.discountMessage.value}",
          discountAmount: ${e.target.discountAmount.value},
          discountPercentage: ${e.target.discountPercentage.value}},
        reviews:${reviews},
        material:"${e.target.material.value}",
      }) {
          size 
         color
        }
      }
      `,
    };
    // fetching data from database

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
        if (data) {
          alert("Product added successfully");
          history.push("/admin/products");
        }
      })
      .catch((err) => console.log(err));
    e.preventDefault();
  };
  // selecting sizes of the product
  const handleSize = (e) => {
    const isHave = sizes.indexOf(e.target.value);

    if (isHave === -1) {
      setSizes([...sizes, e.target.value]);
    }

    e.preventDefault();
  };

  // selecting colors of the product
  const handleColor = (e) => {
    const isHave = colors.indexOf(e.target.value);

    if (isHave === -1) {
      setColors([...colors, e.target.value]);
    }
    e.preventDefault();
  };

  // uploading image on imagebb website
  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "ca6c9c7b95b538d35b5137a6b8deb060");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
        setImageURLStatus(true);
      })
      .catch(function (error) {
        console.log(error);
      });
    event.preventDefault();
  };

  return (
    <>
      {/*content*/}
      <div className={styles.modal_container}>
        <div className="">
          {/*header*/}
          <div className={styles.modal_top}>
            <h3 className="text-3xl font-semibold">
              Edit Product
              <p className="text-lg text-white">
                Product Tittle: {product.title}
              </p>
            </h3>
            <h3 className="text-xl text-yellow-200 ">
              Product id:
              <p className=" text-lg text-white"> {product._id}</p>{" "}
            </h3>
          </div>

          {/*body*/}

          <div className={styles.modal_body}>
            <section className="mx-10">
              <div class="  ">
                <form onSubmit={handleSubmit}>
                  <div class={styles.form_body}>
                    {/* name of the product */}
                    <div class="mb-4">
                      <label class={styles.form_input_labels} for="name">
                        Name
                      </label>
                      <input
                        class={styles.form_input}
                        type="text"
                        name="name"
                        placeholder={product.name}
                        defaultValue={product.name}
                      />
                    </div>
                    {/* title */}
                    <div class="mb-4">
                      <label class={styles.form_input_labels} for="title">
                        Title
                      </label>
                      <input
                        class={styles.form_input}
                        type="text"
                        name="title"
                        placeholder={product.title}
                        defaultValue={product.title}
                      />
                    </div>
                    {/* gender */}
                    <div class="mb-6">
                      <label class={styles.form_input_labels} for="gender">
                        Gender
                      </label>
                      <select
                        class={styles.form_input}
                        name="gender"
                        id="gender"
                      >
                        <option value={product.gender} selected>
                          {" "}
                          None
                        </option>
                        <option value="Man">Man</option>
                        <option value="Women">Women</option>
                      </select>
                    </div>
                    {/* category */}
                    <div class="mb-6">
                      <label class={styles.form_input_labels} for="category">
                        Category
                      </label>
                      <select
                        class={styles.form_input}
                        name="category"
                        id="category"
                      >
                        <option value={product.category} selected>
                          {product.category}
                        </option>
                        <option value="Tops Clothing"> Tops Clothing</option>
                        <option value="Bottoms Clothing">
                          Bottoms Clothing
                        </option>
                        <option value="Kid Clothing">Kid Clothing</option>
                        <option value="Shoes">Shoes</option>
                        <option value="Cosmetics">Cosmetics</option>
                        <option value="Accessories">Accessories</option>
                      </select>
                    </div>
                    {/* material */}
                    <div class="mb-4">
                      <label class={styles.form_input_labels} for="name">
                        Product Material
                      </label>
                      <input
                        class={styles.form_input}
                        type="text"
                        name="material"
                        placeholder={product.material}
                        defaultValue={product.material}
                      />
                    </div>
                    {/* rating */}
                    <div class="mb-4">
                      <label class={styles.form_input_labels} for="rating">
                        Rating
                      </label>
                      <input
                        class={styles.form_input}
                        type="number"
                        name="rating"
                        placeholder={product.rating}
                        defaultValue={product.rating}
                      />
                    </div>
                    {/* brand */}
                    <div class="mb-4">
                      <label class={styles.form_input_labels} for="brand">
                        Brand
                      </label>
                      <input
                        class={styles.form_input}
                        type="text"
                        list="brand"
                        name="brand"
                        placeholder={product.brand}
                      />
                      <datalist id="Brand">
                        <option value="Easy" />

                        <option value={product.brand} />
                        <option value="Nike" />
                        <option value="Adidas" />
                        <option value="Zodiac" />
                        <option value="Levi's" />
                      </datalist>
                    </div>
                    {/* price */}
                    <div class="mb-6">
                      <label class={styles.form_input_labels} for="price">
                        price
                      </label>
                      <input
                        class={styles.form_input}
                        type="number"
                        min="1"
                        name="price"
                        placeholder={product.price}
                        defaultValue={product.price}
                      />
                    </div>{" "}
                    {/* uploading image */}
                    <div class="mb-6">
                      <label class={styles.form_input_labels} for="image">
                        Image
                      </label>
                      <input
                        class={styles.form_input}
                        onChange={handleImageUpload}
                        type="file"
                        name="image"
                        placeholder={product.image}
                        defaultValue={product.image}
                      />
                      {imageURLStatus ? (
                        <small className="text-green-600">Image Uploaded</small>
                      ) : (
                        <small>Upload Image</small>
                      )}
                    </div>{" "}
                    {/* date */}
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
                        placeholder={product.date}
                        defaultValue={product.date}
                      />
                    </div>
                    {/* description */}
                    <div class="mb-6">
                      <label class={styles.form_input_labels} for="description">
                        Description
                      </label>
                      <textarea
                        class={styles.form_input}
                        type="Text"
                        name="description"
                        placeholder={product.description}
                        defaultValue={product.description}
                      />
                    </div>
                    {/* size */}
                    <div class="mb-6 ">
                      <p> Select Size</p>

                      <div className="flex flex-wrap">
                        {" "}
                        {allSize.map((size) => (
                          <div className="m-2">
                            <input
                              id="checkSize"
                              type="checkbox"
                              class="mr-2  checked:border-transparent "
                              onMouseDown={handleSize}
                              value={size}
                            />
                            <label for="checkSize">{size}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* color */}
                    <div class="mb-6 ">
                      <p> Select Color</p>
                      <div className="flex flex-wrap">
                        {allColors.map((color) => (
                          <div className="m-2">
                            <input
                              id="chkOrange"
                              type="checkbox"
                              class="mr-2  checked:border-transparent "
                              onMouseDown={handleColor}
                              value={color}
                            />
                            <label for="checkColor">{color}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* discount section  */}
                    <div class="mb-4">
                      <label class={styles.form_input_labels} for="name">
                        Discount
                      </label>
                      <input
                        class={styles.form_input_discount}
                        type="text"
                        name="discountMessage"
                        placeholder={product.discount?.discountMessage}
                        defaultValue={product.discount?.discountMessage}
                      />
                      <input
                        class={styles.form_input_discount}
                        type="Number"
                        name="discountAmount"
                        placeholder={product.discount?.discountAmount}
                        defaultValue={product.discount?.discountAmount}
                      />
                      <input
                        class={styles.form_input_discount}
                        type="Number"
                        name="discountPercentage"
                        placeholder={product.discount?.discountPercentage}
                        defaultValue={product.discount?.discountPercentage}
                      />
                    </div>
                  </div>
                  {/*footer*/}
                  <div class="flex items-end justify-end">
                    <button className={styles.form_submit_btn} type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProduct;
