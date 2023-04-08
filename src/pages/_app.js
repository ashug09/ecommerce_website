import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "@/Store";
import { SessionProvider } from "next-auth/react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  {
    return (
      <SessionProvider session={session}>
        <Elements stripe={stripePromise}>
          <Provider store={store}>
            <Component {...pageProps} />{" "}
          </Provider>
        </Elements>
      </SessionProvider>
    );
  }
}
