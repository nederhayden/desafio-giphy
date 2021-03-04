import React, { useEffect, useState } from "react";
import axios from "axios";

import apiTrending from "../services/api";
// import apiSearch from "../services/api";
import Gifs from "../components/gifs";

export default function Home() {
  // Criando o estado (State)
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      // Consumindo a API
      const response = await apiTrending.get("/trending");

      // Alimentando com os dados da API
      setData(response.data.data);

      setIsLoading(false);
    };
    fetchData();
  }, []);

  // RENDERIZA OS GIFS
  const renderGifs = () => {
    if (isLoading) {
      return <h1>Loading...</h1>;
    }
    return <Gifs gifsInfo={data} />;
  };

  // PEGA O TEXTO DIGITADO PELO USUARIO
  const handleSearcChange = (event) => {
    setSearch(event.target.value);
  };

  // RETORNA A PESQUISA DO USUARIO
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const response = await axios("https://api.giphy.com/v1/gifs/search", {
      params: {
        api_key: "3ZIhfO2H4JbemWElmw6Id7NM0aTLCHOT",
        q: search,
      },
    });

    setData(response.data.data);
    setIsLoading(false);
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Search Gifs"
          onChange={handleSearcChange}
          value={search}
        />

        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </form>

      {renderGifs()}
    </>
  );
}
