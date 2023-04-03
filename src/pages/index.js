import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Nav from "./nav";
const inter = Inter({ subsets: ["latin"] });
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/features/cartSlice";
export default function Home() {
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

  useEffect(() => {
    fetching();
  }, []);

  return (
    <div>
      <Nav />
      <div className="grid grid-cols-4">
        {items.map((item) => {
          return (
            <div
              className="card w-auto h-96 m-4 bg-base-100 shadow-xl"
              key={item.id}
            >
              <figure>
                <img
                  className="object-contain w-32"
                  src={item.image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.description.slice(0, 50)}</p>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      dispatch(
                        addToCart(item)
                      )
                    }
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
