import axios from "axios";
import qs from "qs";

const posts = axios.create({ baseURL: "http://localhost:8080/posts" });

export const write = ({ title, author, content }) =>
  posts.post("", { title, author, content });

export const list = () => posts.get("");

export const read = id => posts.get(`/${id}`);

export const listPosts = ({ page, author, title }) => {
  const queryString = qs.stringify({
    page,
    author,
    title
  });
  return posts.get(`?${queryString}`);
};

export const update = (id, { title, content }) =>
  posts.patch(`/posts/${id}`, { title, content });

export const remove = id => posts.delete(`/posts/${id}`);
