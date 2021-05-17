import React from "react";

export default function Favorites() {
  function renderGifsFavorites() {
    return <h1>Lista de Favoritos</h1>;
  }

  return (
    <>
      <div className="wrapper">{renderGifsFavorites()}</div>
    </>
  );
}
