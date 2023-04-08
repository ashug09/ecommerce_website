import React from "react";
import { useSelector } from "react-redux";
import Router from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Nav() {
  const { data: session } = useSession();
  const amount = useSelector((state) => state.cart.amount);
  const count = useSelector((state) => state.cart.count);
  // let items = useSelector((state)=>state.cart.items)
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <button
            onClick={() => Router.push("/", undefined, { shallow: true })}
          >
            <a className="btn btn-ghost normal-case text-xl">Mady STORE</a>
          </button>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">{count}</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">{count} Items</span>
                <span className="text-info">Subtotal: ${amount}</span>
                <div className="card-actions">
                  <button
                    onClick={() => {
                      Router.push("/cart", undefined, { shallow: true });
                    }}
                    className="btn btn-primary btn-block"
                  >
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {session ? (
                  <img src={session.user.image} />
                ) : (
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSegCgK5aWTTuv_K5TPd10DcJxphcBTBct6R170EamgcCOcYs7LGKVy7ybRc-MCwOcHljg&usqp=CAU" />
                )}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button
                  onClick={() => {
                    Router.push("/profile", undefined, { shallow: true });
                  }}
                >
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </button>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>
                  {session ? `Hello! ${session.user.name}` : "Hello There !!"}
                </a>
              </li>
              <li>
                {session ? (
                  <button onClick={() => signOut()}>
                    <a>Sign Out</a>
                  </button>
                ) : (
                  <button onClick={() => signIn()}>
                    <a>Login</a>
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
