import { Alert, AlertTitle } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import AdminSidebar from "./../adminSidebar/AdminSidebar";

const AddProduct = () => {
  const [imageURL, setImageURL] = useState(null);
  const [imageURLStatus, setImageURLStatus] = useState();
  const [dbStatus, setDbStatus] = useState(false);

  const handleSubmit = (e) => {
    const productInfo = {
      name: e.target.name.value,
      description: e.target.description.value,
      size: e.target.size.value,
      category: e.target.category.value,
      color: e.target.color.value,
      department: e.target.department.value,
      price: e.target.price.value,
      brand: e.target.brand.value,
      date: new Date(),
      img: imageURL,
    };
    console.log(productInfo);

    const url = `http://localhost:4000/product`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        setDbStatus(data);
        if (data) {
          alert("Product added successfully.");
          // e.target.reset();
        }
      });

    e.preventDefault();
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "ca6c9c7b95b538d35b5137a6b8deb060");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        console.log(response.data.data.display_url);
        setImageURL(response.data.data.display_url);
        setImageURLStatus(true);
        if (response) {
          // alert('Image Uploaded Successfully')
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className=" bg-gray-800 ">
        <div className="w-screen h-20 p-6">Jem's</div>

        <div className="flex  md:flex-row flex-col">
          <AdminSidebar />

          <section className="mx-10">
            <h1 className="font-bold text-white p-4 text-2xl">
              Add a new product
            </h1>
            <div class="  ">
              <form
                class=" shadow-md rounded bg-blue-100 p-6 pb-8 mb-4 grid grid-cols-3 gap-4"
                onSubmit={handleSubmit}
              >
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                  >
                    Name
                  </label>
                  <input
                    class="shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600"
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                  />
                </div>
                <div class="mb-6">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="category"
                  >
                    Category
                  </label>
                  <select
                    className="shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600"
                    name="category"
                    id="cars"
                  >
                    <option value="None">None</option>
                    <option value="Man">Man</option>
                    <option value="Women">Women</option>
                  </select>
                  {/* <input
                                        class="shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600"
                                        type="text"
                                        name="category"
                                        placeholder="Category"
                                    /> */}
                </div>
                <div class="mb-6">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="department"
                  >
                    Department
                  </label>
                  <select
                    className="shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600"
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
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="brand"
                  >
                    Brand
                  </label>
                  <input
                    class="shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600"
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
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="size"
                  >
                    Size
                  </label>
                  <select
                    className="shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600"
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
                                        className="shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600"
                                        type="text"
                                        name="size"
                                        placeholder="Size"
                                    /> */}
                </div>
                <div class="mb-6 md:mx-32">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="color"
                  >
                    Color
                  </label>
                  <input
                    class="px-2 shadow appearance-none border-0 rounded w-full text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600"
                    type="color"
                    name="color"
                    required
                  />
                </div>
                <div class="mb-6">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="price"
                  >
                    price
                  </label>
                  <input
                    class="shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600"
                    type="number"
                    min="1"
                    name="price"
                    placeholder="price"
                  />
                </div>{" "}
                <div class="mb-6">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="image"
                  >
                    Image
                  </label>
                  <input
                    class="shadow appearance-none border-1 hover:bg-blue-600 hover:text-gray-50 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600"
                    onChange={handleImageUpload}
                    type="file"
                    name="image"
                    placeholder="image"
                    required
                  />
                  {imageURLStatus ? (
                    <small className="text-green-600">Image Uploaded</small>
                  ) : (
                    <small className="text-red-700">Upload Image</small>
                  )}
                </div>{" "}
                <div class="mb-6">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="description"
                  >
                    Description
                  </label>
                  <input
                    class="shadow appearance-none h-24 border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-600"
                    type="textarea"
                    name="description"
                    placeholder="Description"
                  />
                </div>
                <div class="flex items-end justify-end">
                  {imageURLStatus ? (
                    <button
                      class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Submit
                    </button>
                  ) : (
                    <button
                      class="bg-blue-300 text-white font-bold py-2 px-4 rounded"
                      type="submit"
                      disabled
                    >
                      Submit
                    </button>
                  )}
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
