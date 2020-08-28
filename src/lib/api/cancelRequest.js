import axios from "axios";
import baseURL from "../baseURL";

const cancelRequest = axios.create({
  baseURL: `${baseURL}/cancelRequest`,
  withCredentials: true
});

export const write = ({ year, semester }) =>
  cancelRequest.post("", { year, semester });

export const list = () => cancelRequest.get();

export const read = id => cancelRequest.get(`/${id}`);

export const remove = ({ year, semester }) =>
  cancelRequest.delete(`/`, { params: { year, semester } });
