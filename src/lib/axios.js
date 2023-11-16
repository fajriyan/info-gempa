import axios from "axios";
export const instanse = axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
});
