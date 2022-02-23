import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

import ProcessPayment from "./ProcessPayment";

import { useSelector } from "react-redux";

const Checkout = () => {
  const store = useSelector((state) => state.store);
  const [total, setTotal] = useState(store.totalCount.total);
  const [userOrders, setUserOrders] = useState({});

  const history = useHistory();

  useEffect(() => {
    const data = { ...store };
    setUserOrders({
      name: data.user.name,
      email: data.user.email,
      products: data.cartProduct,
    });
  }, []);
  const handleQuantity = (e, pd) => {
    let products = userOrders.products;
    let target = products.find((product) => product._id === pd._id);
    let index = products.indexOf(target);
    target.quantity = e.target.value;
    products[index] = target;
    setUserOrders({ ...userOrders, products });
    const newTotal = products?.reduce(
      (total, pd) => (total += pd.price * pd.quantity),
      0
    );
    setTotal(newTotal);
  };

  return (
    <div>
      <form action="" className=" flex bg-gray-200">
        <div className="bg-gray-900 text-center">
          <p className="text-2xl font-bold   p-3  text-gray-200">
            {" "}
            Personal Information{" "}
          </p>

          <div className="flex flex-wrap">
            {" "}
            <input
              type="text"
              className=" m-2 p-2"
              name="name"
              placeholder={store.user.name}
            />
            <input
              type="text"
              className="p-2 m-2"
              name="email"
              placeholder={store.user.email}
            />
            <input
              type="text"
              className="p-2 m-2"
              name="email"
              placeholder="Home Address"
            />
            <input
              type="text"
              className="p-2 m-2"
              name="city"
              placeholder="City"
            />
            <input
              type="tel"
              className="p-2 m-2"
              name="phone"
              placeholder="
            mobile number"
            />
            <input
              type="number"
              className="p-2 m-2"
              name="postcode"
              placeholder="Postcode"
            />
          </div>
        </div>

        <div className="p-3">
          <p className="text-2xl font-bold  m-2 p-3  ">Product details</p>

          <table>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
            {userOrders.products?.map((pd) => (
              <tr>
                <td>
                  <input
                    type="text"
                    className="p-2 m-2 font-semibold"
                    name="product"
                    placeholder="product name"
                    value={pd.name}
                  />
                </td>
                <td>
                  {" "}
                  <input
                    type="number"
                    className="p-2 m-2"
                    name="quantity"
                    placeholder="product quantity"
                    defaultValue={pd.quantity}
                    onChange={(e) => handleQuantity(e, pd)}
                  />
                </td>
                <td>
                  {" "}
                  <input
                    type="number"
                    className=" p-2 m-2 "
                    name="quantity"
                    placeholder="product quantity"
                    value={pd.quantity * pd.price}
                  />
                </td>
              </tr>
            ))}{" "}
          </table>
        </div>
      </form>
      <div className="grid grid-cols-2 bg-gray-100">
        <div className=" p-3">
          <p className="text-2xl font-bold  m-2 p-3  ">Payment</p>
          <div class="form-check">
            <input
              class="m-2"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              defaultChecked
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Credit Card
            </label>
          </div>
          <div class="form-check">
            <input
              class="m-2"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label class="form-check-label m-2" for="flexRadioDefault2">
              Pay pal
            </label>
          </div>
          <ProcessPayment userOrders={userOrders}></ProcessPayment>
        </div>
        <div className="bg-gray-900">
          <p className="text-2xl font-bold text-white  p-3 ">Price Summary</p>
          <div className="text-bold m-2 p-2 text-gray-50">
            <div className="grid grid-cols-2">
              <p>subTotal:</p>
              <p> $ {total}</p>
            </div>

            <div className="grid grid-cols-2">
              <p>Vat:</p>
              <p> $ {(total * 0.01).toFixed(0)}</p>
            </div>
            <div className="grid grid-cols-2">
              <p>Delivery:</p>
              <p> $ {(total * 0.01).toFixed(2)}</p>
            </div>
            <p className="h-1 bg-white"></p>
            <div className="grid grid-cols-2">
              <p>Total:</p>
              <p> $ {(total + total * 0.02).toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
