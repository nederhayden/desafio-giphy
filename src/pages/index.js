import React, { useEffect, useState } from "react";
import api from "../services/api";
import Gifs from "../components/gifs";

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
    <>
      <form>
        <input type="text" placeholder="Search Gifs" />

        <button type="submit">Search</button>
      </form>
      {gifs && <Gifs gifsInfo={gifs} />}
    </>
  );
}
