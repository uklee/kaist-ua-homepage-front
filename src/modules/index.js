import { combineReducers } from "redux";
import post from "./post";
import posts from "./posts";
import boards from "./boards";
import postViewer from "./postViewer";

const rootReducer = combineReducers({
  post,
  posts,
  boards,
  postViewer
});

export default rootReducer;
