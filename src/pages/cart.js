import React, { useEffect } from "react";
import Nav from "./nav";
import { useSelector } from "react-redux";

export default function Cart() {
  let items = useSelector((state) => state.cart.items);
  return (
    <div>
      <Nav />

      {items.map((item) => {
        return (
          <div className="card card-side bg-base-100 shadow-xl" key={item.id}>
            <figure>
              <img className="w-32 h-32 object-contain" src={item.image} alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>Click the button to watch on Jetflix app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
