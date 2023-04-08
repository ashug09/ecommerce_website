import Image from "next/image";
import React from "react";

import truck from "../assets/images/delivery-truck.gif";
import like from "../assets/images/like.gif";
import Nav from "./nav";
import Footer from "./footer";
import Router from "next/router";
export default function Paymentsuccess() {
  return (
    <div>
      <Nav />
      <Image className="mx-auto mt-10" height={200} src={truck} />
      <div className="alert alert-success shadow-lg mx-auto sm:w-56 md:w-64 lg:w-96 mb-40">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Your order has been confirmed!</span>
        </div>
        <div className="flex-none">
          <button
            onClick={() => {
              Router.push("/", undefined, { shallow: true });
            }}
            className="btn btn-sm"
          >
            Home
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
