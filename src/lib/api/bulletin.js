import baseURL from "../baseURL";
import axios from "axios";

const bulletins = axios.create({ baseURL: `${baseURL}/boards` });

export const open = ({ title, description }) =>
  bulletins.post("", { title, description });

export const list = () => bulletins.get("");

export const close = id => bulletins.delete(`/${id}`);

export const reopen = (id, { title, description }) =>
  bulletins.patch(`/${id}`, { title, description });
