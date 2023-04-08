import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import CheckoutForm from "./CheckoutForm";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function App() {
  const items = useSelector((state) => state.cart.items);
  const [clientSecret, setClientSecret] = React.useState("");
  const [productID, setProductID] = useState([null]);
  const [priceID, setPriceID] = useState([null]);

  const handleCheckout = () => {
    items.map((item) => {
      fetch("/api/create-product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        //   body: {amount: amount}
        body: JSON.stringify({
          name: item.title,
          description: item.description,
        }),
      })
        .then((res) => res.json())
        .then((data) => setProductID(data.productID));
      console.log("fetching another api in the process");
      fetch("/api/create-price", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        //   body: {amount: amount}
        body: JSON.stringify({
          productID: productID,
          cost: item.price * 100,
        }),
      })
        .then((res) => res.json())
        .then((data) => setPriceID(data.priceID));
    });
  };
  // React.useEffect(() => {
  //   // Create PaymentIntent as soon as the page loads

  // }, []);

  console.log("here is the product id: " + productID);
  console.log("here is the price is: " + priceID);
  const appearance = {
    theme: "stripe",
    variables: {
      colorPrimary: "#05e11e",
    },
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <>
      <div>
        <h1>checkout button</h1>
        <button onClick={() => handleCheckout()}>checkout</button>
      </div>
      <div className="App">
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
      </div>
    </>
  );
}
