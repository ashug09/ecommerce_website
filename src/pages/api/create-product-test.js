// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require("stripe")(
  "sk_test_51MkSB3SEGL51UJAhvXePqOt7NLqAS5oXEWzchYSU3df4PY3MuyTza2Hz03ps4SpXPHZpsYIKNF1r56bDm1Yt2tj200DRP2qJoE"
);

export default async function handlerProduct(req, res) {
  const { name, description } = req.body;
  const product = await stripe.products.create({
    name: name,
    description: description,
  });
  res.send({
    productID: product.id,
  });
}
