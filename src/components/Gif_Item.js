import React from "react";

export default function GifItem({ gifItem, index }) {
  return (
    <div key={index}>
      <div className="button-gif">
        <img className="img-gifs" src={gifItem.images.original.url} alt="" />
      </div>
    </div>
  );
}
