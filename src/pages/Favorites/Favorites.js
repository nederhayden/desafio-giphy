import React from "react";

export default function Favorites() {
  
  function renderGifsFavorites() {
    return (
      <div>
        <h1>Lista de Favoritos</h1>
        <br />

        <div>
          <img src={""} alt="" />

          <span>{`Add to Favorites`}</span>
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
