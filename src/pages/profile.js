import React from "react";
import { useSession, signIn } from "next-auth/react";

import Router from "next/router";
import Footer from "./footer";
import Nav from "./nav";
export default function Profile() {
  const { data: session } = useSession();
  return (
    <>
      <Nav />
      {session ? (
        <div className="h-96 mb-10 mt-8">
          <div className="mx-auto card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <div className="avatar">
                <div className="w-24 my-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={session.user.image} />
                </div>
              </div>
            </figure>

            <div className="card-body items-center text-center">
              <h2 className="card-title">Hi! {session.user.name}</h2>
              <p>Logged IN with : {session.user.email}</p>
              <div className="card-actions">
                <button
                  onClick={() => {
                    Router.push("/", undefined, { shallow: true });
                  }}
                  className="btn btn-primary"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-96 ">
          <div className="mx-auto mt-20 card md:w-96 lg:w-96 sm:w-72 bg-base-100 shadow-xl">
            <div className="card-body">
              <p className="mx-auto">Please LogIN to continue !!</p>
              <button onClick={() => signIn()} className="btn mt-2">
                LogIN
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
