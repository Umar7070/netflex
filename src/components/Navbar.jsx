import React from "react";
import { IoMdArrowDropdown } from "react-icons/Io";
import "../css/nav.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="main_navbar">
        <div className="flex_tv">
          <div className="logo">
            <h1>Flix</h1> <span>TV</span>
          </div>
          <ul className="unorder_list">
            <li>
              <Link to="/"> Home</Link>
         </li>
            <li>
              <a href="">Pricing Plan</a>
            </li>
            <li>
              <a href="">Catalog</a>
            </li>{" "}
            <IoMdArrowDropdown className="dropdown" />
            <li>
              <Link to="/favourite" href="" className="Favourite">
                Favourite
              </Link>
            </li>
          </ul>
        </div>
        <div className="ultimate_tv">
          <div className="ultimate_tv_heading">
            <h1>Ultimate TV show and Movies</h1>
          </div>
          <div className="ultimate_tv_btn">
            <button>Logout</button>
          </div>
        </div>
      </div>
      <div className="name">
        <div className="name_heading">
          <h1>Welcome Umar</h1>
          <h2>Your Favourite Movies</h2>
        </div>
      </div>
    </>
  );
}
