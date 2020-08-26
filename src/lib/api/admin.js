import baseURL from "../baseURL";
import axios from "axios";

const admins = axios.create({
  baseURL: `${baseURL}/admins`,
  withCredentials: true
});

export const login = body => admins.post("/login", body);
export const check = () => admins.get(`/check`);
export const register = body => admins.post("/register", body);
