import React from "react";
import { Link } from "react-router-dom";
import "../css/sliderimg.css";

export default function () {
  return (
    <>
      <div className="movi_card_slider">
      
        <div className="img-slider">
          <Link to='/videoplayer'>
          <img
            src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjQyMzI2OTA3OF5BMl5BanBnXkFtZTgwNDg5NjQ0OTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
            alt=""
          />
          </Link>
         
        </div>

        <div className="img-slider">
          <Link to='/videoplayer'>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5IuxfEt-WmUIrpJldszdRJFfTubSEeQVMVNuv63Z0PNfvbWV"
            alt=""
          />
          </Link>
         
        </div>

        <div className="img-slider">
          <Link to='/videoplayer'>
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT3VT-Ynisr-nRV7R65rC8iZ4jyJKgLHU7wvROHYTnc1X7zg_4i"
            alt=""
          />
          </Link>
        
        </div>
      </div>
    </>
  );
}
