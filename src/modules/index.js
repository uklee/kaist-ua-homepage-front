import { combineReducers } from "redux";
import auth from "./auth";
import post from "./post";
import posts from "./posts";
import boards from "./boards";
import postViewer from "./postViewer";

const rootReducer = combineReducers({
  auth,
  post,
  posts,
  boards,
  postViewer
});

export default rootReducer;
