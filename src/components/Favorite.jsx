import { useContext } from "react";
import { UserContext } from "../context";
import { toast } from "react-toastify";
const Favorite = () => {
  const data = useContext(UserContext);
  const { favouriteProduct, setFavouriteProduct } = data;

  //  -----------Remove Item---------------
  const removeItem = (umar) => {
    const updateItem = favouriteProduct.filter((curElem) => {
      return umar.id !== curElem.id;
    });
    setFavouriteProduct(updateItem);
    toast("remove your data", {
      autoClose: 1000,
      theme: "dark",
    });
  };

  return (
    <>
      {/* -------------show and height data------------- */}
      {favouriteProduct.length === 0 && (
        <div className="empty-cart">
          <h1>No data found</h1>
        </div>
      )}

      <div className="movie-card-container">
        {favouriteProduct.map((curElem) => {
          return (
            <>
              <div className="card">
                <div className="card_img">
                  <img src={curElem.Poster} alt="" />

                  <div className="favourite_btn">
                    <button
                      style={{ padding: "0.4rem 4.4rem" }}
                      onClick={() => removeItem(curElem)}
                    >
                      Remove
                    </button>
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
};

export default Favorite;
