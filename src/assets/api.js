import axios from "axios";
import { apiHost } from "./config";

let http = axios.create({
  baseURL: apiHost,
  headers: {
    token: window.localStorage.getItem("token"),
  },
});

export default {
  refreshApi: () => {
    http = axios.create({
      baseURL: apiHost,
      headers: {
        token: window.localStorage.getItem("token"),
      },
    });
  },
  getAllCategogys: () => {
    return http.get("category");
  }
}