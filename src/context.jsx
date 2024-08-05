import { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UserContext = createContext();
const AppProvider = ({ children }) => {
  const [favouriteProduct, setFavouriteProduct] = useState([]);

  const addToFavorite = (card) => {
    const exist = favouriteProduct.find((curElem) => curElem.id === card.id);
    if (exist) {
      alert("Product already been added");
    } else {
      setFavouriteProduct([...favouriteProduct, card]);
      toast("card successfully added to favorite", {
        type: "success",
        autoClose: 1000,
        theme: "dark",
      });
    }
  };
  return (
    <>
      <UserContext.Provider
        value={{
          favouriteProduct,
          setFavouriteProduct,
          addToFavorite,
        }}
      >
        {children}
      </UserContext.Provider>
      <ToastContainer />
    </>
  );
};

export default AppProvider;
