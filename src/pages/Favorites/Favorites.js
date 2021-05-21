import React, { useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { ModalContext } from "../../contexts/ModalContext";
import "./Favorites.scss";

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
      <>
        <div className="wrapper">
          <h1>Lista de Favoritos</h1>
        </div>

        <br />
        <div className="wrapper-favorites">
          {myGifs.length ? (
            myGifs.map((gif, index) => (
              <div key={index}>
                <div className="button-gif">
                  <img className="img-gifs" src={gif.image} alt="" />
                  <span
                    className="overlay"
                    onClick={() => handleRemoveGif(gif.id)}
                  >
                    {`Remove to Favorites`}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <h4>Add GIF's to favorites for view</h4>
          )}
        </div>
      </>
    );
  }

  return (
    <>
      <div className="wrapper">{renderGifsFavorites()}</div>
    </>
  );
}
