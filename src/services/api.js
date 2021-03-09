import axios from "axios";

const api_key = "3ZIhfO2H4JbemWElmw6Id7NM0aTLCHOT";
const baseURL = "https://api.giphy.com/v1/gifs";

const api = axios.create({
  baseURL: baseURL,
  params: {
    api_key: api_key,
  },
});

export default api;
