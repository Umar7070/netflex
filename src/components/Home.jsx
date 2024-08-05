import "../css/Home.css";
import moviesData from "../helper/moviesData.json";
import { HiHeart } from "react-icons/Hi";
import SliderImg from "../components/SliderImg";
import { useContext } from "react";
import { UserContext } from "../context";
import { Link } from "react-router-dom";

export default function Home() {
  const state = useContext(UserContext);
  // desrtructure function form state
  const { addToFavorite } = state;

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
                  <Link to="/videoplayer">
                    <img src={curElem.Poster} alt="" />
                  </Link>

                  <div className="favourite_btn">
                    <button onClick={() => state.addToFavorite(curElem)}>
                      Add To Favourite
                    </button>
                    <span className="FaHeart">
                      <HiHeart />
                    </span>
                  </div>
                </div>

                <div className="card_content">
                  <h3>{curElem.Title}</h3>
                  <h3>{curElem.Genre}</h3>
                  <h3>{curElem.Released}</h3>
                  <h3>{curElem.Language}</h3>
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
