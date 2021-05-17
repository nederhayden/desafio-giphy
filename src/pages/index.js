import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import Gifs from "./gifs";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../assets/loading.gif";
import ModalContextProvider from "../contexts/ModalContext";
import "./index.scss";

export default function Home() {
  // Criando o estado (State)
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [url, setUrl] = useState("/trending");
  const [totalCount, setTotalCount] = useState(0);

  const arraySize = 42;

  async function fetchGifs() {
    setLoading(true);

    // Consumindo a API
    const response = await api.get(url, {
      params: {
        limit: arraySize,
        offset: offset,
      },
    });

    // Alimentando com os dados da API
    setOffset(offset + arraySize);
    setTotalCount(response.data.pagination.total_count);
    setData((gifs) => [...gifs, ...response.data.data]);
    setLoading(true);
  }

  useEffect(() => {
    fetchGifs();
    // eslint-disable-next-line
  }, []);

  async function loadMoreGifs() {
    if (totalCount > offset) {
      setLoading(true);
      setOffset(offset + arraySize);

      const response = await api.get(url, {
        params: {
          limit: arraySize,
          offset: offset,
        },
      });

      setTimeout(() => {
        setData((gifs) => [...gifs, ...response.data.data]);
        setTotalCount(response.data.pagination.total_count);
        setLoading(false);
      }, 1500);
    } else {
      <h3>Você viu todos os Gifs jovem padawan!!!</h3>;
    }
  }

  // RENDERIZA OS GIFS
  function renderGifs() {
    return (
      <ModalContextProvider>
        <InfiniteScroll
          className="infinite-scroll"
          dataLength={data.length}
          next={loadMoreGifs}
          hasMore={true}
        >
          <Gifs gifsInfo={data} />
        </InfiniteScroll>
      </ModalContextProvider>
    );
  }

  // PEGA O TEXTO DIGITADO PELO USUARIO
  function handleSearcChange(event) {
    event.preventDefault();
    setUrl("/search");
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
  }

  return (
    <>
      <div className="form-class">
        <form>
          <Link to="/favorites">
            <button className="btn-favorites">
              <p>Favorites</p>
            </button>
          </Link>
          <input
            type="text"
            placeholder="Search Gifs"
            onChange={handleSearcChange}
            value={search}
          />

          <button className="btn-search" type="submit" onClick={handleSubmit}>
            <p>Search</p>
          </button>
        </form>
      </div>
      <br />
      <div className="wrapper">{renderGifs()}</div>
      <div className="loading-img">
        {loading && <img src={Loading} alt="" />}
      </div>
    </>
  );
}
