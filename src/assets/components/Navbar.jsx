import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import CloseMenu from "./CloseMenu";
import HumbergerMenu from "./HumbergerMenu";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="topper bg-gray border-b-[1px] border-[#666] bg-topper-img flex justify-center gap-2 py-4 text-xs font-medium">
        <p>✨Discover Your Dream Property with Estatein</p>

        <Link to="/onprogress" className="underline">
          Learn More
        </Link>
      </div>

      <div className="wrapper bg-gray border-b-[1px] border-[#666]">
        <nav className="px-4 py-5 flex justify-between items-center text-sm font-medium md:w-[90%] md:mx-auto md:px-0 md:py-5">
          <Link to="/" className="logo">
            <img src="./logo.svg" alt="logo" />
          </Link>

          <div className="hidden md:flex">
            <ul className="flex gap-8  text-lg font-medium">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/onprogress">About Us</Link>
              </li>
              <li>
                <Link to="/onprogress">Properties</Link>
              </li>
              <li>
                <Link to="/onprogress">Services</Link>
              </li>
            </ul>
          </div>

          <div className="contact-us hidden md:flex text-lg font-medium">
            <Link to="/onprogress">Contact Us</Link>
          </div>

          <div
            className="toggle-menu sm:hidden"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <CloseMenu /> : <HumbergerMenu />}
          </div>
        </nav>
      </div>

      {/* SIDE BAR */}
      <div className={!toggle ? "hidden" : "flex"}>
        <ul className="flex absolute right-0 top-36 bg-light-gray p-7 rounded-l-2xl flex-col gap-4 text-right text-lg font-medium border-[1px] border-solid border-[#666]">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/onprogress">About Us</Link>
          </li>
          <li>
            <Link to="/onprogress">Properties</Link>
          </li>
          <li>
            <Link to="/onprogress">Services</Link>
          </li>
          <li className="sm:hidden">
            <Link to="/onprogress">Contact Us</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
