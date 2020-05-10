import axios from "axios";
import qs from "qs";

const posts = axios.create({ baseURL: "http://localhost:8080/posts" });

export const write = ({ title, author, content, bulletinId }) =>
  posts.post("", { title, author, content, bulletinId });

export const list = ({ bulletin }) => {
  const page = 1;
  const bulletinId = bulletin.id;
  const queryString = qs.stringify({
    page,
    bulletinId
  });
  return posts.get(`?${queryString}`);
};

export const read = id => posts.get(`/${id}`);

export const listPosts = ({ page, author, title, bulletinId }) => {
  const queryString = qs.stringify({
    page,
    author,
    title,
    bulletinId
  });
  return posts.get(`?${queryString}`);
};

export const update = (id, { title, content }) =>
  posts.patch(`/posts/${id}`, { title, content });

export const remove = id => posts.delete(`/posts/${id}`);
