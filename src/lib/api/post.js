import axios from "axios";

const posts = axios.create({ baseURL: "http://localhost:8080/posts" });

export const write = ({ title, author, content }) =>
  posts.post("", { title, author, content });

export const list = () => posts.get("");

export const read = id => posts.get(`/posts/${id}`);

export const update = (id, { title, content }) =>
  posts.patch(`/posts/${id}`, { title, content });

export const remove = id => posts.delete(`/posts/${id}`);
