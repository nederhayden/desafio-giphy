export default function Gifs({ gifsInfo }) {
  return (
    <>
      {gifsInfo.map((gif) => {
        return (
          <div key={gif.id}>
            <img src={gif.images.fixed_height.url} alt="" />
          </div>
        );
      })}
    </>
  );
}
