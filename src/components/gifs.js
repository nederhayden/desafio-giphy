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
      <div key={index} >
        <img className='img-gifs'  src={gifItem.images.original.url} alt="" />
      </div>
  );
}
