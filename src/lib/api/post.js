import axios from "axios";
import baseURL from "../baseURL";
import qs from "qs";

const posts = axios.create({ baseURL: `${baseURL}/posts` });

export const write = ({ title, author, content, bulletinId }) =>
  posts.post("", { title, author, content, bulletinId });

export const list = () => posts.get("");

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
