import "../css/Home.css";
import moviesData from "../helper/moviesData.json";
import { HiHeart } from "react-icons/Hi";
import SliderImg from "../components/SliderImg";
import { useContext } from "react";
import { UserContext } from "../context";

export default function Home() {
const state = useContext(UserContext);
// desrtructure function form state 
// const {addToFavorite} = state; 

  return (
    <>
      <SliderImg />

      {/* <!-- card maping....................../  */}

      <div className="movie-card-container">
        
        {moviesData.map((curElem) => {
          return (
            <>
              <div className="card">
                <div className="card_img">
                  <img src={curElem.Poster} alt="" />

                 <div className="favourite_btn">
                 <button onClick={() => state.addToFavorite(curElem)}>Add Tofourite< HiHeart className="FaHeart"/></button>
                 </div>
                </div>
                

                <div className="card_content">
                  <h2>{curElem.Title}</h2>
                  <h2>{curElem.Genre}</h2>
                  <h2>{curElem.Released}</h2>
                  <h2>{curElem.Language}</h2>
                  <a href={curElem.link}>See Description</a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
