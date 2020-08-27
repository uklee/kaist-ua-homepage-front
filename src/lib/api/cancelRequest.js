import axios from "axios";
import baseURL from "../baseURL";

const cancelRequest = axios.create({ baseURL: `${baseURL}/cancelRequest` });

export const write = id => cancelRequest.post("", id);

export const list = () => cancelRequest.get();

export const read = id => cancelRequest.get(`/${id}`);

export const remove = id => cancelRequest.delete(`/${id}`);
