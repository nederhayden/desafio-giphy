import axios from "axios";

const api_key = "3ZIhfO2H4JbemWElmw6Id7NM0aTLCHOT";

const apiTrending = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
  params: {
    api_key: api_key,
  },
});

const apiSearch = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
  params: {
    api_key: api_key,
    // q: search
  },
});

export default apiTrending;
