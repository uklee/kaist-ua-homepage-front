import axios from "axios";
import qs from "qs";

const bulletins = axios.create({ baseURL: "http://localhost:8080/bulletins" });

export const open = ({ title, description }) =>
  bulletins.post("", { title, description });

export const list = () => bulletins.get("");

export const close = id => bulletins.delete(`/${id}`);

export const reopen = (id, { title, description }) =>
  bulletins.patch(`/${id}`, { title, description });
