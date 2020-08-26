import baseURL from "../baseURL";
import axios from "axios";

const payments = axios.create({ baseURL: `${baseURL}/payments` });

export const upload = body => payments.post("", body);
