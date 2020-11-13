import axios from "axios";
import baseURL from "../baseURL";
import qs from "qs";

const posts = axios.create({
  baseURL: `${baseURL}/posts`,
  withCredentials: true
});

export const write = post => posts.post("", post);

export const read = id => posts.get(`/${id}`);

export const list = ({ page, author, title, boardId }) => {
  const queryString = qs.stringify({
    page,
    author,
    title,
    boardId
  });
  return posts.get(`?${queryString}`);
};

export const update = (id, { title, content }) =>
  posts.patch(`/posts/${id}`, { title, content });

export const remove = id => posts.delete(`/posts/${id}`);
