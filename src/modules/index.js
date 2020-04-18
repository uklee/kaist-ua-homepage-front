import { combineReducers } from "redux";
import post from "./post";
import postViewer from "./postViewer";

const rootReducer = combineReducers({
  post,
  postViewer
});

export default rootReducer;
