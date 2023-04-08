import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Nav from "./nav";
const inter = Inter({ subsets: ["latin"] });
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, itempage } from "@/features/cartSlice";
import Router from "next/router";
import Itempage from "./itempage";
import Slides from "./slides";
import Footer from "./footer";
import { useSession, signIn } from "next-auth/react";
export default function Home() {

  const {data: session} = useSession()
  const [items, setItems] = useState([]);
  const url = "https://fakestoreapi.com/products";
  const dispatch = useDispatch();
  const fetching = async () => {
    axios
      .request(url)
      .then(function (response) {
        console.log(response.data);
        setItems(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleclick = (item) => {
    dispatch(itempage(item))
    {session? Router.push("/itempage", undefined, { shallow: true }): signIn()}
  };

  useEffect(() => {
    fetching();
  }, []);

  return (
    <div>
      <Nav />
      <Slides />
      <div className="">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {items.map((item) => {
                return (
                  <div className="lg:w-1/4 md:w-1/2 p-6 w-full" key={item.id}>
                    <a className="relative block h-48 rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="w-32 h-32 mx-auto py-auto object-contain object-center block"
                        src={item.image}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        CATEGORY
                      </h3>
                      <h2 className="text-gray-900 title-font text-sm font-medium">
                        {item.title}
                      </h2>

                      <div className=" flex justify-between">
                        <p className="mt-1">${item.price}</p>
                        <button
                          onClick={() => {
                            handleclick(item)
                          }}
                          className="btn btn-sm"
                        >
                          Buy
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
