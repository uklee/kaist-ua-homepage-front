import { combineReducers } from "redux";
import post from "./post";
import posts from "./posts";
import bulletins from "./bulletins";

const rootReducer = combineReducers({
  post,
  posts,
  bulletins
});

export default rootReducer;
