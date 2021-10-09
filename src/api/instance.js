import axios from "axios";

const instance = axios.create({
  baseURL: "https://6153c7069935230017557055.mockapi.io",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
