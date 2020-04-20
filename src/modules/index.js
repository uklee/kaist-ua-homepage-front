import { combineReducers } from "redux";
import post from "./post";
import posts from "./posts";
import bulletins from "./bulletins";
import postViewer from "./postViewer";

const rootReducer = combineReducers({
  post,
  posts,
  bulletins,
  postViewer
});

export default rootReducer;
