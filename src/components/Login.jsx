import { useState } from "react";
import "../css/Login.css";
import { FaEyeSlash } from "react-icons/Fa";
import { FaEye } from "react-icons/Fa";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // __________________________hide and show password____________________

  const [showPassword, setShowpassword] = useState();
  // _________________________onchangedata_____________________

  const changedata = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };
  return (
    <>
      <div className="back_img">
        <div className="main_div">
          <div className="container">
            <div className="logo">
              <img src="/public/assets/signupimg.png" alt="" />
            </div>
            <form action="">
              <div className="login_form">
                <div className="login_input">
                  <label>Email Address</label>
                  <input
                    type="text"
                    placeholder="Enter Your Email..."
                    name="email"
                    id="email"
                    onChange={changedata}
                  />
                </div>

                <div className="login_input">
                  <label>Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Your Password.."
                    name="password"
                    id="Password"
                    onChange={changedata}
                  />
                  {showPassword ? (
                    <FaEye
                      className="FaEye"
                      onClick={() => setShowpassword(!true)}
                    />
                  ) : (
                    <FaEyeSlash
                      className="FaEye"
                      onClick={() => setShowpassword(!false)}
                    />
                  )}
                </div>

                <div className="btn">
                  <button type="submit">Login</button>
                </div>
              </div>
            </form>
          </div>
          <div className="log_in">
            <h1>Login</h1>
          </div>

          <div className="not_register">
            <p>Not Registered yet? </p> <span className="span">Sign Up</span>
          </div>
        </div>
      </div>
    </>
  );
}
