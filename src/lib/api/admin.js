import baseURL from "../baseURL";
import axios from "axios";

const admins = axios.create({ baseURL: `${baseURL}/admins` });

export const login = body => admins.post("/login", body);

export const register = body => admins.post("/register", body);
