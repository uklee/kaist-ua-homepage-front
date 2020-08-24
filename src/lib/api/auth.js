import baseURL from "../baseURL";
import axios from "axios";

const auth = axios.create({
  baseURL: `${baseURL}/auth`,
  withCredentials: true
});

export const getUser = () => auth.get(`/getUser`);
export const checkUser = () => auth.get(`/checkUser`);
export const logout = () => auth.get(`/logout`);
