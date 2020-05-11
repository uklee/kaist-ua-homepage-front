import baseURL from "../baseURL";
import axios from "axios";

const banners = axios.create({ baseURL: `${baseURL}/banners` });

export const list = () => banners.get("");
