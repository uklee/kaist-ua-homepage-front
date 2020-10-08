import axios from "axios";
import baseURL from "../baseURL";
import qs from "qs";

const petitions = axios.create({
  baseURL: `${baseURL}/petitions`,
  withCredentials: true
});

export const write = petition => petitions.post("", petition);

export const list = ({ page, title }) => {
  const queryString = qs.stringify({
    page,
    title
  });
  return petitions.get(`?${queryString}`);
};

export const read = id => petitions.get(`/${id}`);

export const vote = id => petitions.post(`/vote/${id}`);

export const deletePetition = id => petitions.delete(`/${id}`);
