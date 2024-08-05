import React from "react";
import "../css/Netflix.css";

export default function Netflix() {
  return (
    <>
      <div className="logo">
        <h1>NETFLIX</h1>
      </div>
      <div className="back_img">
        <div className="back_heading">
          <h1>Lost your way ?</h1>
        </div>

        <div className="back_text">
          <p>
            Sorry we can not find that page you will find lost to explore on the
            home page
          </p>
        </div>

        <div className="back_btn">
          <button>Netflix Home</button>
        </div>

        <div className="back_error-code">
          <p>
            Error Code <span>NSES-404</span>
          </p>
        </div>
      </div>
    </>
  );
}
