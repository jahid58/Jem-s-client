import React, { useEffect, useMemo, useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import { useHistory } from "react-router";

const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: "16px",
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    []
  );

  return options;
};

const SplitForm = ({ userOrders }) => {
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [checkedProduct, setCheckedProduct] = useState({});
  const [error, setError] = useState("");

  const handlePayment = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const productsIds = userOrders?.products.map((pd) => pd._id);
    console.log(productsIds);
    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });

    if (payload.paymentMethod) {
      setCheckedProduct({
        id: payload.paymentMethod.id,
        name: userOrders.name,
        email: userOrders.email,
        products: productsIds,
      });
    } else {
      setError(payload.error.message);
    }
  };
  useEffect(() => {
    if (checkedProduct.products) {
      const requestBody = {
        query: `
      mutation
      {createOrders(ordersInput:
       {
         products:"${checkedProduct.products}",
         name:"${checkedProduct.name}",
         email:"${checkedProduct.email}",
         paymentId:"${checkedProduct.id}"
        }
      ){name}}`,
      };

      if (checkedProduct.id) {
        fetch("https://jems-server1.herokuapp.com/graphql", {
          method: "POST",

          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(requestBody),
        })
          .then((res) => res.json())
          .then((res) => {
            alert("Ordered successfully");
            history.replace("/home");
          });
      }
    }
  }, [checkedProduct]);

  return (
    <form onSubmit={handlePayment}>
      <label>
        Card number
        <CardNumberElement options={options} />
      </label>
      <br />
      <label>
        Expiration date
        <CardExpiryElement options={options} />
      </label>
      <br />
      <label>
        CVC
        <CardCvcElement options={options} />
      </label>
      <br />
      <button
        type="submit"
        disabled={!stripe}
        className="p-1 btn text-white"
        style={{ width: "150px", backgroundColor: "blueviolet" }}
      >
        Pay
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default SplitForm;
