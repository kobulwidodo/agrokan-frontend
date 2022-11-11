import axios from "axios";

const BASE_URL = "http://localhost:8080/public";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("agrokan_token")}` || "",
  },
});
