import axios from "axios";
import baseURL from "../baseURL";
import qs from "qs";

const posts = axios.create({ baseURL: `${baseURL}/posts` });

export const write = ({ title, author, content, boardId }) =>
  posts.post("", { title, author, content, boardId });

export const list = ({ board }) => {
  const page = 1;
  const boardId = board.id;
  const queryString = qs.stringify({
    page,
    boardId
  });
  return posts.get(`?${queryString}`);
};

export const read = id => posts.get(`/${id}`);

export const listPosts = ({ page, author, title, boardId }) => {
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
