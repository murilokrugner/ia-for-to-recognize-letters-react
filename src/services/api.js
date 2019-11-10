import axios from "axios";

const api = axios.create({
  baseURL: "http://159.203.72.78:3333"
});

export default api;
