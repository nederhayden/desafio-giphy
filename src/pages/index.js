import React, { useEffect, useState } from "react";
import api from "../services/api";
import Gifs from "../components/gifs";
import Spinner from "../components/spinner";

export default function Home() {
  // Criando o estado (State)
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);

    // Consumindo a API
    const response = await api.get("/trending");
    const results = response.data.data;

    // Alimentando com os dados da API
    setData(results);

    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  // RENDERIZA OS GIFS
  function renderGifs() {
    if (loading) {
      return <Spinner />;
    }
    return <Gifs gifsInfo={data} />;
  }

  // PEGA O TEXTO DIGITADO PELO USUARIO
  function handleSearcChange(event) {
    setSearch(event.target.value);
  }

  // RETORNA A PESQUISA DO USUARIO
  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    const response = await api.get("/search", {
      params: {
        q: search,
      },
    });
    const results = response.data.data;

    setData(results);
    setLoading(false);
  }

  return (
    <>
      <form className="form-class">
        <input
          type="text"
          placeholder="Search Gifs"
          onChange={handleSearcChange}
          value={search}
        />

        <button type="submit" onClick={handleSubmit}>
          <p>Search</p>
        </button>
      </form>
      <div className="wrapper">{renderGifs()}</div>
    </>
  );
}
