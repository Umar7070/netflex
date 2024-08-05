import React from "react";
import "../css/Gest.css";
import { MdLanguage } from "react-icons/Md";
import { FaGreaterThan } from "react-icons/Fa";

export default function Guestpage() {
  return (
    <>
      <div className="back_img">
        <div className="navbar">
          <div className="logo">
            <h1>NETFLIX</h1>
          </div>

          <div className="navbar_btn">
            <div className="navbar_dropDown">
              <MdLanguage className="internet" />
              English
            </div>
            <button>Sign in</button>
            <button>Sign up</button>
          </div>
        </div>

        <div className="navbar_heading">
          <h1>Unlimited movies, TV shows and more</h1>
          <div className="navbar_text">
            <h3>Watch anywhere. Cancel anytime.</h3>
          </div>
          <div className="navbar_content">
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
          </div>
        </div>

        <div className="inputField_sec">
          <input type="text" placeholder=" Email address" />
          <div className="input_Field-btn">
            <button>
              Get Started <FaGreaterThan />
            </button>
          </div>
        </div>
      </div>

      {/* enjoy sec................ */}

      <div className="enjoy-sec">
        <div className="enjoy_heading">
          <h1>Enjoye on your TV</h1>
          <p>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>

        <div className="enjoy_gif">
          <img src="/public/assets/200w.webp" alt="" />
        </div>
      </div>

      {/* download sec..................................... */}

      <div className="download_sec">
        <div className="download_img">
          <img src="/public/assets/diwaliimg.webp" alt="" />
        </div>
        <div className="diwali_text">
          <h1>Download your shows to watch offline</h1>
          <p>Save your favourites easily and always have something to watch.</p>
        </div>
      </div>

      {/* watch section..........................................// */}

      <div className="watch_section">
        <div className="watch_heading">
          <h1>Watch everywhere</h1>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>

        <div className="watch_gif">
          <img src="/public/assets/media.gif" alt="" />
        </div>
      </div>

      {/* children image section..........................// */}

      <div className="child_section">
        <div className="child_img">
          <img src="/public/assets/childimg.webp" alt="" />
        </div>
        <div className="child_heading">
          <h1>Create profiles for kids</h1>
          <p>
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
      </div>

      {/* accordian section..................... */}

      <div className="accordion_sec">
        <div className="accordion_text">
          <h1>Frequently Asked Questions</h1>
        </div>
        <div className="accordion">
          <div className="accordion_heading">
            <h1>Wha is netflix?</h1>
          </div>
        </div>

        <div className="accordion">
          <div className="accordion_heading">
            <h1>How much does netflix cost?</h1>
          </div>
        </div>
        <div className="accordion">
          <div className="accordion_heading">
            <h1>Where can i watch?</h1>
          </div>
        </div>
        <div className="accordion">
          <div className="accordion_heading">
            <h1>how do i cancle?</h1>
          </div>
        </div>
        <div className="accordion">
          <div className="accordion_heading">
            <h1>What can i watch on netflix?</h1>
          </div>
        </div>
        <div className="accordion">
          <div className="accordion_heading">
            <h1>Is netflix good for kids?</h1>
          </div>
        </div>

        <div className="accordion_btn_sec">
          <div className="acc_text">
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
          </div>

          {/* accordinate inputfeild section............// */}

          <div className="accordion_input">
            <input type="text" placeholder=" Email address" />
            <div className="accordion-btn">
              <button>
                Get Started <FaGreaterThan />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* footer section.............................// */}

      <div className="footer">
        <div className="question_call">
          <div className="question_heading">
            <h4>Questions? Call </h4>{" "}
            <span>
              <p>000-800-919-1694</p>
            </span>
          </div>
          <p>FAQ</p>
          <p>Media Centre</p>
          <p>Ways to Watch</p>
          <p>Cookie Preferences</p>
          <p>Speed Test</p>
          <div className="footer_btn">
            <button>
              {" "}
              <span>
                <MdLanguage className="footer_internet" />
              </span>{" "}
              Englis
            </button>
          </div>
          <p>Netflix India</p>
        </div>

        <div className="help_center">
          <div className="help_center_text">
            <p>Help Centre</p>
            <p>Investor Relations</p>
            <p>Terms of Use</p>
            <p>Corporate Information</p>
            <p>Legal Notices</p>
          </div>
        </div>

        <div className="account">
          <div className="account_text">
            <p>Account</p>
            <p>Jobs</p>
            <p>Privacy</p>
            <p>Contact Us</p>
            <p>Only on Netflix</p>
          </div>
        </div>
      </div>
    </>
  );
}
