import React from 'react'

export default function Gifs({ gifsInfo }) {
  return (
    <>
      {gifsInfo.map((gif, index) => {
        return (
          <div key={index}>
            <img src={gif.images.original.url} alt="" />
          </div>
        );
      })}
    </>
  );
}
