import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function Home() {
  // Criando o estado (State)
  const [giphy, setGiphy] = useState();

  async function fetchData() {
    // Consumindo a API
    const response = await api.get("/trending");
    // Alimentando com os dados da API
    setGiphy(response.data.giphy);
    console.log(response.data.giphy);
  }

  useEffect(() => fetchData(), []);

  const renderGifs = () => {
    return giphy.map((gif) => {
      return (
        <div key={gif.id} className="gif">
          <img src={gif.images.fixed_height.url} alt="" />
        </div>
      );
    });
  };

  return <div className="container gifs">{renderGifs()}</div>;
}
