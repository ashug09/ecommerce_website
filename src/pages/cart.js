import React, { useEffect } from "react";
import Nav from "./nav";
import { useSelector } from "react-redux";
import Footer from "./footer";
import Router from "next/router";
import { useSession, signIn } from "next-auth/react";
import Image from "next/image";
import hello from "../assets/images/3d-business-young-woman-sitting-with-a-laptop-and-waving-her-hand.png";
import { useDispatch } from "react-redux";
import { remove } from "@/features/cartSlice";
import { AiFillDelete } from "react-icons/ai";
export default function Cart() {
  const dispatch = useDispatch();
  const { data: session } = useSession();
  let items = useSelector((state) => state.cart.items);
  const amount = useSelector((state) => state.cart.amount);
  return (
    <div>
      <Nav />
      {session ? (
        <div>
          <div>
            {items.map((item) => {
              return (
                <div
                  className="w-3/4 mx-auto mb-2 card lg:card-side bg-base-100 border-2 border-gray-100 rounded-2xl"
                  key={item.id}
                >
                  <figure>
                    <img
                      className="object-contain w-32 h-32"
                      src={item.image}
                      alt="Album"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <p>${item.price}</p>
                    <div className="card-actions justify-end">
                      <button
                        onClick={() => {
                          dispatch(remove(item));
                        }}
                        className="btn btn-primary"
                      >
                        <h1 className="mr-2">Remove</h1> <AiFillDelete/>
                      </button>
                      
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {items.length >= 1 ? (
            <div className="mx-auto card lg:w-2/4 bg-base-100">
              <div className="card-body">
                <h2 className="card-title">Summary</h2>
                <p>Total: ${amount}</p>
                <p>Shipping: $100.00</p>
                <p className="border-b-2 border-gray-100">Taxes: $50.00</p>
                <p>Subtotal: ${amount + 100 + 50}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() =>
                      Router.push("/checkout", undefined, { shallow: true })
                    }
                    className="btn btn-primary"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-96 ">
              <div className="mx-auto mt-20 card md:w-96 lg:w-96 sm:w-72 bg-base-100 shadow-xl">
                <div className="card-body">
                  <p className="mx-auto capitalize text-sm">
                    continue your shopping....add items to your cart
                  </p>
                  <button
                    onClick={() => {
                      Router.push("/", undefined, { shallow: true });
                    }}
                    className="btn mt-2"
                  >
                    Shop
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="h-96 ">
          <div className="mx-auto mt-20 card md:w-96 lg:w-96 sm:w-72 bg-base-100 shadow-xl">
            <div className="card-body">
              <Image height={220} className="mx-auto" src={hello} />
              <p className="mx-auto text-xs">
                Hey There Please LogIN to continue !!
              </p>
              <button onClick={() => signIn()} className="btn mt-2">
                LogIN
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
