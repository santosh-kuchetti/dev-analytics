import axios from "axios";
const baseURL = `https://mocki.io/v1/31191abc-dedf-4ff9-8802-fc8a7b132835`;
const API = axios.create({
  baseURL: baseURL,
});

export const get_Dev_Deatils = () => API.get(baseURL);
