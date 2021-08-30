import React, { createContext, useState, useEffect } from "react";

// Estado global da aplicacao
export const ModalContext = createContext();

export default function ModalContextProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [favoriteGifs, setFavoriteGifs] = useState([]);

  useEffect(() => {
    if (window.localStorage.favoriteGifs) {
      const storedFavoriteGifs = JSON.parse(window.localStorage.favoriteGifs);
      console.log("storedFavoritegifs: ", storedFavoriteGifs);
      if (storedFavoriteGifs.list) {
        setFavoriteGifs(storedFavoriteGifs.list);
      }
    }
  }, []);

  function removeGif(id) {
    const gifId = id;
    const handleList = favoriteGifs.filter((gif) => gif.id !== gifId);

    setFavoriteGifs(handleList);

    window.localStorage.setItem(
      "favoriteGifs",
      JSON.stringify({ list: handleList })
    );
  }

  function renameGif(id, value) {
    const gifId = id;
    const gifTitle = value;
    const gif = favoriteGifs.find((gif) => gif.id === gifId);
    gif.title = gifTitle;

    const updatedList = favoriteGifs.map((item) => {
      if (item.id === gifId) item.title = gifTitle;
      return item;
    });
    setFavoriteGifs(updatedList);

    window.localStorage.setItem(
      "favoriteGifs",
      JSON.stringify({ list: updatedList })
    );
  }

  return (
    // Value: todos os valores que quero deixar exposto/acessível
    <ModalContext.Provider
      value={{
        showModal,
        setShowModal,
        favoriteGifs,
        setFavoriteGifs,
        removeGif,
        renameGif
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
