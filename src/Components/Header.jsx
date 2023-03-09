/** @format */

import React from "react";

const Header = () => {
  return (
    <div className="pt-2">
      <section className="bg-white  mt-5 w-50 p-5">
        <h1>🍊</h1>
        <h2>CONNECT THE WORLD TO ORANGE</h2>

        <button type="button" className="btn btn-warning px-5 mt-5">
          BUY NOW
        </button>
        <div className="header-right">
          {/* <div className="container">
            <img
              src="https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhZHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
              alt=""
              className="img-fluid"
            />
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Header;
