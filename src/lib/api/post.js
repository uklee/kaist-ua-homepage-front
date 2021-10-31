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
  const BoardId = boardId;
  const queryString = qs.stringify({
    page,
    author,
    title,
    BoardId
  });
  return posts.get(`?${queryString}`);
};

export const update = (id, post) =>
  posts.patch(`${id}`, post);

export const remove = id => posts.delete(`${id}`);
