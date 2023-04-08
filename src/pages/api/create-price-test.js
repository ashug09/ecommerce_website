// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require("stripe")(
  "sk_test_51MkSB3SEGL51UJAhvXePqOt7NLqAS5oXEWzchYSU3df4PY3MuyTza2Hz03ps4SpXPHZpsYIKNF1r56bDm1Yt2tj200DRP2qJoE"
);

export default async function handler(req, res) {
  const { productID, cost } = req.body;
  console.log("this is the product id in the server: " + productID);
  console.log("this is the cost in the server: " + cost);
  
  const price = await stripe.prices.create({
    product: productID,
    unit_amount: cost,
    currency: "inr",
  });
  res.send({
    priceID: price.id,
  });
}
