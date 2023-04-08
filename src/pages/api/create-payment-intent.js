// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  let total = 0;
  items.map((item) => {
    total = total + item.price;
  });
  console.log("here is your amount " + total);
  return ((total * 100) + (100*100) + (50*100));
};

export default async function handler(req, res) {
  const { items } = req.body;
  //   let amount =0;

  //   const a = items.map(item=>{(item.price)})
  //   amount = amount + a
  console.log(items);
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    // amount: 1000,
    amount: calculateOrderAmount(items),
    currency: "inr",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  console.log("here is client secret: " + paymentIntent.client_secret);
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
}
