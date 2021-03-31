import React, { useContext, useState } from "react";
import ModalView from "../components/Modal_View";
import { ModalContext } from "../contexts/ModalContext";
// import GifItem from "../components/Gif_Item";

export default function Gifs({ gifsInfo }) {
  const { showModal, setShowModal } = useContext(ModalContext);
  const [currentGif, setCurrentGif] = useState();

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
        </div>
      </div>
    );
  }
}
