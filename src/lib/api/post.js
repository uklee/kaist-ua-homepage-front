import axios from "axios";

const posts = axios.create();

export const write = ({ title, author, content }) =>
  posts.post("/posts", { title, author, content });

export const list = () => posts.get("/posts");

export const read = id => posts.get(`/posts/${id}`);

export const update = (id, { title, content }) =>
  posts.patch(`/posts/${id}`, { title, content });

export const remove = id => posts.delete(`/posts/${id}`);
