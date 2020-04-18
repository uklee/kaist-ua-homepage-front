import axios from "axios";
export default axios.create({
  baseURL: `${process.env.DEVELOPMENT_URL || "http://localhost:8080"}`,
  responseType: "json"
});
