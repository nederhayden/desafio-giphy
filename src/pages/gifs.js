import React, { useContext, useState } from "react";
import ModalView from "../components/Modal_View";
import { ModalContext } from "../contexts/ModalContext";

export default function Gifs({ gifsInfo, favIcon }) {
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
              fav={favIcon}
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

  function GifItem({ gifItem, index, fav }) {
    const FavIcon = fav;
    const addFavorites = (favGif) => {
      const newFavoriteList = [...favorites, favGif];
      setFavorites(newFavoriteList);
    };
    return (
      <div key={index}>
        <div
          className="button-gif"
          onClick={() => {
            setCurrentGif(gifItem);
            setShowModal(!showModal);
          }}
        >
          <img className="img-gifs" src={gifItem.images.original.url} alt="" />
          <div className="overlay" onClick={() => addFavorites(gifItem)}>
            <FavIcon />
          </div>
        </div>
      </div>
    );
  }
}
