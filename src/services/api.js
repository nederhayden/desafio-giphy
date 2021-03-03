import axios from "axios";

const api_key = "3ZIhfO2H4JbemWElmw6Id7NM0aTLCHOT";
/* const urlSearch =
  `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=&limit=25&offset=0&rating=g&lang=pt`; */

const api = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs/",
  params: {
    api_key: api_key,
  },
});

export default api;
