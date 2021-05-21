import React, { useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { ModalContext } from "../../contexts/ModalContext";
// import "./Favorites.scss";
import "../../pages/Favorites/Favorites.scss";

export default function Favorites() {
  const { favoriteGifs, removeGif } = useContext(ModalContext);
  const [myGifs, setMyGifs] = useState([]);

  function handleRemoveGif(id) {
    const gifId = id;
    const result = myGifs.filter((gif) => gif.id !== gifId);
    setMyGifs(result);
    removeGif(gifId);
    toast.success("OK ! GIF removed");
  }

  useEffect(() => {
    setMyGifs(favoriteGifs);
  }, [favoriteGifs]);

  function renderGifsFavorites() {
    return (
      <div>
        <h1>Lista de Favoritos</h1>
        <br />

        <div>
          {myGifs.length
            ? myGifs.map((gif, index) => (
                <div className="wrapper" key={index}>
                  <img
                    className="img-gifs"
                    src={gif.image}
                    onClick={() => handleRemoveGif(gif.id)}
                    alt=""
                  />
                </div>
              ))
            : "Add GIF's to favorites for view"}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="wrapper">{renderGifsFavorites()}</div>
    </>
  );
}
