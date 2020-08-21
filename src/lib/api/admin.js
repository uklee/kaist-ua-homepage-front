import baseURL from "../baseURL";
import axios from "axios";

const admins = axios.create({ baseURL: `${baseURL}/admins` });

export const login = body => admins.post("/login", body);

export const checkAdmin = access_token =>
  admins.get("/check", { params: { access_token } });

export const register = body => admins.post("/register", body);
