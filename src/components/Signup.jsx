import React from "react";
import "../css/Signup.css";

export default function Signup() {
  return (
    <>
      <div className="back_img">
        <div className="main_div">
          <div className="container">
            <div className="logo">
              <img src="/public/assets/signupimg.png " alt="" />
            </div>

            <div className="form_input">
              <div className="login-form">
                <label for="">Full Name</label>
                <input type="text" placeholder="Enter Your  Name..." />
              </div>

              <div className="login-form">
                <label for="">Email Address</label>
                <input type="text" placeholder="Enter Your Email..." />
              </div>

              <div className="login-form">
                <label for="">Password</label>
                <input type="password" placeholder="Enter Your Password...." />
              </div>

              <div className="login-form">
                <label for="">Confirm Password</label>
                <input type="password" placeholder=" Confirm Password...." />
              </div>

              <div className="check-box">
                <input type="checkbox" /> <span>Signup and Admine</span>
              </div>

              <div className="btn">
                <button>Submit</button>
              </div>
            </div>
            <div className="sign_in">
              <h1>Sign In</h1>
            </div>

            <div className="header">
              <p>Already registered? </p> <span className="span">Login</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
