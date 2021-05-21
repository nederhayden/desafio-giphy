import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import ModalView from "../components/Modal_View";
import { ModalContext } from "../contexts/ModalContext";
export default function Gifs({ gifsInfo }) {
  const { showModal, setShowModal, favoriteGifs, setFavoriteGifs } =
    useContext(ModalContext); // Pega referencia do context global
  const [currentGif, setCurrentGif] = useState();

  function addFavorites(gifsInfo) {
    // cria um novo objeto com todas as informacoes do gif
    const newGif = {
      id: gifsInfo.id,
      title: gifsInfo.title,
      image: gifsInfo.images.original.url,
    };

    // verifica se ja existe o gif na lista de favoritos
    const gifAlreadyExists = favoriteGifs.filter(
      (favoriteGif) => favoriteGif.id === newGif.id
    );

    // mostra um aviso caso o gif escolhido ja esteja nos favoritos
    if (gifAlreadyExists.length) return toast.error("Ops! Gif already added");
    // cria a lista com o novo gif adicionado
    else {
      setFavoriteGifs([...favoriteGifs, newGif]);
    }

    // lista vazia pra armazenar os gifs favoritados
    let storedFavoriteGifs = [];

    // adiciona na lista os gifs
    if (window.localStorage.favoriteGifs) {
      storedFavoriteGifs = JSON.parse(window.localStorage.favoriteGifs);
      storedFavoriteGifs = storedFavoriteGifs.list;
    }

    // cria o nome da lista e cria/atualiza a lista de gifs
    window.localStorage.setItem(
      "favoriteGifs",
      JSON.stringify({ list: [...storedFavoriteGifs, newGif] })
    );
    toast.success("OK ! GIF added");
  }

  return (
    <>
      {showModal ? (
        <ModalView open={showModal} hide={!showModal} gif={currentGif} />
      ) : (
        gifsInfo.map((gif, index) => {
          return (
            <div key={index}>
              <div className="button-gif">
                <img
                  className="img-gifs"
                  src={gif.images.original.url}
                  onClick={() => {
                    setCurrentGif(gif);
                    setShowModal(!showModal);
                  }}
                  alt=""
                />

                <span className="overlay" onClick={() => addFavorites(gif)}>
                  {`Add to Favorites`}
                </span>
              </div>
            </div>
          );
        })
      )}
    </>
  );
}
