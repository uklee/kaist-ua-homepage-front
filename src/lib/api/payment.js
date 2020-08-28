import baseURL from "../baseURL";
import axios from "axios";

const payments = axios.create({
  baseURL: `${baseURL}/payments`,
  withCredentials: true
});

export const upload = body => payments.post("", body);
export const list = body => payments.get("", body);
