import React, { useContext, useState } from "react";
import ModalView from "../components/Modal_View";
import { ModalContext } from "../contexts/ModalContext";

export default function Gifs({ gifsInfo }) {
  const { showModal, setShowModal } = useContext(ModalContext); // Pega referencia do context global
  const [currentGif, setCurrentGif] = useState();
  const [favorites, setFavorites] = useState([]);

  return (
    <>
      {showModal ? (
        <ModalView open={showModal} hide={!showModal} gif={currentGif} />
      ) : (
        gifsInfo.map((gif, index) => {
          return (
            <GifItem
              gifItem={gif}
              key={index}
              onClick={() => {
                setShowModal(!showModal);
                setCurrentGif(index);
              }}
            />
          );
        })
      )}
    </>
  );

  function GifItem({ gifItem, index }) {
    const addFavorites = (gifItem) => {
      const newFavoriteList = [...favorites, gifItem];

      setFavorites(newFavoriteList);
    };

    return (
      <div key={index}>
        <div className="button-gif">
          <img
            className="img-gifs"
            src={gifItem.images.original.url}
            onClick={() => {
              setCurrentGif(gifItem);
              setShowModal(!showModal);
            }}
            alt=""
          />

          <span className="overlay" onClick={() => addFavorites(gifItem)}>
            {`Add to Favorites`}
          </span>
        </div>
      </div>
    );
  }
}
