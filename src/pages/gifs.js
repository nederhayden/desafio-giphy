import React from "react";

export default function Gifs({ gifsInfo }) {
  return (
    <>
      {gifsInfo.map((gif, index) => {
        return <GifItem gifItem={gif} key={index} />;
      })}
    </>
  );
}

function GifItem({ gifItem, index }) {
  return (
    <div key={index}>
      <button
        className="button-gif"
        onClick={() => console.log(`Gif Clicado - ${gifItem.id}`)}
      >
        <img className="img-gifs" src={gifItem.images.original.url} alt="" />
      </button>
    </div>
  );
}
