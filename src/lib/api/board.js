import baseURL from "../baseURL";
import axios from "axios";

const boards = axios.create({ baseURL: `${baseURL}/boards` });

export const open = ({ title, description }) =>
  boards.post("", { title, description });

export const list = () => boards.get("");

export const close = id => boards.delete(`/${id}`);

export const reopen = (id, { title, description }) =>
  boards.patch(`/${id}`, { title, description });
