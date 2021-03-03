import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function Home() {
  // Criando o estado (State)
  const [gifs, setGifs] = useState([]);

  async function fetchData() {
    // Consumindo a API
    const response = await api.get("/trending");

    // Alimentando com os dados da API
    setGifs(response.data.data);
  }

  useEffect(() => fetchData(), [gifs]);

 

  return (
    <div className="container gifs">
      <input type="text" />
      <input type="button" value="Search" />
      <ul>
      {gifs.map((gif) => {
        return (
            <a href={gif.url} key={gif.id}>
              <img src={gif.images.fixed_height.url} alt="" />
            </a>
        );
      })}
      </ul>      
    </div>
  );
}
