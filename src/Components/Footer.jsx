/* eslint-disable jsx-a11y/anchor-is-valid */
/** @format */

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-warning bg-gradient p-5 mt-5 p-bottom">
      <div className="container p-5">
        <hr className="border border-light border-2 opacity-90"></hr>
        <div className="row">
          <div className="col-md-6">
            <a className="navbar-brand text-white fw-bold" href="#">
              <span className="fs-1">🍊 </span>OR
              <span className="" style={{color: "orange"}}>AN</span>GE
            </a>
            {/* <p className="text-light">
              Your natural candle made for <br /> your home and for your
              wellness
            </p> */}
          </div>
          <div className="col-md-2 ">
            <div className="container">
              <ul className="list-unstyled ">
                <li className="mt-4">
                  <a className="text-decoration-none text-light" href="">
                    Company
                  </a>
                </li>
                <li className="mt-4">
                  <a className="text-decoration-none text-light " href="">
                 Newsletter
                  </a>
                </li>
                <li className="mt-4">
                  <a className="text-decoration-none text-light " href="">
                    Most searched
                  </a>
                </li>
                <li className="mt-4">
                  <a className="text-decoration-none text-light " href="">
                    Most sold
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="container">
              <ul className="list-unstyled">
                <li className="mt-4">
                  <a className="text-decoration-none text-light" href="">
                    About
                  </a>
                </li>
                <li className="mt-4">
                  <a className="text-decoration-none text-light" href="">
                    Help
                  </a>
                </li>
                <li className="mt-4">
                  <a className="text-decoration-none text-light" href="">
                    Shipping
                  </a>
                </li>
                <li className="mt-4">
                  <a className="text-decoration-none text-light" href="">
                    Affliate
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="container">
              <ul className="list-unstyled">
                <li className="mt-4">
                  <a className="text-decoration-none text-light" href="">
                    Info
                  </a>
                </li>
                <li className="mt-4">
                  <a className="text-decoration-none text-light" href="">
                    Contact us
                  </a>
                </li>
                <li className="mt-4">
                  <a className="text-decoration-none text-light" href="">
                    Privacy Policies
                  </a>
                </li>
                <li className="mt-4">
                  <a className="text-decoration-none text-light" href="">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
