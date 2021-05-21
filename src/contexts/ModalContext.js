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

  return (
    // Value: todos os valores que quero deixar exposto/acessível
    <ModalContext.Provider
      value={{
        showModal,
        setShowModal,
        favoriteGifs,
        setFavoriteGifs,
        removeGif,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
